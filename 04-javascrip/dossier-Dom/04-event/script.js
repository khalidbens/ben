"use strict";

function test(e) {
    console.log(e);
}
const h1 = document.querySelector('header > h1');
/*
    Lorsqu'un utilisateur interagit avec un la page,
    il bouge la souris, Il clique, il tape au clavier,
    il scroll...
    Cela produit un evenement, nous allons pouvoir dire a javascript d'ecouter ces evenement et de faire une action a ce moment.

    Pour cela plusieur methode, la premiere etant:
    .addEventListener("nom de la methode", "nom de la fonction");
    Il prendra en premier parametre le nom de l'evenement a ecouter ( toujours en minuscule)
    et en second la fonction a lancer losque l'evenement ce produit ....*/
h1.addEventListener("click", test);
/*
    Par defaut, addEventListener va passer a la fonction donné, un parametre contenant un objet correspondant a l'evenement.
    Ici un objet "Cick" qui contient entre autre.
       la position de la souris au clique.
       la cible de l'evenement ( ou on a cliquer)

    On peut ajouter autant d'evenement que l'on souhaite sur un meme element.
    on peut aussi utiliser des fonction anonyme ou fleché.
       */
    let x =0;
    h1.addEventListener("click", function(e) {
        let r = Math.floor(Math.random() * 360);
        e.target.style.transform = `rotate(${r}deg)`;
        x++;
        if(x===5)e.target.style.color = "red";
    });

    const menu1 = document.querySelector('.menu1');
    /*
        On peut aussi ajouter un evenement via la proprité qui correspond.
        Chaque element HTML a de multiples proprietés
        commencant par "on" suivi du nom de l'evenement.
        (onclick, onload...)
        Si cette propriété est remplie avec une fonction, cela aura le meme effet.
        */
    menu1.onclick = test ;
    // On ne peut ajouter qu'un seul evenement sur une propriété:
    menu1.onclick = (e)=>{
        if(e.target.style.fontSize==="")
        e.target.style.fontSize = "2em";
        else
        e.target.style.fontSize = "";
    }
    /*
        Une troisieme facon d'ajouter un ecouteur d'evenenement existe mais celle ci est plutot deconseillé car melangeant HTml et JS.L'exemple se trouve dans le HTML sur menu2.

        Si on souhaite supprimer un ecouteur devenement,
        pour l'attribut, il suffit de le vider:
        */
    menu1.onclick="";
    /*
        pour le addEventListener, on utilisera removeEventListener, en lui donnant les meme parametre.
        */
    h1.removeEventListener("click", test);
    // Petit default, on ne peut pas retirer que les event utilisant une fonction nommée.

    //?------------------Input event----------------
    const div1 = document.querySelector('.div1');
    const input1 = div1.querySelector('input');
    const btn1 = div1.querySelector('button');
    /*
        L'evenement input reagis a chaque modification d'un element de formulaire.
        (input,textarea, checkbox, radio...)
        Il existe aussi l'evenement "change" qui reagi une fois l'input est validé. ( par exemple sur un textarea, ou un input:text cela sera une fois l'input quitté)
        */
    input1.addEventListener('input', (e)=>{
        /*
            sur tous les element HTML de formulaire, on trouvera l'attribut "value" qui va contenir la valeur du input.
        */
        console.log(e.target.value);
        if(e.target.value != "")
            btn1.textContent = e.target.value;
        else
            btn1.textContent = "Clique moi!";
    })
    // ?------------------Options----------------
    /*
        On peut ajouter des options a notre addEventListener..
        Pour cela on ajoutera un objet"{}" en troisieme argument.
            ElementHTML.addEventListener("event", function,{option: valeur});
    */
   btn1.addEventListener("click",(e)=>{
        console.log(e.target);
    });

    const div4 =document.querySelector('.div4');
    const gp = div4.querySelector('.grandParent');
    const pa = div4.querySelector('.parent');
    const en= div4.querySelector('.enfant');

    /*
        Si plusieurs evenement sont declenchés par une meme action ( par exemple un clique),
        alors l'ordre sera defini, du parent le plus proche au plus eloigné.

        JS fonctionne en deux phases, une phase de "capture"ou il verifie les evenement a declencher, allant des parents vers les enfants et une phase de "bulle" qui remonte en activant les evenements.
        */
    div4.addEventListener("click",()=>console.log("div4"),{capture: true});
    gp.addEventListener("click",()=>console.log("gp"));
    pa.addEventListener("click",(e)=>{
        e.stopPropagation();
        console.log("pa");
    });
    en.addEventListener("click",()=>console.log("en"));
    /*
        l'option "{capture: true}" permet de declencher un evenement lors de la phase de capture, donc avant ceux en phase de bulle.

        Ajouter un"event.stopPropagation()" dans une fonction, permet d'empecher l'execution des evenements qui devraient etre activé par la suite.
        */
    const menu5 = document.querySelector('.menu5 a');
    menu5.addEventListener("click",e=>e.preventDefault());

    /*
        "even.preventDefault()" permet d'annuler l'execution de l'evenement.
                     un clique sur un lien ne redirigera pas .
                     Une soumission d'un formulaire ne repondra pas...
    */

                     /*
    Exercice 1 :

    Faire que lors de la selection d'une couleur dans la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
*/

const div2 = document.querySelector('.div2');
const btn2 = div2.querySelector('button');
const colorInput = div2.querySelector('input[type="color"]');

colorInput.addEventListener('input', () => {
  btn2.style.color = colorInput.value;
});

btn2.addEventListener('click', () => {
  div2.style.backgroundColor = colorInput.value;
});

/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître la modale
    Cette modale doit contenir un élément permettant de la faire disparaître.
*/

const div3 = document.querySelector('.div3');
console.log(div3);
const btn3 = div3.querySelector('button');
console.log(btn3);
const modal = document.querySelector('.hidden');
console.log(modal);
const btnclose = modal.querySelector('button:nth-last-child(1)'/*selection prochain enfant*/);
console.log(btnclose);
btn3.addEventListener('click', () => {
  modal.classList.toggle('hidden');


});
btnclose. addEventListener('click', () => {
  modal.classList.toggle('hidden');
})
// const div3 = document.querySelector('.div3');
// const input3 = div3.querySelector('input');
// const bouton2 = div3.querySelector('button');
// const bouton3= div3.querySelector('.hidden button:nth-child(2)');
// bouton2.addEventListener('click', () => {
//     modal1.style.display= 'grid';
// })
// bouton3.addEventListener('click', () => {
//     modal1.style.display= '';   
// })








// const boutonF = document.createElement('button');
// boutonF.textContent = 'Fermer';
// boutonF.addEventListener('click', () => {
//   modal.classList.add('hidden');
// });
// modal.appendChild(boutonF);

/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/
const nav = document.querySelector('nav');
const liElements = nav.querySelectorAll('li');

liElements.forEach(li => {
  li.addEventListener('click', () => {
    if (li.style.fontSize === '') {
      li.style.fontSize = '2em';
    } else {
      li.style.fontSize = '';
    }
  });
});

/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/

const span = document.querySelector('span');
const footer = document.querySelector('footer');

footer.addEventListener('mouseenter', () => {
  span.style.position = 'absolute';
  })

  document.addEventListener('mousemove', (e) => {
    span.style.left = `${e.pageX}px`;
    span.style.top = `${e.pageY}px`;
  });

  document.addEventListener('click', () => {
    span.style.position = '';
    console.log("coucou");
  })



