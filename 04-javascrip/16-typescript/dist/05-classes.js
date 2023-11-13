"use strict";
class Truc {
    /*
       a la difference de JS, TS utilise des mots clefs pour preciser si une proprieté est publique ou privee.
       TS ajoute aussi les proprietés " protected" et "private".

        ATTENTION PRIVATE NE SERA PAS TRADUITE EN JS
    */
    prenom = "Maurice";
    nom = "Dupont";
    age = 54;
}
const t = new Truc();
t.prenom;
// les champs protected et private ne sont pas accessibles a l'exterieur de la classe.
// t.age;
// t.nom;
class Machin extends Truc {
    constructor() {
        super();
        this.prenom;
        this.nom;
        // les propriétés et methode "protected" sont herité a la difference des "private"
        // this.age;
        document.body.addEventListener("click", this.faireUnTruc);
    }
    /*
        Dans certains cas, comme celui du "addEventListener", "this" peut changer de valeur et ne plus correspondre a l'objet. On peut donc le precicer a TS en indiquant entre parentheses, le nouveau type "this".
    */
    faireUnTruc() {
        console.log(this);
    }
}
class Collection {
    items;
    /*
        En declarant l'accesseur d'une propriété directement dans les arguments.
        cela indique a TS que l'on veut sauvegarder cet argument en tant que proprieté de notre classe .
    */
    constructor(items) {
        this.items = items;
    }
    addOne(arg) {
        this.items.push(arg);
        return this;
    }
    addMore(arg) {
        this.items.push(...arg);
        return this;
    }
}
const c = new Collection([5, 3, 9, 0]);
c.addOne(32);
const c2 = new Collection(["truc", "machin"]);
c2.addOne("bidule").addMore(["truc", "machin"]).addOne("fin");
/*
    petite
*/
class Triangle {
    c1 = 5;
    c2 = 8;
    c3 = 2;
}
class Rectangle {
    c1 = 12;
    c2 = 20;
}
function getC1(arg) {
    return arg.c1;
}
getC1(new Rectangle());
//    getC1(new Date());
getC1(new Triangle());
/*
 losqu'on indique a TS qu'un argument est d'une classe particuliere.
 Il ne verifiera pas le nom de la classe, mais si l'objet contient les meme proprietés.
 Ici "rectangle" est un objet contenant les proprietés "c1" et "c2".
 Alors il accepte un "triangle" qui a aussi ces proprietés.
*/
class Polygone {
    sides = {};
    countSides() {
        return Object.keys(this.sides).length;
    }
}
/*
    les classes abstraites ne peuvent pas etre instanciées elle ont pour role d'etre hérité uniquement.
*/
// new Polygone();
class Carre extends Polygone {
    constructor(c) {
        super();
        this.sides.c = c;
    }
    /*
        les methode abstraites que l'on retrouve dans les classes abstraites.
        obligent a integrer une methode de meme nom ayant les meme proprieté aux classes qui en heritent.
        le corps de la fonctionpeut changer d'une classe a l'autre.
    */
    surface() {
        return this.sides.c ** 2;
    }
}
const ca = new Carre(5);
console.log(ca.surface());
console.log(ca.countSides());
