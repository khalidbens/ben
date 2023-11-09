"use strict";

/*
    La balise "Canvas" ne sert a rien sans JS.
    Mais avec, elle peut etre utilisée pour faire des animations, des jeux, des outils interactifs ou autre.
*/

const canvas = document.querySelector('canvas');

/*
     pour interragir avec le canvas nous avons besoin de connaitre son "context".
     on va donc utilisé la methode "getContext" de notre canvas. en lui donnant en argument, un strung indiquant le context voulu.

     ici on lui donnera "2d" pour traivailler en 2 dimansions.
     Mais en 3D est utilisable grace a "webgl".
     la 3D etant plus compliqué a gerer, beaucoup utilisent une bibliothèque gerant les calculs les plus complexe comme "three.js".
*/
const ctx = canvas.getContext('2d');
// Optionnellement, je vais faire que mon canvas s'adapte a la taille de mon ecran:

function resize ()
{
    // sauvegarde la partie de l'image indiqué:
    const snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);
    const size = document.body.getBoundingClientRect();

    canvas.width = size.width;
    canvas.height = size.height;
    // replace l'image donné a la position indiqué
    ctx.putImageData(snapshot, 0, 0);
}
resize();
window.addEventListener('resize', resize);

//----------------utilisation du Canvas----------------

/*
la plupart des lethodes du canvas, vont se lancer sur son contexte.

par exemple ici on va commencer avec "fillRect" et strokeRect".
qui prendront une position, une largeur et une hauteur.
position x, y, largeur, hauteur.

On retrouvera les thermes "stroke" et "fill"pour plusieur methodes et proprieté, ils representent respectivement les "lignes" et les "remplissages".
*/

ctx.fillRect(50,50,150,25);
ctx.strokeRect(100,150,25,150);

/*
    "fillStyle" et "strokeStyle" permettent de changer la couleur de remplissage et de trait.
    elles prennent en parametre une string representant la couleur. (par exemple "red" ou "#ff0000").
*/

ctx.fillStyle = "rgba(156,78,94,0.5)";
ctx.strokeStyle = "blue";
ctx.fillRect(126, 234, 90,287);
ctx.strokeRect(126,234,90,287);

/*
    Pour des dessins plus complexe, nous allons dessiner ligne par ligne.
    on va commencer par lui indiquer que le "chemin a dessiner "commence" avec ".beginPath".
    puis deplacer notre "curseur" la ou on doit commencer ".moveTo(x,y").
    ensuite lui indiquer jusqu'ou la ligne doit se rendre ".lineTo(x,y)".
    enfin on lui demande de dessiner la ligne avec ".stroke".

*/

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,200);
ctx.stroke();

// pour une forme plus complexe, on peut enchainer les ".lineTo()"

ctx.beginPath();
ctx.moveTo(345,100);
ctx.lineTo(345,300);
ctx.lineTo(495,250);
ctx.lineTo(445,100);
// .closePath() permet de fermer la ligne il dessinera une derniere ligne qui est la meme que la premiere.
ctx.closePath();
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
// permet de changer la taille du trait
ctx.lineWidth = 8;
ctx.stroke();
// permet de remplir la forme du dessin
ctx.fill();

//?-----------------Les cercles-----------------

/*
    .arc(x,y,radius, startAngle, endAngle, anticlockwise) permet de dessier des arcs de cercle et des cercles.
    il y a 6 parametres : x,y,rayon, angle de depart, angle d'arrivee, et si le cercle est a gauche ou a droite.
    pour un cercle complet, on fera partir l'angle a 0, et on donnera a l'angle de fin math.PI * 2.
*/
ctx.beginPath();
ctx.arc(459,588,42,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.arc(259,288,42,0,2.5,true);
ctx.stroke();
ctx.fill();
// Efacce la position indiqué avec x,y, w,h
ctx.clearRect(50,60,170,180);

// ?-----------------Animons notre Canvas           -----------------
let x = 180, y = 100, vv = 6, vh = 5, r = 80;
// cercle();
function cercle()
{
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();

    if(x+r >canvas.width||x-r <0)
    vh =-vh;
if(y+r >canvas.height||y-r <0)
    vv =-vv;
    

    x+=vh;
    y+=vv;
    // console.log(x,y);

    requestAnimationFrame(cercle);
}

// ?-----------------Integrer des images-----------------
// Je cree un nouvel objet "Image".
const image = new Image();
// je lui indique le fichier a charger.
image.src = "./assets/images/monster.jpg";
image.onload = () =>
{
    ctx.drawImage(image,50, 250, 100, 100);
}

// ?-----------------Texte -----------------
ctx.lineWidth = 1;
// la proprieté "font" permet de changer la police d'un texte en pixel.
ctx.font = "82px serif";
ctx.strokeText("coucou",500 ,500);
ctx.fillText("coucou",500 ,300);

ctx.textAlign = "center";
ctx.fillStyle = "red";
// par defaut, la position x et y du texte, est son coin en haut a gauche.
ctx.textAlign = "center";
ctx.fillStyle = "purple";
// avec le textAlign, on peut changer la position du texte.
ctx.fillText("coucou",500 ,100,50);

// ?-----------------Forme des traits-----------------
ctx.lineWidth = 16;
ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(700,40);
ctx.lineTo(700,400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "square";
ctx.moveTo(750,40);
ctx.lineTo(750,400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "butt";
ctx.moveTo(800,40);
ctx.lineTo(800,400);
ctx.stroke();



