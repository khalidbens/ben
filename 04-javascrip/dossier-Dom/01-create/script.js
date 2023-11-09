"use strict";

// ?------------------ DOM----------------

/*
     Les DOM ou document objet Model est une representation sous forme d'objet, de notre docuement HTML.

     La plupart des methodes ( fonctions) qui y sont liés, passeront par notre "document".
*/

console.log(document);
// console.dir affiche le detail de l'objet sous chrome
console.dir(document);
/*
    La methode "createElement"() de l'objet "document permet de creer un objet representant une balise HTML.
    Il prendra en parametre, un string indiquant le nom de la balise a creer".
*/

const h = document.createElement("header");
console.log(h);
/*
    L'element a été cree sous forme d'objet Javascript.
    Mais il n'est pas encore present dans la page HTML.
*/
const m =document.createElement("main");
const f = document.createElement("footer");
/*
    Je peux modifier le contenu HTML de ma balise avec la propriété "innerHTML".
*/
h.innerHTML = "<h1>Super site en JS</h1>";
f.innerHTML = /*html*/`<ul><li>Menu 1</li><li>Menu 2</li><li>Menu 3</li></ul>`;
console.log(h,f);
/*
    Mes elements sont bien rempli, mais ils n'apparaissent toujours pas dans la page. HTML.

    Pour cela je vais devoir avoir besoin de selectionner mon body:
*/
console.log(document.body);
/*
    Par defaut, le body est "null"
    cela est du au fait que le script est executé avant la balise "body" soit lu.
    pour corriger cela, deux solution:
       -deplacer la balise script en bas de la page.
       -ajouter l'attinut "defer" au scipt, qui lui demandera de lancer celui ci , qu'une fois le HTML chargé completement:

avant de travailler sur un element HTML,
Cela peut etre une bonne chose de verifier qu'il existe:
*/
if (document.body) {
    /* la methode ".append()" peut etre utilisé sur n'importe quel élement HTML (non auto fermant)
    Elle prendra en argument autant d'element html ( ou string), que souhaité.
    Elle ajouetra ces élement a l'interieur de l'ement HTML qui la precede.
    */
   document.body.append(h, m, f);
//    Il existe aussi ".prepend()" pour ajouter au debut.
    
}
for (let i = 0; i < 5; i++) {
    const p = document.createElement("p");
/*
    ".textContent" permet d'inserer du texte dans un element html.
    Mais a la difference de ".innerHTML", les balises presentes ne seront pas interpreté.

    cela peut etre utile si votre ajout depend de l'entre d'un utilisateur.
*/
p.textContent= "<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing elit. Quibusdam impedit unde nihil ex cupiditate veritatis suscipit cumque officiis odit. Ipsum aut hic beatae deleniti cumque provident incidunt reiciendis sed eligendi!";
/*
    ".appendChild()" a le meme role que ".append()
    mais ne peut prendre qu'un seul element HTML, et pas de string."
*/

m.appendChild(p);




}
