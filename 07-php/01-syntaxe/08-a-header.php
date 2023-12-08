<?php 
/*
    Les headers des requetes http permettent d'indiquer au navigateur ou au serveur des informations avant de lire un fichier.
    par exemple, quel est le type de ce fichier.
    quel est le code d'etat de la requete (200, 404, ...)
    ou si certainnes action vont devoir etre effectués.

    par exemple, indiquons que l'on est sur une page 404:
*/
// header("HTTP/1.1 404 Not Found");
header("HTTP/1.1 418 I'm a teapot");
// a noter que l'on peut utiliser:
// http_response_code(404);

if(rand(0,100) < 50) {
    header("location: 08-b-header.php");
    exit;
    /*
      en indiquant "location:", on redirige vers la page 08-b-header.php
      losqu'on fait une redirection, c'est une bonne pratique de la faire suivre par un "exit" ou un "die" qui sont la meme fonction.
      ceux-ci mettent fin a l'execution de tout code, afin d'etre sur que rien ne soit passé avant de rediriger

      die et exit sont les memes chose ils peuvent etre utiliser pour du debuggage, afin de stopper le code et afficher un message.
      (on peut ajouter un message entre parentheses)
      die("on s'arrete ici");
    */
}
$title = "Gestion des headers de requete";
require "../_header.php";
// Sans parametre, on affiche le code de la page:
echo http_response_code();
echo "<br> ceci est ma page 1";
require "../_footer.php";
?>