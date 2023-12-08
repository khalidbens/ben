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
#---------------------------------------------------------
echo "<hr><h1>Recurcivité</h1><hr>";
/*
    une fonction recurcive est une fonction qui appelle elle-meme.
    cela peut provoquer une boucle infinie.
    ! attention de prevoir une condition de sortie
*/
function decompte($n)
{
    // action a realiser
    echo "$n <br>";
    // condition de sortie
    if($n <= 0) return;
    // recursivite
    decompte(--$n);
}
decompte(5);
#---------------------------------------------------------
echo "<hr><h1>Typage et Description</h1><hr>";
/*
    sur les dernieres version de PHP, il est possible, conseillé bien que non obligatoire,
    de typer ses arguments et valeur de retour ainsi que de decrire les fonction.

    faire cici ne changera pas le fonctionnement de votre code,
    mais ameliorera sa lisibilité si vous ou quelqu'un d'autre souhaite le reutiliser plus tard.
*/


// ! description en faisant " /** " 
/**
 * cette fonction retourne la presentation du personnage
 * 
 *Les arguments sont les information du personnage
 *
 * @param string $nom nom du personnage
 * @param integer $age age du personnage
 * @param boolean $travail le personnage travail t-il ?
 * @return string phrase de presentation
 */
function presentation(string $nom, int $age, bool $travail): string
{
    return "je m'appelle $nom, j'ai $age ans. Je ".
    ($travail ? "travaille" : "ne travaille pas");
}
echo presentation("Maurice", 54, true);

#---------------------------------------------------------
echo "<hr><h1>Portée des variables et variable static</h1><hr>";
/*
    une variable declarée hors dune fonction n'est pas disponible dans celle ci.
    si on souhaite utiliser une variable dans la fonction, 
    elle devra soit etre passé en argument,
    soit recuperé via le mot clef "global".
    celui ci permet d'indiquer que la variable que l'on souhaite
    utilisé a été declaré hors de toute fonction.
*/
$z = 5;
function showZ()
{
    global $z;
    echo $z,"<br>";
}
showZ();
/*
    une variable precedé du mot " static" ne sera pas reinitialisee a chaque appelle de la fonction
    sa valeur sera donc sauvegardé entre chaque appelle de la fonction
*/
function compte()
{
    $a = 0;
    static$b = 0; 
    echo "a : $a <br> b : $b <br>";
    $a++;
    $b++;
}
compte();
compte();
compte();
#---------------------------------------------------------
echo "<hr><h1>Fonction anonyme, fleché et callback</h1><hr>";
/*
    bien que rarement utilisé, il est possible de declarer des fonctions anonyme et fleché en PHP.
    une fonction anonyme est une fonction qui ne porte pas de nom, elle sera rangé dans une variable ou utilisé encallback 
    une fonction fleché est une fonction qui porte un nom, elle sera utilisée directement(version raccourcie)
    un callback est une fonction passé en argument qui sera appelé par la fonction qui la recoit.
*/
/**
 * cette fonction prend un tableau et utilise la fonction donnée en callback pour afficher le contenu
 *
 * @param array $arr tableau de donnée
 * @param callable $func fontion d'affichage
 * @return void
 */
function dump(array $arr, callable $func): void
{
    foreach($arr as $a)
    {
        $func($a);
        echo "<br>";
    }
}
$tab = ["sandwitch", "pizza", "salade"];
// je donne en second argument une fonction anonyme
dump($tab, function($x){echo $x;});
// je donne en second argument une fonction flechee
dump($tab, fn($x)=>var_dump($x));

// je range ma fonction anonyme dans une variable:
$superFonction = function($x){print $x;};
// je donne en callback ma variable contenant une fonction.
dump($tab, $superFonction);





?>