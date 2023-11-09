"use scrict";

const url = "https://api.thedogapi.com/v1/images/upload";
const api_key = "469f2c7f-9aad-4623-8e7a-d72c11a91b18";

const formulaire = document.querySelector("form");
const result = document.querySelector(".result");

formulaire.addEventListener("submit", uploadDog);

function uploadDog(e) {
    e.preventDefault();
    const formData = new FormData(formulaire);
    console.log("Chargement en cours");
    result.textContent = "Chargement en cours";
    /*
        fecth peut prendre optionnellement un second argument,
        sous la forme d'un objet, pour y ajouter des options.
        Par exemple changer la methode d'envoie,
        ajouter des donnees en headers,
        ou ajouter un corps a la requete.
        */
    fetch(url, {
        method: "POST",
        headers: {
            "x-api-key": api_key
        },
        body: formData
    }).then(checkResponse)
}
function checkResponse(response) { 
    console.log("chargement Terminé !");
    result.textContent = "Chargement Terminé !";
    if(response.ok)
    {
        response.json().then(data => {
            console.log(data);
            result.innerHTML = `<img src="${data.url}"alt="dog">`;
        })
    }
    else {
        console.log(response.statusText);
        result.textContent = response.statusText;
    }
}