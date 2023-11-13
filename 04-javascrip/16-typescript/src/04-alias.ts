"use strict";

/*
    un dev n'aime pas se repeter.
    pour eviter de devoir retaper des types long, TS permet de creer ses propres types.
*/

type Fruit = { nom: string, couleur: string };

/*
    avec le mot "type" je peux declarer un type et l'utiliser sur variables
*/
// ----------- les Alias-----------------

let f: Fruit = { nom: "pomme", couleur: "rouge" };
let aF: Fruit[] = [f, { nom: "Banane", couleur: "Jaune" }];
/*
    je peux declarer un type et utiliser ce type pour declarer un second type.
    ici je declare le type "Age" et j'utilise dans la declaration du type "Person".
*/
type Age = number | string;
type Person = { nom: string, age: Age };

let p: Person = { nom: "Dupont", age: 45 };
/*
    ici j'indique que le type "Name" est un type qui correspond au type "nom" du type "Fruit".
*/
type Name = Fruit["nom"];

let n: Name = "George";
/*
    keyof permet de creer un type qui n'accepte que les proprietés d'un objet sous forme de string.
    ici mon type "Full" est un type qui correspond aux proprietés d'un objet ( "nom" et "age" ).
*/
type Full = keyof Person;

let fp: Full = "age";
fp = "nom";
/*
    la proprieté typeof permet de creer un type à partir d'un objet deja existant 
*/
let objet = { vieux: true, prenom: "Maurice", age: 78 };
type Item = typeof objet;

let objet2: Item = { vieux: false, prenom: "Pierre", age: 23 };

// const test = "bonjour";

// ---------------GENERICS-------------------

function useless(arg: any): any {
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
function useful<Type1>(arg: Type1): Type1 {
    return arg;
}
let machine2 = useful("bonjour");
let machine3 = useful(54);
/*
    ici j'indique que l'argument est un tableau du type "nommé" et que la valeur de retour est non plus un tableau mais uniquement le type contenu dans ce tableau.
*/
function lastOf<TypeArr>(arr: TypeArr[]): TypeArr|undefined {
    return arr[arr.length - 1];
}
let last = lastOf([34,54,23]);
let last2 = lastOf(["34","54","23"]);

/*
    Ici ma fonction accepte n'importe quel argument, tant que cet argument possede la propriété "length" qui est un "number".
 */
function logSize<TypeL extends {length: number}>(arg: TypeL): TypeL{
    console.log(arg.length);
    return arg;
}

let s1 = logSize([45]);
let s2 = logSize("bonjour");
// let s3 = logSize(45);
let s4 = logSize({nom: "Dupont", length: 45});
