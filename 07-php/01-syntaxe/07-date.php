<?php 
$title = "Gestion des dates";
require "../_header.php";

// Si on souhaite utiliser le timestamp, on pourra utiliser la fonction:
echo time(), "<br>";
/*
    Pour afficher directement l'heure ou la date,
    on utilisera la fonction "date()"
    Elle prendra en premier argument un string correspondant au format qui doit etre affiché
    en second, optionnellement, on pourra lui donner un timestamp passé ou future pour obtenir la date correspondante.

    d = numero du jour du mois avec le 0
    m = numero du mois avec le 0
    Y = annee sur 4 chiffres
*/
echo date("d/m/Y"), "<br>";
echo date("d/m/y", time()-12345678900), "<br>";
/*
    d = numero du jour du mois sans le 0
    m = numero du mois sans le 0
    Y = annee sur 2 chiffres
*/
echo date("j/n/Y"), "<br>";
/*
    d = numero du jour sur 3 lettres 
    l= numero du jour complet
    M = nom du mois sur 3 lettres
    f= nom du mois complet
*/
echo date("D = l / M = F "), "<br>";
/*
    n = numero du jour dans la semaine avec dimanche = 7
    w = numero du jour dans la semaine avec dimanche = 0
*/
echo date("D = N = W"), "<br>";
/*
    z = numero du jour dans l'année avec 1er janvier = 0
    w = numero de la semaine dans l'année
*/
echo date("z -> W"), "<br>";
/*
    t = nombre de jours dans le mois
    L = annee bissextile (boolean)       
*/
echo date ("F -> t / Y -> L"), "<br>";
/*
    h = heure en format 12 avec 0
    i = minute avec 0
    s = seconde avec 0
    a = am/pm
*/
echo date ("h:i:s a"), "<br>";
/*
    g = heure en format 12 sans 0
    A = "AM" ou "PM"
*/
echo date("g:i:s A"), "<br>";
/*
    H = heure en format 24
    i = minute
    s = seconde
    v = millisecondes //! attention il ne fonctionne pas dans certaint serveur a verifier
*/
echo date("H:i:s:v"), "<br>";
/*
    G = le numéro de l'heure en format 24 sans 0
    O = Difference d'heure avec GMT sans ":"
    P = Difference d'heure avec GMT avec ":"
*/
echo date("G:i:s / 0 = P"), "<br>";
/*
    I = Boolean indiquant l'heure d'ete
    Z = difference de seconde avec l'heure GMT
*/
echo date("I/Z"), "<br>";
/*
    Date complete au format ISO 8601
*/
echo date("c"), "<br>";
/*
    Date complete au format RFC 2822
*/
echo date("r"), "<br>";


require "../_footer.php";
?>