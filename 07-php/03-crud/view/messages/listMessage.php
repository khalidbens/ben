<?php 
  $title = "Blog de ". $user['username'];
  require __DIR__ . "/../../../_header.php";
  if(isset($_SESSION["idUser"]) && $id == $_SESSION["idUser"]):
?>
<form action="/blog/ajout" method="post">
<textarea name="message"  placeholder="Ajouter un message"></textarea> 
      <input type="submit" value="Envoyer" name="addMessage">
</form>

<?php
endif;

  if ($messages):
    foreach($messages as $m):

?>
      <div class="message">
        <div class="date1">
          Ajouté le <?= $m['createdAt'] ?>
        </div>
        <div class="date2">
          <?= ($m["editedAt"] ? "Edité le " . $m["editedAt"] : "") ?>
        </div>
        <p><?= $m["message"] ?></p>
        <div class="btns">
          <?php
          // si l'utilisateur connecté est sur son blog alors on affiche les boutons:
           if(isset($_SESSION["idUser"]) && $id == $_SESSION["idUser"]):
          /*
          on fait passer les id des messages dans la route grace au routeur ou en "get" si on n'utilise pas de routeur "?id="
        */
           ?>
          <a href="/blog/update/<?= $m["idMessage"] ?>">Modifier</a>
          <a href="/blog/delete/<?= $m["idMessage"] ?>">Supprimer</a>

          <?php endif; ?>
        </div>
      </div>
<?php 
    endforeach;
  else:?>

    <p>Vous n'avez aucun message</p>
<?php endif;
require __DIR__ . "/../../../_footer.php";
?>


