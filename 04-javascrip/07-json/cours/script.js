"use strict";
/*
    JSON signifie "JavaScript Object Notation".
    il a principalement deux roles.
    Le premier est de stocker des donnees complexes tel que des objets ou des tableaux sous forme de string.
    le second est de pouvoir partager des donnees entre plusieurs langages a la syntaxe differente.
    On pourra aussi creer des fichier JSON qui seront donc lisible par n'importe lequel de ces language.

    ici on va recuperer les donnees d'un formulaire, les stocker sous forme de json en localStorage, et les recuperer.
*/

const form = document.querySelector('form');

form.addEventListener("submit", saveData);

function saveData(e)
{
    e.preventDefault();// evite qu'il y ai un refresh de page 
    //je cree un objet FormData qui contiendra les donnees du formulaire donné en parametre
    const data = new FormData (form);
    // console.log(data);
    const user = {}
    // je boucle sur mon FormData pour obtenir les valeurs et noms des champs obligatoire
    data.forEach((value, name)=>{
        // console.log(value, name);
    // je remplii mon objet vide avec les donnes du formulaire
        user [name] = value;
    })
    // j'obtien un objet contenant toute les informations de mon formulaire
    console.log(user);
    showUser(user)
    // je transforme mon objet en donnes JSON (sous forme de string)
    const strUser = JSON.stringify(user);
    console.log(strUser, typeof user);
// mon Json etant un string, je peux le sauvegarder en localStorage
    localStorage.setItem("user", strUser)
    
}
/**
 * affiche le prenom et l'age de l'utilisateur dans le h1
 * @param {objet} u un objet contenant une propirté prenom et age
 */
function showUser(u){
    const h1 =document.querySelector('h1');
    h1.textContent = `je suis${u.prenom}, ${u.age} ans !`;

}
const userString = localStorage.getItem("user");
if(userString)
{
    console.log(userString, typeof userString);
    /*
        l'objet JSON n'a que deux methodes.
        -parse: convertit une chaine de caractere en Objet JAVASCRIPT
        -strinify : convertit un Objet JS en chaine de caractere
        */
    const user = Json.parse(userString);
    console.log(user, typeof user);
    showUser(user)
}





