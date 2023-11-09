"use stict";

const dark = document.querySelector("#darkTheme");
dark.addEventListener("input", changeTheme);
/*
    une premiere facon de changer un theme, est de modifier la classe du body.
    ayant du css deja prevu pour cela, le reste changera avec.

*/
function changeTheme()
/*
//    document.body.classList.toggle("dark", dark.checked);

une autre facon de changer un theme, est de modifier la propriété css "var(--fond)". ( les variables)
*/

{
    document.body.classList.toggle("dark", dark.checked);

    if(dark.checked)
    {
        document.documentElement.style.setProperty("--fond", "#333");
        document.documentElement.style.setProperty("--texte", "antiquewhite");
        /*
            je sauvegarde une valeur ( string ) en localStorage, a la clef "theme".
        */
        localStorage.setItem("theme", "dark");
    }
    else
    {
        document.documentElement.style.setProperty("--fond", "antiquewhite");
        document.documentElement.style.setProperty("--texte", "#333");
        /*
            je retire la valeur sauvegardé a la clef "theme".
        */
        localStorage.removeItem("theme");
    }
    
}
/*
    je recupere la valeur qui se trouve a la clef "theme"
    si aucune n'est trouvé , il me retournera "null"
*/
dark.checked = localStorage.getItem("theme") === "dark";
changeTheme();

/*
    session et local storage permettent de sauvegarder des informations dans le navigateur sous forme de string.

    ils utilisent les meme methodes l'un comme l'autre.

    la seule difference, est que sessionStorage sera supprimé si on quitte le navigateur.

*/

sessionStorage.setItem("salutation", "Bonjours via session storage!");
localStorage.setItem("salutation", "Bonjours via local storage!");

/*
    .key(number): permet de recuperer les clefs via leur index.
*/

console.log(localStorage.key(0));

/*
    .clear(): permet de supprimer toutes les clefs.
*/

// localStorage.clear();

console.log(browser.cookies.getAll({}));



