<?php 
/*
    pour savoir d'une page a l'autre que notre utilisateur est connecté je vaisgarder l'information session.
*/
session_start();
/*
    si l'utilisateur est deja connecté,
    je le redirige ailleurs 
*/
if(isset($_SESSION["logged"]) && $_SESSION["logged"] === true)
   {
       header("Location: /");
       exit();
   }

   $email = $pass = "";
   $error = [];

   if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['login']))
   {
      if(empty($_POST["email"]))
      {
          $error["email"] = "Veuillez renseigner votre email";
      }
      else
      {
          $email = $_POST["email"];
      }
      if(empty($_POST["password"]))
      {
          $error["password"] = "Veuillez renseigner votre password";
      }
      else
      {
          $pass = $_POST["password"];
      }

      if(empty($error))
      {
          /*
              habituellement il nous faudrait se connecter a la BDD et envoyer une requete  pour trouverl'utilisateur.
              mais on pas encore vu la connexion a la bdd.
              donc on va recupere nos utilisateurs depuis un fichier json.

              fils_get_contents() permet de recuperer du contenu d'un fichier
              json_decode() permet de transformer un json en données PHP
              (on ne l'utilisera pas ici mais json_encode() transforme
              des données PHP en json)
          */
        
          $users = file_get_contents("../ressources/users.json");
          $users = json_decode($users, true);
          // je regarde si j'ai un utilisateur qui correspond a l'email:
          $user = $users[$email]?? false; //var_dump($email, $users);
          // je verifie si jai trouver un utilisateur:
          if($user)
          {
              /*
                  la fonction "password_verify()" permet de verifier si un mot de passe non hashé correspond à un mot de passe hashé
              */
              if(password_verify($pass, $user["password"]))
              {
                  /*
                      si notre email et notre mot de passe correspondent,
                      on arrive ici, et on a plus qu'a sauvegarder les information que l'on souhaite reutiliser d'une page a l'autre
                  */
                  $_SESSION["logged"] = true;
                  $_SESSION["username"] = $user["username"];
                  //ET si je souhaite creer une durée limite de connexion:
                  $_SESSION["expire"] = time() + 3600;
                  // Enfin je redirige mon utilisateur vers une autre page.
                  header("Location: /");
                  exit();
              }
              else
              {
                  $error["login"] = "Email ou mot de passe incorrect (password)";
              }
          }
          else
          {
              $error["login"] = "Email ou mot de passe incorrect (email)";
          }


      }

      
   }

$title = "";
require __DIR__."/../_header.php";
?>
<form action="" method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <br>
    <span class="error"><?php echo $error["email"]??""; ?></span>
    <br>
    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password">
    <br>
    <span class="error"><?php echo $error["pass"]??""; ?></span>
    <br>
    <input type="submit" value="Connexion" name="login">
    <br>
    <span class="error"><?php echo $error["login"]??""; ?></span>
</form>

<?php 
require __DIR__."/../_footer.php";
?>