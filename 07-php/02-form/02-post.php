<?php
$title ="La méthode POST en PHP";
require __DIR__."/../_header.php";

$food = $username = $drink = "";
$error = [];
$foodList= [
  "welsh"=>"Welsh (car vive le fromage)",
  "cannelloni"=>"Cannelloni (pour changer des raviolis)",
  "oyakodon"=>"Oyakodon (car j'aime l'humour noir : ca veut dire \"bol parent enfant\", de la poule avec ses bébés trolilolo)"
];
$drinkList= [
  "jus de tomate"=>"Jus de Tomate (je suis un vampire)",
  "milkshake"=>"Milkshake (aux fruits de préférence)",
  "limonade"=>"Limonade (j'ai besoin de sucre)"
];

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["meal"])) {
  // var_dump($_POST);
  // Vérification du champ username
  if (empty($_POST["username"])) {
    $error["username"] = "Veuillez entrer un nom d'utilisateur";
  } else {
    $username = $_POST["username"];
    // Require les espaces avant et après le string
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
  if (empty($_POST["food"])) {
    $error["food"] = "Veuillez choisir une nourriture favorite";
  } elseif (!array_key_exists($_POST["food"], $foodList)) {
    $error["food"] = "Veuillez choisir une nourriture valide";
  } else {
    // Ici mon résultat est forcément égal à ce qu'il y a dans mon tableau, ca ne sert à rien de vérifier le trim et le htmlentities/specialchars
    $food = $_POST["food"];
  }
  // Vérification de mon champ drink
  if (empty($_POST["drink"])) {
    $error["drink"] = "Veuillez choisir une boisson favorite";
  }
  elseif(!array_key_exists($_POST["drink"], $drinkList)) {
    $error["drink"] = "Veuillez choisir une boisson valide";
  } else {
    $drink = $_POST["drink"];
  }
  if(empty($_POST["cgu"])) {
    $error["cgu"] = "Veuillez accepter les CGU";
  }
  // Maintenant qu'on fait toutes nos vérifications, on peut traiter le formulaire en vérifient d'abord qu'il n'y a pas d'error
  if (empty($error)) {
    // On enregistre ensuite en BDD nos informations (voir le cours suivant)
    echo "<script>alert('formulaire envoyé')</script>";
  }
}
?>


<form action="#" method="POST">
  <!-- On ajoute class et value -->
  <!-- Onn a ajouter la value pour ne pas avoir a le retaper  -->
  <input
    type="text"
    name="username"
    placeholder="Entrez votre nom"
    class=  "<?php echo (empty($error["username"])) ? "" : "formerror"?>"
    value="<?= $username ?>"
  >
  <!-- On affiche le message d'erreur s'il y en a -->
  <span class="error"><?php echo $error["username"] ?? "";?></span>
  <br>
  <!-- TODO : ajouter classe -->
  <fieldset
  
  >
    <legend> Nourriture Favorite</legend>
    <!-- je boucle sur ma liste d'aliment pour afficher autant de radio que possible -->
    <?php foreach ($foodList as $key => $message):?>
    <input type="radio" name="food" 
        value="<?= $key ?>" 
        id="<?= $key ?>">
        <?= $food === $key ? "checked" : ""?>
    <label for="<?= $key ?>">
        <?= $message ?>
      </label>
    <br>
    <?php endforeach;?>

    <span class="error"><?php echo $error["food"] ?? "";?></span>
  </fieldset>

  <label for="drink">Boisson Favorite</label>
  <br>
  <select name="drink" id="drink">
    <!-- TODO : ajouter une boucle pour afficher les options du select -->
    <?php foreach ($drinkList as $key => $value):?>
        <option 
        value="<?php echo $key ?>">
        <?= $drink === $key ? "selected" : ""?>

        <?= $value ?>
      </option>
    <?php endforeach; ?>
  </select><br>
  <span class="error"><?php echo $error["drink"] ?? "";?></span>

  <input type="checkbox" name="cgu"  value="cgu">
  <label for="cgu">Ok, je vends mon âme à Bill Gates</label><br>
  <span class="error"><?php echo $error["cgu"] ?? "";?></span>
  <input type="submit" name="meal" value="Envoyer">
  <label for="cgu">Envoyer</label><br>
</form>
<!-- TODO : Ajouter une condition pour vérifier si le formulaire a été posté -->
<h1>Meilleurs Repas :</h1>
<p>
  <!-- TODO : Afficher le repas choisi -->
</p>

<?php if (empty($error) && isset($_POST["meal"])):?>
  <h1>Meilleurs Repas :</h1>
  <p>
    <?php
    echo "Selon $username, le meilleur repas est la nourriture \"$food\" et la boisson \"$drink\"";
    ?>
  </p>
<?php endif;
require __DIR__."/../_footer.php";
?>