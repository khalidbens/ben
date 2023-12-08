<?php
/*
    Include et rehuire permettent d'inclure d'autre fichier dans notre code 

    une petite convention est de nommer les fichier qui doivent etre inclu et n'ont pas pour but detre ouvert seul, avec un"_"  les precedents
*/
$title = "include";
$mainClass = "includeNav";
require ("../_header.php");
/*
    la seul diference entre require et include est le niveau d'erreur lancé.

    require en cas de prbleme provoque une "fatal error" mettant fin au code.

    include en cas de prbleme provoque une "warning" et ne met pas fin au code
*/
include("../_nav.php");
?>
<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet earum nisi ex recusandae commodi, velit iste expedita sapiente rerum quam, sint itaque, rem maxime labore quibusdam! Doloribus, saepe libero.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet earum nisi ex recusandae commodi, velit iste expedita sapiente rerum quam, sint itaque, rem maxime labore quibusdam! Doloribus, saepe libero.</p>
</div>
<?php
/*
    dans un tres gros projet avec beaucoup d'inclusion 
    il est possible de s'emmeller et de require plusieurs fois un meme fichier.

    l'utilisation de "require_once" ou "include_once" regle se probleme.
    car ces derniers avant d'inclure verifient si le fichier n'a pas deja été inclu.
    (il sont cela dit, un peu plus gourmand en ressource.)
*/
require ("../_footer.php");
require_once ("../_footer.php");
?>
