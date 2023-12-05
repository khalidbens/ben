<!-- PHP est un language de script "PHP Hypertext Preprocessor" a l'origne cetait personal home page. -->

<h1>Introduction</h1> <hr>
<!-- le code PHP commence par <?php ?> et ceci est sa balise de fin -->

<?php
// un commentaire sur une seule ligne
#un autre commentaire sur une seule ligne
/* commentaire sur plusieurs lignes */

/*
il n'est pas rare de voir du HTML et du PHP sur un meme fichier.
le serveur va traiter tout ce qui se trouve dans les balises PHP, puis rendre le fichier au navigateur comme simple HTML.
*/
//! chaque instruction PHP se termine par un point virgule ;
/*
ce que l'on fait en PHP n'etant pas visible, nous devrons utiliser certaines fonctions pour les afficher:

certaines rare fonctions peuvent etre ecrites en parenthese.
*/
echo "coucou";
// echo peut prendre autant de parametres que l'on le souhaite
echo "hello", "world";
// les informations retourné au navigateur etant traité comme du HTML? ON PEUT AFFICHER DES BALISES
echo "<hr>";
/*
    il existe plusieurs fonctions d'affichage qui ont leur propre particularité. echo etant la plus simple.

    print retournera une valeur de "1" et sera un peu plus lent
*/
print "PRINT !!!!!!!<br>";
/*
    var_dump() permet de debugger, il affichera des informations supplementaires
*/
var_dump("bonjour", "le monde", 162536353);
/*
var_export() affiche ses parametres tel du PHP executable
*/
var_export("banane");

// phpinfo() affiche toute la configuration du serveur PHP
// phpinfo();
// petit bonus, le raccourci <= permet d'ouvrir php juste pour un echo

?>
test raccourci echo :
<?= "coucou ! <hr>" ?>

<?php
#-------------------------------------------------------------------------

$banane;
/*
    on declare une variable php avec un "$" puis une lettre ou un "_"
    puis ensuite les chiffres sont acceptés 
    les variables sont sensible a la casse: "$a" et "$A" sont deux variables differentes

    Si une variable n'a pas été definie et seulement declaré, l'afficher provoquera une erreur:
*/
// echo $banane;

$banane = "jaune";
echo "banane : ", $banane, "<br>";

/*
    on peut aussi definir des constante en PHP par convention on les mettre souvent EN MAJUSCULE, et elles n'auront pas de "$"
*/
const AVOCAT = "vert";
/*
    ceci est la nouvelle syntaxe, jusqu'il y a peu il fallait utiliser la fonction definie:
*/
define("AVOCADO", "vert");
// get_defined_vars() affiche toutes les variables declarees
var_dump(get_defined_vars());
// echo '<pre>'.print_r(get_defined_vars(),1).'</pre>';

// variable Dynamique:
$chaussette = "rouge";
$$chaussette = "bleu";
$$$chaussette = "jaune";
echo $rouge, $bleu;
/*
    les variables dynamique, sont des variables dont le nom dépend d'une autre variable
    ici la seconde variable prend le nom "$rouge"

    par defaut, PHP detruit les variables une fois le script terminé, 
    mais on peut vouloir les detruire soit meme avec la fonction unset()
*/
unset($banane);
// echo $banane;
#-------------------------------------------------------------------------
echo "<hr><h1>Types de variables</h1>";
$num = 5;
$dec = 0.5;
$str = "hello";
$arr = [];
$boo = true;
$null = null;
$obj = (object) [];

echo gettype($num), "<br>";
echo gettype($dec), "<br>";
echo gettype($str), "<br>";
echo gettype($arr), "<br>";
echo gettype($boo), "<br>";
echo gettype($null),"<br>";
echo gettype($obj), "<br>";

$num = "je change de type !";
echo "$num", "<br>";

#---------------------------------------------------------
echo "<hr><h1>Chaine de caractères</h1>";
// un string peut etre representé par " ou ' ;
echo "bonjour", 'coucou', "<br>";
// les backticks auront un tout autre role en PHP
// on peut faire des sauts a la ligne et des indentations mais ils ne seront pas prit en compte:
echo "ceci est 
    un message si long
    qu'il prend plusieurs lignes <br>";
/*
    si on souhaite inserer une variable dans un string, il suffit de l'y placer pour que l'interpolation ai lieu 
    cela ne fonctionne qu'avec les guillemets
*/
$nom = "Maurice";
$age = 54;
echo "$nom a $age ans". "<br>";
echo '$nom a $age ans'. "<br>";
/*
    la concatenation est possible aussi avec le point .:
*/
echo $nom . " a " . $age . " ans". "<br>";
// On peut aussi changer la valeur d'une variable avec la concatenation:
$nom .= " Dupont";
echo $nom, "<br>";
// Quelque fonction utilses:
#la longueur du string:
echo strlen($nom), "<br>";
#le nombre de mots:
echo str_word_count($nom), "<br>";
#inverse le string:
echo strrev("bonjour"), "<br>";
#donne la position dans le string du second parametre:
echo strpos($nom, "i"), "<br>";
# [] apres un string permet de selectionner le caractere a la position indiquee:
echo $nom[8], "<br>";
# On peut changer la lettre a l'index indiqué: 
$nom[8] = "L";
echo $nom, "<br>";
# remplace le premier parametre par le second, dans le troisieme (une variable) :
echo str_replace("ce", "cette", $nom);

#---------------------------------------------------------
echo "<hr><h1>Nombres</h1>";
// il est possible de prefixer les nombres pour indiquer leur base:
#0b pour binaire:
$bin = 0b1000;
echo "\$bin = $bin <br>";
# 0 pour octal:
$oct = 020;
echo "\$oct = $oct <br>";
# rien pour le decimal:
$dec = 16;
echo "\$dec = $dec <br>";
# 0x pour hexadecimal:
$hexa = 0x10;
echo "\$hexa = $hexa <br>";

// les nombres sont soit des "interger" (des entiers sans virgules) soit "float" ou "double" (des decimals a virgule)
var_dump("3.14 is int?", is_int(3.14));
echo "<br>";
var_dump("3.14 is float?", is_float(3.14));
echo "<br>";
var_dump("3.14 is numeric?", is_numeric(3.14));
echo "<br>";
var_dump("3.14 is nan?", is_nan(3.14));
echo "<br>";
// on peut connaitre le plus grand INTEGER (ou plus petit) geré par PHP grace a :
echo PHP_INT_MAX, "<br>";
echo PHP_INT_MIN, "<br>";
// ou en version float:
echo PHP_FLOAT_MAX, "<br>";
echo PHP_FLOAT_MIN, "<br>";
// on peut convertire un string ou un float en entier simplement avec :
echo (int) "42", "<br>", (int) 3.14, "<br>";

// l'utilsation d'operateur mathématique est possible:
echo "1+1", 1+1, "<br>";
echo "1-1", 1-1, "<br>";
echo "5*7", 5*7, "<br>";
echo "9/3", 9/3, "<br>";
// modulo
echo "1%1", 1%1, "<br>";
// puis la puissance:
echo "1**1", 1**1, "<br>";

// on retrouvera aussi les operateurs d'assignement :
$x = 5;
$x += 2;
$x -= 3;
$x *= 4;
$x /= 2;
$x %= 3;
$x **= 2;
echo $x, "<br>";

// enfin on aura l'incrementation et la decrementation:
echo $x++, "--> $x <br>";
echo ++$x, "--> $x <br>";
echo $x--, "--> $x <br>";
echo --$x, "--> $x <br>";
?>

