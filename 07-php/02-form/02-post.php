<?php 
$title = "";
require "../_header.php";
?>
<form action="#" method="get">
  <!-- TODO: Ajouter class et value -->
  <input type="text" name="username" placeholder="Entrez votre nom">
  <!--Todo ajouter le message d'error en PHP-->
  <span class="error"></span>
  <br>
  <!-- TODO: Ajouter class -->
  <fieldset>
    <legend>Nourriture</legend>
    <!-- Todo Ajouter une boucle pour afficher les radio -->
    <input type="radio" name="food" value="" id="">
    <label for=""></label>
    <br>
    <!--Todo ajouter le message d'error en PHP-->
    <span class="error"></span>
  </fieldset>
  <label for="drink">Boisson Favorite</label>
  <select name="drink" id="drink">
    <!-- TODO: Ajouter une boucle pour afficher les options -->
      <option value=""></option>
    </select>
  <!--Todo ajouter le message d'error en PHP-->
  <span class="error"></span>
  <br>
  <input type="checkbox" name="cgu" id="cgu" value="cgu">
  <label for="cgu">J'accepte que mes donnees ne m'appartiennent plus</label>
  <!--Todo ajouter le message d'error en PHP-->
  <span class="error"></span>
  <br>
  <button type="submit" name="meal">Envoyer</button>
</form>
<!--Todo: Ajouter une condition pour verifier si le formulaire a été posté-->
<h1>Meilleurs Repas :</h1>
<p>
  <!-- TODO : Afficher le repas choisi -->
</p>
<?php 
require "../_footer.php";
?>