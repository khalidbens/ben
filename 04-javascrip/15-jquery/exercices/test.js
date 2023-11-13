
"use strict";

//?-------------  Déclaration des Imports  -----------------//


//?-------------  Déclaration des Variables  ---------------//

const
  slider = document.querySelector('#slider'),
  ul = slider.querySelector('ul'),
  li = ul.querySelectorAll('li'),
  lastChild = li[li.length - 1],
  prev = slider.querySelector('.control_prev'),
  next = slider.querySelector('.control_next'),
  firstChild = ul.querySelector('li:first-child'),
  slideCount = li.length,
  slideWidth = li[0].offsetWidth,
  slideHeight = li[0].offsetHeight,
  slideUlWidth = slideCount * slideWidth,
  oddLi = document.querySelectorAll('#slider ul li:nth-child(odd)'),
  checkbox = document.querySelector('#checkbox');
let
  idInterval;


//?-------------  Déclaration des Events  ------------------//

checkbox.addEventListener('change', e =>{
  if(e.target.checked)
    idInterval = setInterval(moveRight, 1500)
  else
    clearInterval(idInterval)
});
prev.addEventListener('click', moveLeft);
next.addEventListener('click', moveRight);


//!-------------  Instructions  ----------------------------//

oddLi.forEach(e => {
  e.style.background = "#aaa";
});
slider.style.width = slideWidth + 'px';
slider.style.height = slideHeight + 'px';
ul.insertBefore(lastChild, ul.firstChild);


//?-------------  Déclaration des Fonctions  ---------------//

// MES FONCTIONS

// function moveLeft() {
//   ul.animate([
//       { left: `${ul.offsetLeft + slideWidth}px` }
//     ], {
//       duration: 200,
//       fill: 'forwards'})

//   setTimeout(function() {
//     ul.appendChild(firstChild);
//     ul.style.left = '';
//   }, 200);
// };

// function moveRight() {
//   ul.animate([
//       { left: `${ul.offsetLeft - slideWidth}px` }
//     ], {
//       duration: 200,
//       fill: 'forwards'})

//   setTimeout(function() {
//     ul.appendChild(firstChild);
//     ul.style.left = '';
//   }, 200);
// };

// FONCTIONS DE KHALID :

function moveLeft() {
  const lastSlide = document.querySelector('#slider ul li:last-child');
  // Insère une copie du dernier élément au début de la liste des slides
  ul.insertBefore(lastSlide.cloneNode(true), ul.firstChild);
  // Supprime le dernier élément de la liste des slides
  lastSlide.remove();
  // Réinitialise la position horizontale de la liste des slides
  ul.style.left = '';
}

function moveRight() {
  const firstSlide = document.querySelector('#slider ul li:first-child');
  ul.appendChild(firstSlide);
  ul.style.left = '';
}





//todo----------  TODO  ------------------------------------//


//*-------------  Zone Test  -------------------------------//


//*-------------  Fin  -------------------------------------//
