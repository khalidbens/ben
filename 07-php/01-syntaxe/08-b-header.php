<?php 
/*
    Il est possible de changer le type du fichier rendu pour que le navigateur le traite autrement que du HTML.

    header("content-type: image/png");
    header("content-type: application/json");

    on peut aussi demander a la page de se reactualiser apres quelques secondes.
    header("refresh: 5");
    On peut ajouter a cela un url pour rediriger apres quelques seconde.
    header("refresh: 5; url=08-b-header.php");
*/
header("refresh: 5; url=08-b-header.php");
$title = "Header Page 2";
require "../_header.php";


echo "<br> ceci est ma page 2";
require "../_footer.php";
?>