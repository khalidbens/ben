"use strict";

/* 
    Exercice 1 :
    Changer la taille de chaque paragraphe du main.
    chaque paragraphe doit être plus gros que le précédent.
*/
/* 
    Exercice 2 :
    Faite apparaître la modale via une transition depuis la gauche. 
*/
/* 
    Exercice 3 :
    Faite que la couleur de fond de la modale soit aléatoire à chaque rechargement de la page.
*/
// exercice 1
// const p1 = document.querySelector('step marche1');
// const p2 = document.querySelector('step marche2');
// const p3 = document.querySelector('step marche3');
// const p4 = document.querySelector('step marche4');
// const p5 = document.querySelector('step marche4');
// console.log(p1, p2, p3, p4, p5);

// const p1 = document.querySelector('.step.marche1');
// const p2 = document.querySelector('.step.marche2');
// const p3 = document.querySelector('.step.marche3');
// const p4 = document.querySelector('.step.marche4');
// const p5 = document.querySelector('.step.marche5');

// p1.style.fontSize = '16px';
// p2.style.fontSize = '18px';
// p3.style.fontSize = '20px';
// p4.style.fontSize = '22px';
// p5.style.fontSize = '24px';

// const paragraphs = document.querySelectorAll('main p');

// for (let i = 0; i < paragraphs.length; i++) {
//   const paragraph = paragraphs[i];
//   paragraph.style.fontSize = `${i + 1}em`;
}






// exercice 2
// let modal = document.querySelector("aside div");
// modal.style.transition = "transform 4s";
// modal.style.transform = "translateX(150% )";

// exercice 3

// // let modal = document.querySelector("aside div");
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// modal.style.backgroundColor = getRandomColor();
// document.body.appendChild(modal);

// correction prof 
/*
div.style.backgroundColor = rgb(${randNumber(255)}, ${randNumber(255)}, ${randNumber(255)});
    funtion randNumber(max) {
        return Math.floor(Math.random() * max);
    }
        
    

