<?php 
// connexion a la base de données
$title = " MVC - connexion" ;
require(__DIR__."/../../../_header.php");
?>

  <h1> Connexion </h1>
  <form action="" method="post">
    <!-- Email -->
    <label for="email">Adresse Email :</label>
    <input type="email" name="email" id="email" required>
    <span class="erreur"><?php echo $error["email"]??""; ?></span> 
    <br>
    <!-- Password -->
    <label for="password">Mot de passe :</label>
    <input type="password" name="password" id="password" required>
    <span class="erreur"><?php echo $error["password"]??""; ?></span> 
    <br>
    <input type="submit" value="connexion" name="connexion">
  </form>


<?php 
require(__DIR__."/../../../_footer.php");
?>

