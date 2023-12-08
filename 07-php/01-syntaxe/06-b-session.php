<?php

/*
    si on a besoin de la session sur quelques rare pages, 
    autant l'activer uniquement la ou elle est utile.

    Mais si tout votre site en a besoin, il est possible de placer la "session_start()" dans un fichier chargé a tout les coups comme le header

    il est possible d'indiquer la durée de vie du cookie contenant l'id de session en option du session_start.
*/
session_start(["cookie_lifetime" => 3600]);
/*  
    sur un projet complexe, il est possible d'oublier d'oublier que l'on a deja fait la session_start()
    Un message de "notice" sera affiché dans le navigateur alors que la second a été ignoré.
    Pour eviter cela on peut faire une condition avec "session_status()" et l'une des trois constante suivante:
    php_session_active()
    php_session_disabled()
    php_session_none()
*/
if(session_status()===PHP_SESSION_NONE) session_start();


/*
    lorsque vous utilisez des valeurs qui peuvent ne pas exister.
    (par exemple ici, si on vient sur la page 2 sans etre passé par la 1)
    il vvaut mieux verifier qu'elles existent avant de les utiliser
    on pourra par exemple utiliser "isset()"
*/
// var_dump($_SESSION);
if(isset($_SESSION["username"], $_SESSION["food"], $_SESSION["age"]))
{
  $message =$_SESSION["username"] . " aime la "
  . $_SESSION["food"] . " et a "
  . $_SESSION["age"] . " <br>";
}
/*
    Si je souhaite supprimer une informationde la session,
    je peux simplement utiliser "unset()" sur cette information.
*/
unset($_SESSION["food"]);
// var_dump($_SESSION);
/*
    si je veux faire disparaitre la session dans son entiereté je vais passer par trois etapes.
        la premiere est un "session_destroy()"
*/
// echo "<hr>";
session_destroy();
// var_dump($_SESSION);
/*
    Une fois la session detruuite,
    il reste cela dit les informations de session dans la superglobale
    et cela jusqu'au prochain rechargement.
    On pourra par securité "unset" la superglobal
*/
unset($_SESSION);
/*
    la session a bien disparut, mais il reste le cookie sur le navigateur de l'utilisateur.
    pour le supprimer, on lui indiquera une date d'expiration passé.
*/
setcookie("PHPSESSID", "", time()-3600);

/*
    il est possible creer des sessions avec un nom different en changeant ce nom avant le session_start();
    Pour cela on utilisera "session_name()"
*/
$title = "session page 2";
require "../_header.php";
echo $message ??"";
echo "<a href = './06-a-session.php'>retour</a>";
require "../_footer.php";
?>