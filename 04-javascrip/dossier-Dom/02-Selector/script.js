"use strict";

/*
    document.getElementByTagName() permet de trouver a la selectionner un element HTML.
    Il permet de recuperer tous les element dont le nom de la balise vaut le parametre donné:

    Si je veux tous les LI de la page exemple:
    */

const lis = document.getElementsByTagName("li");
console.log(lis, lis [0]);

/*
    Peu importe qu'il y a un ou plusieurs resulats, ce sera rangé dans un objet appelé "HTMLCollection".
    Il fonctionnera un peu comme un tableau.
    si je veux le premier element, je tape [0]

    ici j'ai cherché dans tous mon document, 
    Si je voudrais chercher par exemple que dans le footer.
    Il me faudrait d'abord selectionner le footer, puis lui dire 
         footer.getElementByTagName("li")
    */

lis [0].textContent = "Marbre";

/*
    document.getElementByClassName(),
    Il fonctionnera exactement comme document.getElementByTagName(), 
    si ce n'est qu'il selectionnera les elements via le nom de leurs classes.
    */
const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps,p1);

/*
    document.getElementById() ATTENTION PAS DE S, 
    Il va recuperer l'element HTML qui possede l'id donné en parametre.
    Pas de HTMLCollection ici.

*/

const h1 = document.getElementById("mainTitle");
console.log(h1);

/*
    querySelector()
    il va selectionner le premier element qui correspond a son parametre.

    Il prendra en prarametre, un string, contenant n'importe quel selecteur CSS.
*/

const p2 = document.querySelector(".marche2");
// const p2 = donc document.querySelector("main> p: nth-of-type(2)");
// const p2 = document.querySelector("body main>p.marche2.step");
console.log(p2);

/*
    querySelectorAll()
    Il selectionnera tous les elements qui correspond a son parametre.

    a la difference des autres methodes de selection,
    on obtient pas un objet HTMLCollection.
    mais un tableau "NodeList".
*/
const lis2 = document.querySelectorAll("footer li");
console.log(lis2, lis2[0]);

/*
    pareillement qu'avec les precedents, je peux faire ma recherche dans un element precis.
*/

const header = document.querySelector('header');
const h = header.querySelector('h1');

// ?------------------ Quelques Selecteurs Bonus----------------

//Selectionne le prochain élément frere en html, ici le main
console.log(header.nextElementSibling);
// Selectionne ce qui suit dans le HTML, ici le saut a la ligne et l'indentation.
console.log(header.nextSibling);
// Selectionne l'element HTML precedent, ici le second li.
console.log(lis2[2].previousElementSibling);
// retourne un objet HTMLCollection contenant tous les enfants directes.
console.log(header.children);
// Retourne le parent de l'element HTML
console.log(lis[2].parentElement, header.parentElement);
// retourne le parent le plus proche qui correspond au selecteur CSS
console.log(lis[2].closest("footer"));

// ?------------------Deplacer ou Supprimer----------------
// Pour deplacer un element, il suffit de l'append ailleurs.
header.append(lis2[0]);
// remove suprime l'element du HTML
lis2[2].remove();
// Mais il existe toujours dans la variable JS
console.log(lis2[2]);

// lis2[1].parentElement.append(lis2[2]); exemple pour refaire venir lelement

// il existe aussi pour supprimer:
// header.removeChild(h);

// lis2[1].parentElement.append(lis2[2]);

// ------------EXO 1 ---------------
// Déplacer la modale dans le body.
let modal = document.querySelector("aside div");
document.body.append(modal);
// ----------- EXO 2 ---------------
// modifier le texte des 3 li du footer, si possible avec une boucle.

// lis [0].textContent = "Marbre";
// lis [1].textContent = "manger";
// lis [2].textContent = "Blanc";

/*const li34 = document.querySelectorAll("footer li");
for (let i = 0; i< li34.length ; i++) 
{
    li34[i].textContent = "manger";

facon 2 
li34.forEach ()


}*/

// ------------ EXO 3 --------------
// Remplacer le texte des paragraphes pair.

// const pair = document.querySelectorAll("main p");
// for (let i = 0; i < pair.length; i++) {
    
//     if (i%2)
//      {
//       pair [i].textContent = "ceci est un paragraphe pair";  
//     }
// }


// for (let i = 1; i < pair.length; i+=2) {
    
//       pair [i].textContent = "ceci est un paragraphe pair solution 2";  

// }











