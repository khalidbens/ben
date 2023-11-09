" use strict";
// une fonction sert a ranger ton code pour eviter de lire la totalité d'un code 

/*
    pour declarer une fonction, on utilisera le mot clef "function".
    suivi du nom de la fonction,
    des parenthese qui acceuilleront de possibles argument,
    puis enfin des accolades contenant le corps de la fonction.

    une fonction simplement declaré, ne lancera aucun code .
    pour lancer une fonction, il faut l'appeler.
    pour cela, on ecrira son nom, suivi de parenthses.

    JS va lire une premiere fois le code, et declarer toute les fonctions.
    puis relire le code et effectuer les actions demandéés.
    cest a dire que l'ont peut appeler une fonction, avant ....

*/


salut();
function salut() {
    console.log("salut: salut tout le monde");
}
salut();

/*
    il existe dautres facons de declarer une fonction .
    a noter que toute ces autres facons, ne peuvent etre appelés qu'apres leurs declarations.

    on peut ranger dans une variable, un tableau ou un objet, une fonctions "anonyme".
    cest a dire une fonction qui n'a pas de nom.
    pour lappeler on utilisera la variable ou l'objet qui la contient.
*/
const salut2 = function() 
{
    console.log("salut2: Bonjour les gens !");
}
salut2();

/*

    plutot qu'une fonction anonyme , on pourra utilisé une fonction flechéé?
    cest a dire une fonction dont le mot clef "function" disparait pour laisser place a une "=>" entre les parenthses les accolades?
*/
const salut3 = () => {
    console.log("salut3: Coucou le peuple!");
}
salut3();

/*
    Si la fonction flechée n'a qu'une instruction a faire on peut se passer des accolades.
    ( cela implique un retun automatique, mais on verra cela plus tard).
*/

const salut4 = () => console.log("salut4: Hello words!");
salut4();

// ?------------------ Les paramètres ( ou arguments ) ----------------
/*
    Lorsque l'on place un argument dans la declaration d'une fonction ( entre ses parenthses ),
    lors de l'appel de la fonction, on pourra placer entre ses parenthses, des donnees qui seront transmise a la fonction.

*/

function bonsoir(nom)
{
    if (nom === undefined)
        console.error("donne moi un fichu argument !");
    else  
    console.log("bonsoir"+nom);
}
// Sin on met aucune donnée, l'argument sera "undefined"( non defini ).
bonsoir("Thomas");
// ici "Thomas" sera transmis a l'argument "nom".
bonsoir("Thomas");
// Si trop d'argument lui son donnés, les supplementaires seront ignorés.
bonsoir("Maurice", "Pierre");
/*
    chaque nouvel argument est separé d'une virgule,
    que ce soit pour l'appel ou la declaration.
    le premier parametre de l'appel, irara en premier.
    et ainsi de suite
*/
function bonneNuit(nom1, nom2,)
{
    console.log(`%cBonne nuit ${nom1} ${nom2}`, "background:blue;color:yellow;");
}
bonneNuit("Thomas", "Pierre");
/* 
    on peut indiquer une valeuur par defaut pour un parametre.
    pour cela on fera suivre dans la declaration, son nom d'un "=" puis de sa valeur par defaut.

    lors de l'appel, si aucune valeur n'est fourni, plutot que "undefined", il prendra sa valeur par defaut.
    Si une valeur est fourni, il oubliera la valeur par defaut.
*/
function goodBye(nom1, nom2 = "Les autres")
{
    console.log(" Good bye "+nom1+" et "+nom2);
}
goodBye("Kevin");
goodBye("Marie", "Alan");
/*
     parfois on a besoin qu'une fonction prenne un nombre infini de parametres.
         (c'est le as du console.log()).
    pour cela il suffit que le dernier parametre de la fonction, soit 
    precede du "reset operator" qui est le symbole "...".
     cela va creer un tableau contenant tous les parametres supplementaires.
*/
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function goodMorning(...noms)
{
    // console.log(noms);
    // .toString() permet de transformer le tableau en string.
    // Mais en cas de concatenation, c'est gere par defaut
    // console.log("Good Morning " + noms.);
    // Si on souhaite autre chose que des "," comme separateur,
    console.log("Good Morning" + noms.join(" et "));
}
goodMorning("Pierre");
goodMorning("Pierre", "Ondine", "giovanni");

// ?------------------ Mettre fin a une fonction, renvoyer une information ----------------

/*
    on peut avoir besoin de mettre fin a une fonction avant la fin de son code.
    ou bien retourner une information que l'on pourra utiliser ailleurs?
    ces deux cas utilisent le meme mot clef, qui est "return".
*/
function insulte(nom)
{
    if(nom=== undefined)
    {
        console.error("donne moi un nom!");
        // return seul, mettra fin a la fonction sans autre effet
        return;
        // ce qui suis ne sera pas effectué
        console.log("test");
    }
    // Si le return est suivi d'une valeur, la fonction prendra fin en retournant cette valeur la ou elle a été appelé
    return nom + " Le Poltron";
}
insulte();
// Aucun log, rien est afficher
insulte("Charles");
// On place la valeur retourné par la fonction dans une variable qu'un log ensuite
let newName = insulte("Bob");
console.log(newName);
// On appelle directement la fonction dans le log
console.log(insulte("Bil"), insulte());

/*
    Les fonctions flechées avec une seule instruction ( sans accolade) ont un "return implicite"
    c'est a dire que cette seule instruction est retournee meme sans le mot clef
    "return".
*/

const add = (a, b) =>a+b;
console.log(add(4, 8), add('4', 8));
// quand la fonction flechée ne prend q'un argument, les parenthses sont optionnels:
const square = a =>a*a;
console.log(square(5));

// ?------------------ Fonctions Callback ----------------

/*
    Certaines fonctions, prennent en parametre, non pas un string, numer ou autre, mais une autre fonction.
    c'est ce qu'on appelle une fonction callback.

    un exemple que l'on a deja pu voir , cest "forEach".

    losque l'on met une fonction en callback d'une autre, on se contente d'ecrire son nom, sans parenthses.
*/
const pr = [" Alice ", " Ariel ", " Mulan ", " Belle "];
pr.forEach(bonsoir);
// On peut aussi utiliser une fonction anonyme.
pr.forEach(function(p){
    console.log(" bienvenue " + p);
});
// Ou une fonction flechée
pr.forEach(p=>console.log(" Bonjour bonjour " + p));

/*
    On peut creer notre propre fonction utilisant un callback, simplement en utilisant un argument tel une fonction.
    */

function compliment( salutation , nom )
{
    
    salutation(nom+" Le magnifique" );
}
compliment (bonsoir, " Greg ");
compliment(n=>console.log(" Guten tag"+n), " Hanz");

// ?------------------ Fonctions recursives ----------------

/*
     une fonction recursive est une fonction qui appel elle meme.

     cela va provoquer une boucle, faite attention de prevoir une condition de sortie.
     */

function countdown(x)
{
    console.log(x--);
    if(x<0)return;
    countdown(x);
}
countdown(10);

/*
    Il est de bon ton , de decrire ses fonctions avec le JSDOC cela permet d'un coup d'oeil de trouver l'utilisé de la fonction, ainsi que les parametres qu'elle doit prendre.

    cela sera aussi visible au survol ou remplissage de la fonction:
*/
/**
 * Fonction qui retoune la presentation de la personne
 * @param {string} nom nom de la personne 
 * @param {number} age age de la personne
 * @returns {string} phrase de presentation
 */
function presentation(nom, age)
{
    return `Je suis ${nom} et j'ai ${age} ans`;
}
let p = presentation("Claude", 54);
console.log(p);





    







