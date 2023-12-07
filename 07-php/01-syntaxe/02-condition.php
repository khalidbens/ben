<?php
/*
    rand retourne par defaut defaut une valeur aleatoire entre 0 et getrandmax()
    Mais on peut lui donner en parametre, un nombre minimum et  maximum
*/
$r = rand(0,100);
echo $r, "<br>";
echo "<h1>Conditions</h1> <hr>";
// si la condition est "true" alors on effectue ce qui se trouve entre les accolades :
if ($r < 50) {
    echo 'La variable est inferieur a 50';
}
// optionnellemnt on peut ajouter des condition avec elseif qui seront vérifié si les precedentes sont fausses
elseif($r>50)
{
    echo 'La variable est superieur a 50';
}
// optinnellement on peut ajouter un else qui sera executé si aucune des conditions precedentes ne sont faussesjouter un "else qui se declenchera si toute les condition precedente sont fausses
else {
    echo 'La variable est égale à 50';
}
#---------------------------------------------------------
echo "<hr><h2>Autres syntaxes</h2>";
/*
    il est aussi possible de remplacer les accolades par ":" pour marquer le debut de la condition puis "endif" pour marquer la fin
*/
if ($r < 50) :
    echo 'La variable est inferieur a 50';
elseif($r>50):
    echo 'La variable est superieur a 50';
else :
    echo 'La variable est égale à 50';
endif;

// Il est tout a fait possible de placer du html dans une condition
if($r < 50):
?>
<p>Ceci est un texte html</p>
<?php
endif?>
<br>
<?php
/*
    si nos conditions ne contiennent qu'une seule instruction, 
    il est tout a fait possible d'ommettre ":" et "endif"
*/
if($r < 50)
    echo 'La variable est inferieur a 50';
elseif($r>50)
    echo 'La variable est superieur a 50';
else
    echo 'La variable est égale à 50';

/*
    il est possible d'ecrire une condition sur une seule ligne avec les ternaires :
    condition ? true : false
*/
echo "la variable est " . ($r<50?"inferieur" : "superieur ou egale") . " à 50";

/*
    on peut aussi verifier si une variable existe, et dans le cas contraire faire autre chose avec "??"
*/
$message1 = "Bonjour le monde <br>";
echo $message1 ?? "rien a dire <br>";
echo $message2 ?? "rien a dire <br>";
#---------------------------------------------------------
echo "<hr><h2>Switch</h2>";
$pays = ["France", "Allemagne", "Espagne", "Portugal", "espagne"];
// choisi un index aleatoire du tableau
$r2 = array_rand($pays);
echo $pays[$r2], "<br>";
/*
    le switch prend une variable en argument et declenche le cas qui corrspond.
    chaque cas devrait terminer par un break
    dans le cas contraire, le cas suivant sera lancé meme si il ne correspond pas.
    on peut aussi ajouter un "default" qui se declenchera si aucun cas ne correspond.
*/
switch ($pays[$r2])
{
    case "France":
        echo "il sagit de France";
        break;
    case "Portugal":
        echo "il sagit de Portugal";
        break;
    case "Espagne":
    case "espagne":
        echo "il sagit de France";
        break;
    default:
        echo "il n'y a pas de correspondance";

}


?>
