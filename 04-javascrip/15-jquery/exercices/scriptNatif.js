"use strict";
let idInterval;

    const oddSlides = document.querySelectorAll('#slider ul li:nth-child(odd)');
    oddSlides.forEach(function (slide) {
        slide.style.background = "#aaa";
    });

    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            idInterval = setInterval(moveRight, 1500);
        } else {
            clearInterval(idInterval);
        }
    });

    const slideCount = document.querySelectorAll('#slider ul li').length;
    const slideWidth = document.querySelector('#slider ul li').offsetWidth;
    const slideHeight = document.querySelector('#slider ul li').offsetHeight;
    const sliderUlWidth = slideCount * slideWidth;

    const slider = document.getElementById('slider');
    slider.style.width = slideWidth + 'px';
    slider.style.height = slideHeight + 'px';

    const sliderUl = document.querySelector('#slider ul');
    sliderUl.style.width = sliderUlWidth + 'px';
    sliderUl.style.marginLeft = -slideWidth + 'px';

   // Sélectionne le dernier élément de la liste du slider
const lastSlide = document.querySelector('#slider ul li:last-child');
// Insère une copie du dernier élément en tant que premier élément de la liste
sliderUl.insertBefore(lastSlide, sliderUl.firstChild);
// Supprime l'élément original du dernier emplacement de la liste
// lastSlide.remove();

    function moveLeft() {
        // Sélectionne le dernier élément de la liste des slides
        const lastSlide = document.querySelector('#slider ul li:last-child');
    
        // Insère une copie du dernier élément au début de la liste des slides
        sliderUl.insertBefore(lastSlide.cloneNode(true), sliderUl.firstChild);
    
        // Supprime le dernier élément de la liste des slides
        lastSlide.remove();
    
        // Réinitialise la position horizontale de la liste des slides
        sliderUl.style.left = '';
    }
    
    function moveRight() {
        const firstSlide = document.querySelector('#slider ul li:first-child');
        sliderUl.appendChild(firstSlide);
        sliderUl.style.left = '';
    }
  
    document.querySelector('a.control_prev').addEventListener('click', moveLeft);
    document.querySelector('a.control_next').addEventListener('click', moveRight);

  

