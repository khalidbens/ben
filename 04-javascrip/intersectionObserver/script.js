"use strict";
const
    indicator = document.querySelector(".scroll-indicator"),
    main = document.querySelector("main"),
    options = {
        /* 
            l'option root permet de choisir à partir de quel élément HTML se fait l'observation.
            Par défaut c'est le scrolling du document qui et prit en compte.
        */
        // root: main
        /* 
            le rootMargin permet de changer à partir d'où se fait la detection.
            Une valeur positive, viendra détecter l'élément avant qu'il soit visible.
            Une valeur négative, viendra détecter l'élément alors qu'il est déjà présent.
        */
        // rootMargin: "-50px"
        /* 
            threshold prend une valeur entre 0 et 1.
            qui représente le pourcentage de l'élément observé qui doit être visible pour que l'observation se déclenche.
        */
        // threshold: 0.05
    };

/* 
    L'intersection Observer permet d'observer l'entré ou la sortie d'un élément HTML dans le viewport.

    On pourra s'en servir pour déclencher des animations à l'arrivé de l'élément dans le viewport,
    Ou comme dans l'exemple ci dessous, ajouter un écouteur d'évènement quand l'élément est présent, et le retirer quand il n'est plus présent.
    histoire d'alléger la page si c'est un évènement gourmant.

    L'intersection observer se présente comme une classe que l'on doit instancier avec en paramètre, une fonction callback et possiblement un objet contenant les options.
*/

const observer = new IntersectionObserver(setIndicator, options);
/* 
    L'observer a besoin qu'on lui indique quel élément HTML observer :
    "variableObserver.observe(ElementHTML);"
    Un observer peut observer autant d'élément que souhaité.
    Par exemple avec un querySelectorAll et une boucle.
*/
observer.observe(main);
/* 
    la fonction donné en callback sera lancé à chaque fois qu'un élément observé entre ou quitte le viewport.
    Elle va récupérer en argument, un tableau contenant une entré pour chaque élément observé entrant ou quittant le viewport
*/
function setIndicator (entries) 
{
    console.log(entries);
    /* 
        Au chargement de la page, la fonction est lancé une première fois. 
        Dans ce premier lancement, le tableau contient tous les éléments observés, indiquant si ils sont déjà visible ou non.
        Ici nous n'avons qu'un seul élément observé, pour éviter de travailler avec un objet à chaque fois, je vais créer une variable :
    */
    const entry = entries[0];
    /* 
        Si on regarde ce que contient cet objet "entry", on trouvera plusieurs informations utiles :
            target : l'élément qui a été observé
            isIntersecting : Un boolean indiquant si l'élément est visible ou non
            intersectingRatio : un chiffre entre 0 et 1 qui représente le pourcentage visible de l'élément au moment de l'observation.
            boundingClientRect : la position et la taille de l'élément observé.
            intersectionRect : la position et la taille VISIBLE de l'élément.
            rootBounds : La position et la taille de l'élément RACINE (par défaut le viewport)

        Ici on va lancer un évènement lorsque le main est visible,
        et retirer l'évènement lorsque le main n'est plus visible.
    */
    console.log(entry);
    if(entry.isIntersecting)
    {
        window.addEventListener("scroll", indicatorAnimation);
    }
    else
    {
        window.removeEventListener("scroll", indicatorAnimation);
    }
}
function indicatorAnimation()
{
    console.log("SCROOOOOOL!!!!");
    /* 
        scrollY représente le nombre de pixel qui ont été scrollé
        offsetTop représente la position entre le haut de la page et le haut de notre élément.
        Notre condition ici indique si le main a atteint le haut de la page.
    */
    if(window.scrollY > main.offsetTop)
    {
        // console.log("true");
        /* 
            'scrollHeight' représente la hauteur de l'élment incluant le padding vertical.
            'nombre.toFixed(n)' retourne un string correspondant au nombre le précédent avec "n" chiffre après la virgule.

            Notre calcul suivant indique un chiffre entre 0 et 1 indiquant à quel point on a scrollé.
        */
        const prc = ((window.scrollY - main.offsetTop)/main.scrollHeight).toFixed(2);
        console.log(prc);
        indicator.style.transform = `scaleX(${prc})`;
    }
    else
    {
        console.log("false");
        indicator.style.transform = `scaleX(0)`;
    }
}
/* 
    On peut arrêter l'observation d'un élément avec :
        variableObserver.unobserve(ElementHTML)
    ici on aurait :
        observer.unobserve(main);

    On peut arrêter toute observation avec :
        variableObserver.disconnect()

    Chaque observer étant lié à une fonction callback,
    Si on a plusieurs observation au fonctionnement totalement différent,
    Il vaut mieux faire un nouvel observer pour chacun.

    Avec un fonctionnement ressemblant, il existe aussi le "MutationObserver" qui détecte les changements dans le DOM.
*/


/*
    ---------------- EXO 1 --------------------
    1. Rendre tous les paragraphes du main, invisible.
    2. Ajouter Une observation sur chaque paragraphes.
    3. Lorsque l'élément est au moins à moitié dans le viewport, le rendre visible.
    4. Désactiver la détection de l'élément une fois l'action terminé.
    (Bonus). Animer l'apparition.
    ---------------- EXO 2 ----------------------
    1. Lorsque le dernier paragraphe est à 200px en dessous du viewport.
        Créer 10 paragraphes et les ajouter à la suite du main.
    2. Désactiver la détection du précédent dernier paragraphe.
    3. Ajouter l'animation de l'exercice 1 aux nouveaux paragraphes.
    4. Ajouter la détection du dernier paragraphe au nouveau dernier paragraphe.
 */

    // exercice 1

    
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
      const paragraphs = document.querySelectorAll("main p");
    
      // Rendre tous les paragraphes invisibles( pas sur du resultat mais mieux qu'un display:none)
      paragraphs.forEach(paragraph => {
        paragraph.style.opacity = 0;
      });
    
      // Fonction de callback pour l'Intersection Observer( fonction flechée tres efficace)
      const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Lorsque l'élément est au moins à moitié dans le viewport
            entry.target.style.opacity = 1;
            // Animer l'apparition !! avec un peu de galere DONC NE PAS OUBLIER
            entry.target.style.transition = "opacity 0.5s ease-in-out";
            // Désactiver la détection de l'élément une fois l'action terminée
            observer.unobserve(entry.target);
          }
        });
      };
    
      // Options pour l'Intersection Observer
      const options = {
        threshold: 0.5
      };
    
      // Créer un observateur
      const observer = new IntersectionObserver(handleIntersection, options);
    
      // Observer chaque paragraphe
      paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
      });
    });

    // fin exercice 1

    // exercice 2

    const lasP = document.querySelector("main p:last-child");
    const obsLastP = new IntersectionObserver(addMore,{rootMargin: "200px"});
    const m = document.querySelector("main");

    obsLastP.observe(lasP);

    function addMore(entries)
    {
        const en = entries[0];
        if(entries.isIntersecting)
        {
            let p;
            for(let i = 0; i < 10; i++)
            {
                p= document.createElement("p");
                p.textContent = "nouveau paragraphe";
                m.append(p);
                observer.observe(p);
            }
            obsLastP.unobserve(lasP);
        }
    }






