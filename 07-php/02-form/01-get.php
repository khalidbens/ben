<?php
// Je déclare les variables dont je vais avoir besoin.
$food = $username = $drink = "";
$error = [];
$foodList= ["welsh", "cannelloni", "oyakodon"];
$drinkList= ["jus de tomate", "milkshake", "limonade"];

/*
Il va me falloir vérifier que le formulaire a bien été soumis.
Pour cela je vais vérifier la méthode avec laquelle on est arrivé sur la page ainsi que si j'ai au moins un champ (voir le nom du formulaire s'il est défini).

Pour récupérer la méthode avec laquelle la request est arrivée, j'utilise la superglobal "$_SERVER avec la clef "REQUEST_METHOD".
*/
if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["meal"])) {
  // var_dump($_GET);
  // Vérification du champ username
  if (empty($_GET["username"])) {
    $error["username"] = "Veuillez entrer un nom d'utilisateur";
  } else {
    $username = $_GET["username"];
    // Retire les espaces avant et après le string
    $username = trim($username);
    // Retire les "\" sur les quotes
    $username = stripcslashes($username);
    // Transforme les caractères en entités html (par exemple "<" devient "&lt;"), il permet également d’empêcher l'insertion d'un script dans l'input du formulaire
    $username = htmlentities($username);
    // $username = htmlspecialchars($username); -> la même chose que htmlentities
    if(strlen($username) < 3 || strlen($username) > 20) {
      $error["username"] = "Le nom d'utilisateur doit contenir entre 3 et 20 caractères";
    }
    if (!preg_match("/^[A-Za-z\-_]+$/", $username)) {
      $error["username"] = "Le nom d'utilisateur ne doit contenir que des lettres, des tirets et des underscores";
    }
  }
  // Vérification de mon champ food
  if (empty($_GET["food"])) {
    $error["food"] = "Veuillez choisir une nourriture favorite";
  } elseif (!in_array($_GET["food"], $foodList)) {
    $error["food"] = "Veuillez choisir une nourriture valide";
  } else {
    // Ici mon résultat est forcément égal à ce qu'il y a dans mon tableau, ca ne sert à rien de vérifier le trim et le htmlentities/specialchars
    $food = $_GET["food"];
  }
  // Vérification de mon champ drink
  if (empty($_GET["drink"])) {
    $error["drink"] = "Veuillez choisir une boisson favorite";
  }
  elseif(!in_array($_GET["drink"], $drinkList)) {
    $error["drink"] = "Veuillez choisir une boisson valide";
  } else {
    $drink = $_GET["drink"];
  }
  // Maintenant qu'on fait toutes nos vérifications, on peut traiter le formulaire en vérifient d'abord qu'il n'y a pas d'error
  if (empty($error)) {
    // On enregistre ensuite en BDD nos informations (voir le cours suivant)
    echo "<script>alert('formulaire envoyé')</script>";
  }

}



$title ="La méthode GET en PHP";
require __DIR__."/../_header.php";
?>

<form action="#" method="get">
  <input type="text" name="username" placeholder="Entrez votre nom">
  <span class="error"><?php echo $error["username"] ?? "";?></span>
  <br>
  <fieldset>
    <legend> Nourriture Favorite</legend>
    <input type="radio" name="food" value="welsh" id="welsh">
    <label for="welsh"> Welsh (car vive le fromage)</label>
    <br>

    <input type="radio" name="food" value="cannelloni" id="cannelloni">
    <label for="cannelloni"> Cannelloni (pour changer des raviolis)</label>
    <br>

    <input type="radio" name="food" value="oyakodon" id="oyakodon">
    <label for="oyakodon"> Oyakodon (car j'aime l'humour noir : ca veut dire "bol parent enfant", de la poule avec ses bébés trolilolo)</label>
    <span class="error"><?php echo $error["food"] ?? "";?></span>
  </fieldset>

  <label for="drink">Boisson Favorite</label>
  <br>
  <select name="drink" id="drink">
    <option value="jus de tomate">Jus de Tomate (je suis un vampire)</option>
    <option value="milkshake">Milkshake (aux fruits de préférence)</option>
    <option value="limonade">Limonade (j'ai besoin de sucre)</option>
  </select><br>
  <span class="error"><?php echo $error["drink"] ?? "";?></span>
  <input type="submit" name="meal" value="Envoyer">
  <label for="cgu">Envoyer</label><br>
</form>

<?php if (empty($error) && isset($_GET["meal"])):?>
  <h1>Meilleurs Repas :</h1>
  <p>
    <?php
    echo "Selon $username, le meilleur repas est la nourriture \"$food\" et la boisson \"$drink\"";
    ?>
  </p>
<?php endif;
require __DIR__."/../_footer.php";
?>