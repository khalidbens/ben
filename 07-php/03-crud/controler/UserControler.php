<?php 
    // require __DIR__ . "../../ressources/services/_csrf.php";
    // require __DIR__ . "/../../ressources/services/_csrf.php";
    require __DIR__ . "/../../ressources/services/_shouldBelogge.php";
    require __DIR__ ."/../../ressources/services/_mailer.php";
    // require __DIR__ ."/../model/UserModel.php";
require __DIR__ ."/../model/UserMongoModel.php";

    
    

    /**
     * gere ma page listant les utilisateurs
     *
     * @return void
     */
    function ListUsers()
    {
      $users = getAllUsers();

      require __DIR__ . "/../view/user/ListUser.php";
    }
    /**
     *gerer ma page d'inscription
     *
     * @return void
     */
    function inscription(): void
    {
      shouldBelogge(false, "/");

      $username = $email = $password = "";
      $error = [];
      $regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

      if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['inscription']))
      
       {
        if(empty($_POST["username"]))
        {
          $error[] = "Veuillez renseigner votre nom d'utilisateur";
        }
        else
        {
          $username = clean_data($_POST["username"]);
          if(!preg_match("/^[a-zA-Z' -]{2,25}$/", $username))
          {
            $error["username"] = "Veuillez renseigner un nom d'utilisateur valide";
          }
        }
        // Traitement de l'email
        if(empty($_POST["email"]))
        {
          $error["email"] = "Veuillez renseigner votre email";
        }
        else
        {
          $email = clean_data($_POST["email"]);
          /*
            la fonction filter_var() prendra en premier argument la variable a filtrer, et en second argument une consttante correspondant au filtre a appliquer.
            il y a deux types de filtres:
            FILTER_SANITIZE_***
            FILTER_VALIDATE_***
            dans le premier cas la valeur de retour sera la valeur de la variable filtré.
            dans le second ce sera un booleen


          */
          if(!filter_var($email, FILTER_VALIDATE_EMAIL))
          {
            $error["email"] = "Veuillez renseigner un email valide";
          }
          $resultat = getOneUserByEmail($email);
          if($resultat)
          {
            $error["email"] = "Cet email est déja utilise";
          }
        }
        // Traitement du mot de passe
        if(empty($_POST["password"]))
        {
          $error["password"] = "Veuillez renseigner votre mot de passe";
        }
        else
        {
          $password = trim($_POST["password"]);
          if(!preg_match($regexPass, $password))
          {
            $error["password"] = "Veuillez renseigner un mot de passe valide";
          }
          {
            $password = password_hash($password, PASSWORD_DEFAULT);
          }
        }
        // Traitement verification du mot de passe
        if(empty($_POST["passwordBis"]))
        {
          $error["passwordBis"] = "Veuillez saisir à nouveau votre mot de passe";
        }
        else if($_POST["passwordBis"] !== $_POST["password"])
        {
          $error["passwordBis"] = "Veuillez saisir le meme mot de passe";
        }
        // envoi des données
        if(empty($error))
        {
          addUser($username, $email, $password);
          header("Location: /");
          exit();
        }
       }
       require __DIR__ . "/../view/user/Inscription.php";
    }
    /**
     * gere ma page de suppresion d'utilisateur
     *
     * @return void
     */
    function deleteUser(): void
    {
      // l'utilisateur doit etre connecté
      shouldBelogge(true, "/");
      // l'utilisateur connecter est il celui que l'on tente de supprimer
      if(empty($_GET["id"]) || $_SESSION["idUser"] != $_GET["id"])
      {
        header("Location: /");
        exit();
      }

      deleteUserById($_GET["id"]);

      unset($_SESSION);
      session_destroy();
      setcookie("PHPSESSID", "", time()-3600);

      header("refresh: 5; url = /");

      require __DIR__ . "/../view/user/delete.php";

      }
    /**
     * gere la page de mise a jour de l'utilisateur
     *
     * @return void
     */
    function updateUser(): void
    {   
        // Si l'utilisateur n'est pas connecté ou si il n'est pas le propriétaire de ce profil, on le redirige.
        shouldBelogge(true, "/");
        if(empty($_GET["id"]) || $_SESSION["idUser"] != $_GET["id"])
        {
            header("Location: /");
            exit();
        }
        $user = getOneUserById($_GET["id"]);

        $username = $password = $email = "";
        $error = [];
        $regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

        if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['update']))
        {
            if(empty($_POST["username"]))
            {
              $username = $user["username"];
            }
        else
        {
          $username = clean_data($_POST["username"]);
          if(!preg_match("/^[a-zA-Z' -]{2,25}$/", $username))
          {
            $error["username"] = "Votre nom d'utilisateur ne peut contenir que des lettres";
          }
        }
        // traitement email
        if(empty($_POST["email"]))
        {
          $email = $user["email"];
        }
        else
        {
          $email = clean_data($_POST["email"]);
          if(!filter_var($email, FILTER_VALIDATE_EMAIL))
          {
            $error["email"] = "Veuillez renseigner un email valide";
          }
        elseif($email !== $user["email"])
        {
          $exist = getOneUserByEmail($email);
          if($exist)
          {
            $error["email"] = "Cet email est déja utilise";
          }
        }
  }
        //traitement du mot de passe
        if(empty($_POST["password"]))
        {
          $password = $user["password"];
        }
        elseif(empty($_POST["passwordBis"]))
        {
          $error["passwordBis"] = "Veuillez renseigner à nouveau votre mot de passe";
        }
        elseif($_POST["password"] !== $_POST["passwordBis"])
        {
          $error["passwordBis"] = "Veuillez saisir le meme mot de passe";
        }
        else
        {
          $password = trim($_POST["password"]);
          
          if(!preg_match($regexPass, $password))
          {
              $error["password"] = "Veuillez renseigner un mot de passe valide";
          }
          else
        {
            $password = password_hash($password, PASSWORD_DEFAULT);
        }
        }
        
        
        // envoi des données
        if(empty($error))
        {
          updateUserById($username, $email, $password, $user["idUser"]);
          // die;
          header("Location: /userlist");
          exit();
        }
        
      
        
      }
      require __DIR__ . "/../view/user/update.php";
  }
?>