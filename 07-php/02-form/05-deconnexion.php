<?php 
/*
    pour se deconnecter, il suffit de supprimer les informations que l'on a tyocké en session.
    si votre session ne sert qu'a la connexion,
    on peut tout simplement, tout supprimer.
*/
session_start();
require __DIR__."/../ressources/services/_shouldBelogge.php";
shouldBelogge(true, "/");
unset($_SESSION);
session_destroy();
setcookie("PHPSESSID", "", time()-3600);
// Et je redirige mon utilisateur ailleurs !
header("Location: ./04-connexion.php");
exit;
?>