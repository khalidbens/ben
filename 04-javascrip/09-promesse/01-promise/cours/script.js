'use strict';

/*
Par défaut toute programmatopn en JS est dite "synchrone", c'est à dire que tout le fonctionnement de la page et plus précicément celui de JS attend la fin d'une instruction avant de passer à la suivante
*/

for (let i = 0; i < 1_000_000_000; i++) {
    if (i === 999_999_999) {
        console.log("1 Synchrone : Fin de la boucle");
    }
}

console.log("2 Bonjour après la boucle Synchrone");

/*
Mais JS peut gérer de la programmation asynchrone.
C'est à dire qu'il peut continuer d'executer du code alors qu'une autre partie est toujours en train de travailler.
On a pu voir cela avec fetch
*/

fetch("test1.json").then(r => {
    for (let i = 0; i < 1_000_000_000; i++) {
        if (i === 999_999_999) {
            console.log("3 Synchrone : Fin de la boucle");
        }
    }
})

console.log("4 Bonjour après la boucle Synchrone");

/*
Une fonction retourne soit une valeur (number, array...) soit rien (undefined).
Il s'avère que fetch retourne bien quelques chose, il retourne une "promise"
*/

let request = fetch("test1.json");
console.log(request);

/*
Dans cet objet "promise" on a trois méthodes principales :
  - .then() qui va prendre une fonction callback qui sera appelée une fois la promesse tenue (réussite)
  - .catch() qui va aussi prendre une fonction callback qui sera appellée si la promesse est rejetée (échec)
  - .finally() qui prendra une fonction callback qui sera appellée une fois la promesse traitée (réussite ou échec)
*/

// La fonction callback reçoit la réponse du fetch.
request.then(res => console.log("then", res));
// La fonction callback recoit l'erreur du fetch
request.catch(err => console.log("catch", err));
// La fonction callback ne reçoit rien du tout
request.finally(test => console.log("finally", test));

/*
A noter que chacun d'entre eux retorune une promesse, ils sont donc chainable ;
request.then(callback).catch(callback).finally(callback);

Il est possible de resoudre plusieurs promesses en meme temps pour cela on utilisera la methode ".all()" de l'objet "Promise".
Methode a laquelle on donnera un tableau contenant toute les promesses a resoudre.

une fois toute resolue le .then recevra un tableau contenant toute les reponses 
*/

let r1 = fetch("test1.json");
let r2 = fetch("test2.json");

Promise.all([r1, r2]).then(res => {
    /*
        Si elles sont de meme type (ici des fetchs), on peut les resoudre avec un forEach.
    */
    console.log(res);
    res.forEach(r => {
        if (r.ok) {
            r.json().then(data => console.log(data.prop));
        }
    })
})

/*
    on trouvera aussi les methodes "promise.race()" et promise.any()
    qui prendront elles aussi un tableau de promesse.
    mais au contraire de ".all()", elles ne rendront que la premiere promesse a s'executer(la plus rapide).
    
    la difference entre les deux, se fait au niveau du .catch(); ".race()" lancera le catch, si la plus rapide des promesse retourne une erreur.
    ".any()" lancera le catch, si aucune promesse retourne une erreur.

    On peut creer nos propres promesses:
    lorsque l'on cree une promesse, elle prend une fonction callback avec 2 arguments.

    ces deux argument representent respectivement la fonction callback qui sera donné au then et celle donné au catch.
*/
let rendom = new Promise(function (resolve, reject) {
    let r = Math.floor(Math.random() * 10);
    if (r < 5) {
        resolve; ("bravo, r est inferieur a 5");
    }
    else {
        reject; ("desolé, r est superieur a 5");
    }
}

);
console.log(rendom);
rendom.then(res => console.log("then", res));
rendom.catch(err => console.log("catch", err));
rendom.finally(() => console.log("finanly", "Mon random est terminé"));

/*
    Exemple d'utilisation
    */
function burger1() {
    pain1();
    sauce1();
    salade1();
    viande();
    console.log("Mon burger est terminé");
}
function pain1() {
    setTimeout(() => console.log("Mon pain est terminé"), 1000)
}
function sauce1() {
    console.log("Ma sauce est terminé");
}
function salade1() {
    console.log("Ma salade est terminé");
}
function viande() {
    setTimeout(() => console.log("Ma viande est terminé"), 3000)
}

// avec promesse:
function pain2() {
    return new Promise(resolve => setTimeout(() => resolve("Mon pain est terminé"), 1000));
}
function viande2() {
    return new Promise(resolve => setTimeout(() => resolve("Ma viande est terminé"), 3000));
}
function sauce2() {
    return new Promise(resolve => resolve("Ma sauce est terminé"));
}
function salade2() {
    return new Promise(resolve => resolve("Ma salade est terminé"));
}

function burger2() {
    pain2().then(pain =>{
        console.log(pain);
        sauce2().then(sauce => {
            console.log(sauce);
            salade2().then(salade => {
                console.log(salade);
                viande2().then(viande => {
                    console.log(viande);
                    console.log("Mon burger est terminé");
                })
            })
        })
        
    })
    
}


