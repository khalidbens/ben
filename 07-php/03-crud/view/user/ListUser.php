<?php
$title = "Liste des Utilisateurs";
require __DIR__ . "/../../../_header.php";
if($users):
?>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($users as $user): ?>
        <tr>
          <td><?= $user["idUser"] ?></td>
          <td><?= $user["username"] ?></td>
          <td>
            <a href="/blog/<?= $user["idUser"] ?>">Voir les messages</a>
              &nbsp;|&nbsp;
            <?php if(isset($_SESSION["idUser"]) && $_SESSION["idUser"] == $user["idUser"]):?>
            <a href="/userupdate?id=<?= $user["idUser"] ?>">Éditer l'utilisateur</a>     
            &nbsp;|&nbsp;
            <a href="/userdelete?id=<?= $user["idUser"] ?>">Supprimer l'utilisateur</a>
            <?php endif;?>
          </td>
        </tr>
      <?php endforeach; ?>
    </tbody>
</table>
<?php else:?>
  <p>Aucun utilisateur trouvé.</p>
<?php endif;?>



<?php
require __DIR__ . "/../../../_footer.php";
?>