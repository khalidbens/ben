<?php
echo "<h1>Declare une fonction</h1><hr>";
/*
    pour declarer une fonction en PHp ,
    on utilisera le mot clef "function" suivi du nom de la fonction.
    puis des parentheses et enfin des accolades.

    les parentheses acceuillerons les possibles parametres de la fonction.
    les accolades, pour le corps de la fonction.
*/
function salut ()
{
    echo "salut le monde ! <br>";
}
/*
    declarer une fonction n'activera pas le code a l'interieur.
    il faudra l'appeler pour que ce code s'affiche.
    pour cela on utilisera le nom de la fonction suivi de paratheses.
*/
salut();
/*
    on peut appeler une fonction avant sa definition,tant que celle ci est declarer hors de tout bloc (condtion, boucle...).
*/
salut2();
function salut2 ()
{
    echo "salut les autres ! <br>";
}
if(true)
{
    // Declenche une fatale erreur. ! declarer soit en dehors  du bloc et si on le fait il faut le faire apres la declaration de la fonction
    // salut3();
    function salut3 ()
    {
        echo "salut moi-meme ! <br>";
    }
    salut3();
}
/*
    une fonction peut se contenter de realiser une action.
    mais elle peut aussi renvoyer des informations qui seront utilisé dans une variable ou une autre fonction:
        on utilisera pour cela le mot clef "return" suivi des information a renvoyer
        ce mot clef mettant fin a la fonction, tout ce qui suit, ne sera pas realisé.
*/
function aleaString ()
{
    $r = rand(0,100);
    if($r<50)return;
    return (string)$r;
}
// si rien n'est retourné, on obtient "NULL"
var_dump(aleaString());
echo "<br>";
// attribué a une variable:
$alea = aleaString();
echo $alea; "<br>";
#---------------------------------------------------------
echo "<hr><h1>Les Arguments</h1><hr>";
/*
    entre les parentheses d'une declaration de fonction,
    il est possible d'ajouter autant de declaration de variable que l'on souhaite.
    celle ci seront des parametres a placer lors de l'appel de la fonction.
    qui seront transmit a celle ci
    chaque argument est separe par une virgule
*/
function bonjour($nom)
{
    echo "bonjour $nom ! <br>";
}
bonjour("Maurice");
function bonjour2($nom1, $nom2)
{
    echo "bonjour $nom et $nom2 ! <br>";
}
// si le bon nombre d'argument n'est pas fourni, on obtient une fatal erreur
// bonjour2("Maurice");
bonjour2("Maurice", "Basile");
/*
    Il est possible d'avoir un nombre infini d'argument sur une fonction,
    cela grace au rest operator "..."
    tous les arguments seront placé sous forme de tableau.
*/
function bonjour3(...$noms)
{
    foreach($noms as $nom)
    {
        echo "bonjour $nom ! <br>";
    }
}
bonjour3("Maurice", "Basile", "Lionel");

/*
on peut donner une valeur par defaut a un parametre:
cela aura aussi pour effet de le rendre optionnel
*/
function bonjour4($n1, $n2="personne d'autre")
{
    echo "bonjour $n1 et $n2 ! <br>";
}
bonjour4("Maurice");
bonjour4("Maurice", "Basile");
/*
    une variable donné a une fonction n'est pas modifié seule sa valeur est transmise,

*/
function titre($nom)
{
    $nom .= " le Grand";
    return $nom;
}
$mau = "Maurice";
$mau2 = titre($mau);
echo "$mau est devenu $mau2 <br>";
/*
    mais il est possible de passer un argument par reference.
    cela permet de changer la valeur de la variable donnée en argument.
*/
function titre2(&$nom)
{
    $nom.= " le Grand";
}
titre2($mau);
echo "voici $mau !<br>";


?>