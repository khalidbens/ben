<?php 
$title = "";
require "../_header.php";
?>
<form action="#" method="get">
  <input type="text" name="username" placeholder="Entrez votre nom">
  <!--Todo ajouter le message d'error en PHP-->
  <span class="error"></span>
  <br>
  <fieldset>
    <legend>Nourriture</legend>
    <input type="radio" name="food" value="welsh" id="welsh">
    <label for="welsh">Wesh (car vive le fromage)</label>
    <br>
    <input type="radio" name="food" value="cannelloni" id="cannelloni">
    <label for="cannelloni">Cannelloni ( Pour changer des raviolis )</label>
    <br>
    <input type="radio" name="food" value="oyakodon" id="oyakodon">
    <label for="oyakodon">Oyakodon (car j'aime l'humour noir)</label>
    <!--Todo ajouter le message d'error en PHP-->
    <span class="error"></span>
  </fieldset>
  <label for="drink">Boisson Favorite</label>
  <select name="drink" id="drink">
      <option value="cafe">Cafe ( je ne dors jamais )</option>
      <option value="the">The (pour m'appaiser )</option>
      <option value="soda">Soda ( pour bien manger )</option>
  </select>
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