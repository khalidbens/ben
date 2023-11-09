
"use strict";
// je veux recuperer un tableau en json 

fetch("tab.json").then(res=>{
    if(res.ok)
    {
        res.json().then(data=>{
            tri(data).then(message=>{
                console.log(message,data);
            })
            .catch(err=>{
                console.error(err);

            })
            .catch(err=>{
                console.error(err);
            })
        })
    }
})

/*
    le probleme avec ce genre de code c'est ce qu'on appelle, un "callback hell"....


    c'est pour  cela que js implente les mots clef "async" et "await".

    le mot clef "async" se place devant la declaration d'une fonction qui deviendra alors asynchrone.

    le mot clef "await" se place devant l'appel d'une fonction retournant une promesse.
    Il indique que le code doit attendre le resulat de la promesse avant de continuer l'execution.
        la valeur retourné ne sera donc plus une promesse, mais directement son resultat.
        ! "await" ne peut pas être utiliseé avec les fonctions anonymes!
*/

async function exemple()
{
    let data;
    let res = await fetch("tab.json");
    // console.log(res);
    // le point d'interogation cest "SI CEST PAS"
    if(!res.ok)return
    /*
        await ne gerant pas le .catch();
        on peut utiliser un simple "try catch (finally)"
        pour remplacer.
    */

        try{
            data = await res.json();
            let message = await tri(data);
            console.log(message);
        }
        catch(err){
            console.error(err);
        }
        finally{
            console.log(data);
        }
}
exemple();

/*
    a noté que les fonction asynchrone se mettenr a retourner automatiquement des promesses.
*/

function synchrone()
{
    return "coucou"
}
async function asynchrone()
{
    return "coucou";
}
console.log(synchrone(),asynchrone());
// notre burger etait un sacré callback hell
async function burger()
{
    console.log(await pain2());
    console.log(await sauce2());
    console.log(await viande2());
    console.log(await salade2());
    console.log("Mon burger est terminé");
}
burger();
console.log("test");



// code du cours precedent


function tri(tableau) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(tableau)) {
        reject(new Error('Le paramètre doit être un tableau.'));
      } else {
        try {
          const tableauTrie = tableau.sort((a, b) => a - b);
          if (tableauTrie.every(element => typeof element === 'number')) {
            resolve(tableauTrie);
          } else {
            reject(new Error('Le tableau contient des valeurs non-numériques.'));
          }
        } catch (error) {
          reject(error);
        }
      }
    });
  }





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