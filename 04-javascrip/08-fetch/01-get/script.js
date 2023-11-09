"use strict";

/*
    Lorsque l'on veut recuperer des donnees depuis un autre fichier, ou bien depuis une API.
    Nous avons besoin que JS envoi une requete ( de preference asynchrone) a ce fichier ou un site de l'API.
    pour cela deux solutions:
    - le plus ancien XMLHttpRequest();
    - le plus recent fetch().

*/

const url = "./hero.json";

// ? --------------- XMLHttpRequest ----------------
// je cree un nouvel objet XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
// je lui ajoute une fonction lors de levenement "onreadystatechange"
xmlhttp.onreadystatechange = handleRequest
/*
    j'ouvre la requete, en lui donnat les parametres suivant:
    1. la methode utiliséés sous forme de string (ici get)
    2. l'URL auquel lancer la requete (ici dans mon const url)
    3. si la requete doit etre asynchrome ou non. ( de preference oui)
    */

xmlhttp.open("get", url, true);
// On envoi la requete
xmlhttp.send();
function handleRequest() {
    console.log(xmlhttp.readyState, xmlhttp.status);
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let success, data;
        /*
            le try{}catch{}
            permet de metrre un morceau de code dans les accolades du try, qui sera executé,
            mais qui en cas d'erreur ne fera pas planter toute l'application.
            l'erreur sera "capturé" par le catch et pourra etre affiché, ou personnalisé.

            optionnellement, on peut ajouter a la fin un "finally" qui exuctera son code une fois le try catch terminé.
        */
        try {
            console.log(xmlhttp.responseText);
            data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            success = true;

        }
        catch (e) {
            console.error(e.message + " dans ->" + xmlhttp.responseText);
            succes = false;
        }

        finally {
            if (success) {
                document.body.innerHTML = `<h1>${data.squadName}</h1>`;
            }
        }


    }
}

// ? --------------- fetch ----------------

/*
    fetch est toujours en asynchrone.
    par defaut, il est en GET
    donc pour une requete asynchrone en GET, il suffit de lui donner l'url en parametre.
    Il pourra prendre un second parametre, en cas d'option supplementaire

    fetch est suivi d'un ".then()" qui contiendra la fonction callback a lancé une fois la requete terminé.
*/

fetch(url).then(handleFetch);

function handleFetch(response) {
    console.log(response);
    // ".ok" est un boolean qui indique si la requete a reussi
    if (response.ok) {
        /*
            l'objet "response" de fetch, contient sa propre methode asynchrone pour traiter le json.
            je ne passerais donc pas par json.parse() mais par ".json()"

            elle sera suivi d'un .then() qui contiendra la fonction callback a lancé une fois le json traité.
            et d'un ".catch()" qui contiendra la fonction callback a lancé une fois le json non traité. ( si il y une erreur)
        */
        response.json()
            .then(data => {
                document.body.innerHTML += `<h1>${data.homeTown}</h1>`;
            })
            .catch(error => console.error(error));

    }
    else {
        console.error(response.statusText);
    }
}


