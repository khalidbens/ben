<?php
echo "<h1>Les Boucles</h1> <hr>";
$x = 0;

while($x<5)
// la boucle WHILE repete ses instructions tant que ce qui se trouve entre parenthese retourne TRUE
{
    echo "$x<br>";
    // ! ne pas oublier la condition de sortie
    $x++;
}
// synthaxe en ":" endwhile:
while($x<10):
    echo "$x<br>";
    $x++;
endwhile;
// synthaxe avec une seule instruction:
while($x<15)
    echo $x++, "<br>";
#---------------------------------------------------------
echo "<hr><h2>Do While</h2>";
// le do while va lancer une premiere fois l'action avant de verifier si elle doit etre repeté.

do
{
    echo "$x do while<br>";
    $x++;
}while($x<5);
// syntaxe ne prenant qu'une seule instruction:
do
    echo $x++, "do while<br>";
while($x<20);
#---------------------------------------------------------
echo "<hr><h2>For</h2>";
/*
    la boucle for est particulierement adapté aux boucles basé sur un chiffre.
    elle est structuré ainsi:
    for(expr1; expr2; expr3){instruction a repeter}

    la premiere expression est evalué avant de commencer la boucle.
    la seconde est evalué au debut de chaque iteration et continuera la boucle si "TRUE" 
    le troisieme est evalué a chaque fin d'iteration
*/
for($y = 0; $y < 5; $y++)
{
    echo $y;
    echo "<br>";
}
// structure en ":" et endfor;
for($y = 0; $y < 5; $y++):
    echo $y;
    echo "<br>";
endfor;
// structure avec une seule instruction:
for($y = 0; $y < 5; $y++)
    echo "$y <br>";
#---------------------------------------------------------
echo "<hr><h2>For Each</h2>";
$a = ["spaghetti", "tomates", "oignons", "poivrons"];
/*
    foreach permet d'interer sur un tableau, il se structure ainsi:
        foreach($tableau as $nouvelleVariable){instruction a repeter}
    foreach repete les instruction pour chaque element du tableau.
    changeant a chaqu fois la valeur de la variable par l'element suivant du tableau.
*/
foreach($a as $food)
{
    echo "$food, <br>";
}
/*
    il est aussi possible de recuperer l'index ou la clef ( dans le cas d'un tableau associatif) avec cette structure:
        foreach($tableau as $variableIndex => $variableValeur){instruction a repeter}
*/
foreach($a as $k => $food)
{
    echo "$k : $food, <br>";
}
// structure en ":" et endforeach;
foreach($a as $k => $food):
    echo "$food, <br>";
endforeach;
// structure avec une seule instruction:
foreach($a as $k => $food)
    echo "$k : $food, <br>";
#---------------------------------------------------------
echo "<hr><h2>Continue et Break</h2>";
/*
    Toute les boucles peuvent utiliser les instructions "continue" et "break".
    "continue" permet de passer a la suivante de la boucle.
    "break" permet de stopper la boucle.
*/
foreach($a as $f)
{
    if($f === "oignons") continue;
    if($f === "poivrons") break;
    echo "$f, <br>";
}
    



?>