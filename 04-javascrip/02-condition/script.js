" use strict";
/*
    Math.random() retourne un chiffre aleatoir entre 0 et 1
    Math.floor() retourne le chiffre arrondi a l'inferrieur*/

let x = Math.floor(Math.random() * 20);
console.log(x);

/*
    Une condition commencera ogligatoirement par un "if" il sera suivi de parenthese contenant la condition puis d'accolade contenant l'instruction a realiser .

    si la condition est "true" alors l'instruction sera realiser.
    si elle est "false" alors l'instruction ne sera pas realiser.
*/
if(x<10){
    console.log(x + "x est plus petit que 10");

}

/*
     on pourra faire suivre un "if" de 0 a autant que l'on souhaite de "else if () {}"
     ce sont des conditions supplementaires, qui seront verifies, uniquement si toute les precedentes conditions sont "false"
     */

else if(x>10){
    console.log(x + "x est plus grand que 10");
}

/*  
    ON PEUT OPTIONNEMENT UTILISER UN "else" {} qui ne prend aucune condition
    celui ci s'effectuera si tout ce qui precise est faux
    */

    else
    {
        console.log( "x est egal a 10");
    }

/*
    si la condition n'a qu'une seule instruction a effectuer, 
    alors les accolades peuvent etre oublées.
    */
if (x < 10) console.log(x + "x est plus petit que 10");
else if (x >10)
    console.log(x + "x est plus grand que 10");
else
    console.log("x est egal a 10");

/*
    on peut ecrire une suite de condition sur une seule ligne, cela se nomme un ternaire.

    Il vaut mieux utiliser cela dans le cas d'une opperation simple.
    syntaxe:
    condition ? true : false;
    */

let message = x<10 ? x + " est plus petit que 10" : x + " est plus grand ou egale a 10";
console.log(message);
// Attention de ne pas aller trop loin avec les ternaires au risque de perdre de lisibilité
message=
    x<10 ?
    x + " est plus petit que 10":
    x>10 ?
        x+ "est plus grand que 10":
        "x est egal a 10";
console.log(message);

//?-----------------SWITCH-----------------
// prompt affiche une boite de dialogue ou l'utilisateur peut rentrer un texte.
let ville = prompt("de quelle ville venez-vous?");
console.log(ville);

// Si l'utilisateur appuis sur annulé , la valeur retourné sera null
if (ville == null) ville = " pas de reponse";

/*   switch permet de verifier plusieurs cas ,
    il prendra une variable entre parenthese,
    puis autant de "case" que l'on souhaite.
       chacun representera une valeur possible de notre variable.
       il sera suivi des instruction voulu , puis d'un "break" qui mettra fin au "case"
       */

switch (ville.toLowerCase())
 {

    // Plusieurs cas sans break pour les separer, entrainera la lecture de tout le code jusqu'au prochain break.
    case "londre":
    case "tokyo":
    case "paris":
        console.log("De la capitale donc.");
        break;
    case "lille":
        console.log("Etes vous un ch'ti.");
        break;
    default:
        console.log("Je ne connais pas cette ville.");

}






       