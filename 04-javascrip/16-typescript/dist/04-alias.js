"use strict";
/*
    avec le mot "type" je peux declarer un type et l'utiliser sur variables
*/
// ----------- les Alias-----------------
let f = { nom: "pomme", couleur: "rouge" };
let aF = [f, { nom: "Banane", couleur: "Jaune" }];
let p = { nom: "Dupont", age: 45 };
let n = "George";
let fp = "age";
fp = "nom";
/*
    la proprieté typeof permet de creer un type à partir d'un objet deja existant
*/
let objet = { vieux: true, prenom: "Maurice", age: 78 };
let objet2 = { vieux: false, prenom: "Pierre", age: 23 };
// const test = "bonjour";
// ---------------GENERICS-------------------
function useless(arg) {
    return arg;
}
let machine = useless("bonjour");
/*
    Par default, dans l'exemple ci dessus, notre fonction ne fait que retourneé son argument sans rien faire.
    Mais typescript est incapable de faire le lien entre le type de l'argument et celui de la valeur de retour.
    Ma variable vaut donc "any".

    Avec les Generics, il est possible d'indiquer a notre fonction qu'elle va recevoir un type "nommé" et que celui ci sera le meme que la valeur de retour.
    ici mes variable sont du type de l'argument donné a la fonction.

    il est possible de limiter les types possibl avec :

    *<NomDuType> = number | string
*/
function useful(arg) {
    return arg;
}
let machine2 = useful("bonjour");
let machine3 = useful(54);
/*
    ici j'indique que l'argument est un tableau du type "nommé" et que la valeur de retour est non plus un tableau mais uniquement le type contenu dans ce tableau.
*/
function lastOf(arr) {
    return arr[arr.length - 1];
}
let last = lastOf([34, 54, 23]);
let last2 = lastOf(["34", "54", "23"]);
/*
    Ici ma fonction accepte n'importe quel argument, tant que cet argument possede la propriété "length" qui est un "number".
 */
function logSize(arg) {
    console.log(arg.length);
    return arg;
}
let s1 = logSize([45]);
let s2 = logSize("bonjour");
// let s3 = logSize(45);
let s4 = logSize({ nom: "Dupont", length: 45 });
