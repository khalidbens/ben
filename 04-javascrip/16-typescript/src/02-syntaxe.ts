"use strict";

/*
le pricipal apport de Typescript, est le typage comme son nom l'indique.
c'est a dire que comme dans de nombreux langage 
nous allons pourvoir indiquer le type de nos variables et arguments.

*/

const mot: string = "coucou";
const chiffre: number = 5;
const bool: boolean = true;
const nu : null = null;
// on peut aussi indiquer ce que contiendra nos tableaux.
const arr1: string[] = ["coucou", "salut"];
/*
dans de rare cas, une variable doit pouvoir contenir n'importe quel type de valeur.
on utilisera alors le mot clef "any"
*/
 let truc: any = 5;
 truc = "coucou";
 const arr2: any[] = ["truc", 45, true];
 /*
 pour typer un objet, je vais devoir indiquer chaque proprité et chaque valeur.
 l'ajout d'un "?" permet d'indiquer que la propriété n'est pas obligatoire.

 */

 const person: {prenom: string, age?: number } = {prenom : "Paul"};
//  si un objet peut avoir des proprités supplementaires, on peut lui indiquer ainsi:

const person2: {prenom: string, [key:string]:string} =
{prenom: "Paul", nom: "Dupont"};

/*
j'ai indiqué ici que les possible propriétés supplementaire ont des clefs sous forme de string contenant elle meme des strings.

dans le cas d'une instanciation de classe, on peut simplement utiliser le nom de la classe en type
*/

const today: Date = new Date();
/*
plus rare si on place une fonction dans une variable on peut le typer avec le mot clef "function"
*/

const salut: Function = function(){};

/*
    en parlant de fonction,
    il est possible de typer les arguments, ainsi que la valeurde retour, en placant les ": type" apres les parentheses des arguments.
    "void" est le mot clef (fonction) qui ne renvoie pas de valeur.
*/
function clickMe(e:PointerEvent): void
{
    console.log("merci de cliquer", e.target);
    
}
/*
    clickMe attend une event "PointerEvent"
    seul un evenement de type "pointer..." lui donnera ce type d'event,
    utiliser un autre type d'event provoquera une erreur.
*/

// document.addEventListener("click", clickMe);
document.addEventListener("pointerdown", clickMe);

/*
    on peut aussi indiquer q'un argument d'une fonction est en lecture seul.
    cest a dire, qu'il ne peut pas etre modifié.
*/
function tri(arg: readonly any []): any []
{
    // impossible de trier le tableau en readonly
    // arg.sort();
    // mais je peux trier sa copie
    return [...arg].sort();
}
/*
    la plupart du temps, indiquer le type d'une variable, peut etre optionelle.
    TS le declare lui meme selon sa premiere valeur:

    */
   let a = 5;
// a = "truc";

/*
    mais parfois TS peut se tromper ou avoir des doute par exemple, si une fonction peut retourner plusieurs valeurs differentes.
    */
// const btn1 = document.querySelector("#compte");
// btn1.style.color = "red";
/*
    ici deux erreurs :
    si querySelector ne trouve pas d'element, il retourne null et style n'existe pas sur "nul".
    et si il trouve quelque chose, il retourne un "Element" et style n'existe pas sur "Element".
    Il existe pplusieurs facons de corriger cela .
    pour certains d'entre elles, attention que votre selecteur CSS soit bon .

    ici on indique que le resultat du querySelector doit etre un HTMLButtonElement
    */
//    const btn1 = document.querySelector("#compte") as HTMLButtonElement;
//    btn.style.color = "red";

   /*
        meme resulat qu'avec "as"

   */
//    const btn1 = <HTMLBodyElement>document.querySelector("#compte");
//    btn1.style.color = "red";

/*
le "!" permet de dire que notre variable n'est pas nulle.
*/

// const btn1 = document.querySelector("#compte") !;
// btn1.style.color = "red";

/*
    ici on indique que la valeur de retour ne sera pas "Element"mais "HTMLButtonElement",
    ne reglant ici aussi qu'un seul des deux problemes
*/

// const btn = document.querySelector<HTMLButtonElement>("#compte")!;
// btn.style.color = "red";

/*
    Parfois une variable peut avoir plusieurs types possibles.
    on utilisera alors l'union type avec "|"
*/
let y: string | number | boolean;
y = "truc";
y = true;
// y = [];






