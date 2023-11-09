"use strict";

const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector('main button');
const progresst = document.querySelector('.progress');

/*
    certains objets sont créé a partir de classe.
    Nous rentrerons dans les details dans le cours sur la POO.

    Mais pour creer ces objets, nous devont faire preceder leurs noms du mot clefs.

    cela va creer une nouvelle instance de l'objet.
    c'est le cas de l'objet "date".
    qui contiendra l'heure et la date du moment de sa creation.
*/
const date = new Date();
console.log(date);
//cet objet contient tout un tas de methodes pour recuperer les differentes informations sur la date et l'heure.
copyright.textContent = date.getFullYear();

// .toLocaleTimeString() nous rend l'heure, les minutes et les secondes sous forme de chaine de caracteres(String)
mainTime.textContent = date.toLocaleTimeString();

function timer ()
{
    const dateTimer = new Date();
    mainTime.textContent = dateTimer.toLocaleTimeString();
    
}
/*
    setInterval permet de relancer une fonction a un rythme regulier.
    Il prend la fonction a relancer en premier parametre.
    et le temps entre chaque appel en second parametre (en millisecondes).

    La fonction setInterval retournera un id que l'on pourra optionnellement reutiliser ailleurs.
*/
let idInterval = setInterval(timer, 1000);
console.log(idInterval);

// la fonction clearInterval() permet de supprimer un interval.Elle prendra en parametre, l'id de l'interval à supprimer.
mainBtn.addEventListener('click', ()=>clearInterval(idInterval));

/*
    setTimeout fonctionne comme setInterval, prend les meme parametres,
    retourne elle aussi un identifiant qui peut etre utilisé pour l'arreté avec cleartimeout.

    la seule difference, qu'au lieu de relancer la fonction a rythme regulier, elle ne la relancera qu'une fois, apres avoir attendu le temps donné en parametre.
*/
let idtimeout = setTimeout(()=>console.log("coucou en retard!"), 3000);

clearTimeout(idtimeout);

let w = 0;

function load()
{
   console.log(w);
   if(w===100) return;
   w++;
   progresst.style.width = w + "%";
   setTimeout(load, 100);
}
load();

// exercice horloge.
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hoursContainer = document.querySelector('.hours-container');
    const minutesContainer = document.querySelector('.minutes-container');
    const secondsContainer = document.querySelector('.seconds-container');
  
    const hoursAngle = (hours % 12) * 30;
    const minutesAngle = minutes * 6;
    const secondsAngle = seconds * 6;
  
    hoursContainer.style.transform = `rotateZ(${hoursAngle}deg)`;
    minutesContainer.style.transform = `rotateZ(${minutesAngle}deg)`;
    secondsContainer.style.transform = `rotateZ(${secondsAngle}deg)`;
  }
  
  // Appel initial de la fonction pour initialiser l'horloge
  updateClock();
  
  // Appel périodique de la fonction pour mettre à jour l'horloge en temps réel
  setInterval(updateClock, 1000);









