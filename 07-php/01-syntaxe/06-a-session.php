<?php

      /*
      session_start();la session comme le localstorage permet de stocker des information temporaires
      mais cette fois ci du coté serveur.
      pour differencier une session d'un utilisateur d'une autre, son identifiant est stocké dans un cookie qui est envoyé a l'utilisateur.

      a la difference du localstorage, n'importe quel type de donnee peut etre stocké en session.

      les fonctionnalités de session, sont accessible tant que l'on n'a pas lancé un "session_start()"
          La session doit etre start avant tout affichage.
      */

session_start();


$title = "session page 1";
require __DIR__."/../_header.php";

// On peut retrouver l'id de la session dans les cookies ou avec la fonction "session_id()"
var_dump($_COOKIE, session_id());
/*    
      Le nom par defaut du cookie est "PHPSESSID"

      Pour stocker des donnees en session, on utilisera la superglobal "$_SESSION" tel un tableau associatif.
*/

$_SESSION["food"] = "pizza";
$_SESSION["age"] = 42;
$_SESSION["username"] = "Arthur";
?>
<a href="./06-b-session.php">page 2</a>
<?php
require __DIR__."/../_footer.php";
?>
