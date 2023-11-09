"use strict";
const h1 = document.querySelector('#mainTitle');
console.log(h1);

// ?------------------l'Attrubut style----------------

/*

    sur tous les element html, nous pourront trouver une proprité "style" CSS.
    en modifiant les proprités de "style", nous pourront integrer du CSS directement sur notre balise.

    ! ATTENTION ! , les proprietés css qui s'ecrivent habituellements avec un "-" sont remplacé par une version camelCase.
    Par exemple, "background-color" devient "backgroundColor".
*/
h1.style.backgroundColor = "rgba(123,45,98)";
h1.style.fontSize = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";
h1.style.fontSize = "5rem";

// Si on se trompe sur le nom de la propriété, aucune erreur n'est envoyé:
h1.style.couleur = "red"; //mais evidement ca ne fonctionne pas !
//de meme si la valeur est fausse:
h1.style.color = "rgbaaa(255,255,255,0.8)";

// ?------------------les classes----------------

/*
    Changer le style peut etre pratique mais tres verbeux.
    On peut aussi choisir de changer une classe, et donc avoir toute les proprietés de cette classe qui s'appliquent ou non

    Pour cela deux possibiltés sont possibles:
    soit className = "nom de la classe" qui permet de recuperer ou changer toute les classes sous forme de string.
*/
console.log(h1.className);
// je change toute les classes par "banane"
h1.className = "banane";
// je supprime toute les classes.
h1.className = "";
// si je veux ajouter une seule classe sans supprimer les precedents
h1.className += "banane";
/*
    soit classList qui retourne un objet "DOMTokenList" qui contient toutes les classes de l'element sous forme de tableau.
    */
console.log(h1.classList);
// supprimer une classe :
h1.classList.remove("banane");
// ajouter une classe :
h1.classList.add('banane');
// j'ajoute ou supprime selon si la classe est deja presente ou non:
h1.classList.toggle("banane");
// retourne true si la classe est presente, false si pas present.
console.log(h1.classList.contains("banane"));

// ?------------------Les autres attributs----------------
/*
    Pour la plupart des autres attributs,
    il est possible soit de les appelers directement via leurs noms, soit via les methodes"getAttribute" et "setAttribute".
*/
console.log(h1.id, h1.getAttribute("id"));
// h1.setAttribute("id", h1.getAttribute("id")+"2");
h1.id += "2";

const a = document.querySelector('footer ul li a');
console.log(a);
// setAttribute prend en premier parametre, l'attribut a changer, et en second, la valeur a lui donner.
a.setAttribute("target", "_blank");
//getAttribute prend en premier parametre, l'attribut a recuperer.
console.log(a.getAttribute("href"));

/*
    on peut selectionner et modifier les data-attributes via " .dataset" suivi du nom du data-attribute.
    */
console.log(a.dataset.color);
a.dataset.color = "je ne suis pas une couleur";
// Modifier un element qui n'existe pas, l'ajoute:
a.dataset.bidule = "je ne sert a rien";
