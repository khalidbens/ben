"use strict";
"use strcipt";
/*
    le narrowing en TS est le fait de supprimer des possibilités de types pour nos variables.
 
    */
// "age" peut etre un string
function birthday(age) {
    if (typeof age === "number") {
        age++;
    }
    else {
        age = parseInt(age) + 1;
    }
    /*
    dans le "if"age devient forcement un type nombre,
    dans le "else" age devient forcement un type string.
*/
    return age + " ans";
}
function chaussette(droite, gauche) {
    if (droite === gauche) {
        console.log("vous avez la paire !", droite, gauche);
        /*
            pour entrer dans la condition, droite et gauche doivent etre egales.
            la seule possiblités c'est que ce soit tout les deux des string.
        */
    }
}
function planning(date, days) {
    // date.getDate();
    if (date instanceof Date) {
        date.getDate();
    }
    // date++;
    if (!Array.isArray(days)) {
        days++;
    }
}
function clavier(e) {
    if (typeof e === "number") {
        console.log(e);
        /*
            ici "e" est de type "never"
            cela signifie que selen "TS", il est impossible d'arriver ici.
        */
    }
}
/*
    si il j'indique qu'une fonction ayant pour role de faire du narrowing retourne un boolean.
    la logique humain permet de comprendre la connexion entre ce boolean et le role de la fonction.
    mais pour "TS", il comprend juste que la fonction retourne un boolean, sans savoir son role.

    pour indiquer a TS le role de ce boolean,
    nous pouvons remplacer le type de retour par "argument is type"
    ici on a mit " a is Date" pour lui indiquer que le boolean servira a preciser l'argument est une date
*/
// function isDate(a: any): boolean
function isDate(a) {
    return a instanceof Date;
}
function check(a) {
    if (isDate(a)) {
        console.log(a);
    }
}
