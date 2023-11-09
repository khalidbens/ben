'use strict';

const div = document.querySelector('.anime');

document.querySelector(".b1").addEventListener("click", animation1);
document.querySelector(".b2").addEventListener("click", animation2);
document.querySelector(".b3").addEventListener("click", animation3);
document.querySelector(".b4").addEventListener("click", animation4);
document.querySelector(".b5").addEventListener("click", animation5);


function animation1() {
    /*
    La méthode anmate de JS prend deux arguments :
    - Le premier est une liste de keyframes qui devront être effectuées
    - Le second est un objet contenant les options de l'animation.
  
    La liste des keyframes peut être au choix :
      Un tableau d'objet
      Un objet contenant des tableaux
  
    Pour un tableau d'objets :
    */
    const keyframes = [
        {
            left: 0,
            top: 0,
        },
        {
            left: "80%",
            // top: "-200px",
        },
        {
            left: "20%",
            // top: "500px",
        },
    ];

    const options = {
        duration: 2000,
        iterations: 3,
        fill: "forwards",
        direction: "alternate"
    };
    div.animate(keyframes, options)
}

function animation2() {
    //  version objet contenant des tableaux
    const keyframes = {
        backgroundColor: ["blue", "red", "green"],
        opacity: [1, 0, .5]
    };
    div.animate(keyframes, {
        duration: 2000,
        direction: "alternate",
        iterations: 2
    })
}

function animation3() {
    /*
    On peut sauvegarder notre objet "animate" dans une variable afin d'avoir acès à de nouvelles méthodes.
    Par exemple je pourrais ajouter un évènement sur mon animation.
    */
    const anime = div.animate({
        transform: ["skew(0deg, 0deg)", "skew(360deg, 180deg)", "skew(0deg, 360deg)"]
    }, {
        duration: 1500,
        iterations: 1
    });
    anime.addEventListener("finish", () => {
        document.querySelector(".b4").style.opacity = 1;
    })
}


let a4 = false;
function animation4() {
    if (a4) {
        // annnule l'animation pour retourner a l'etat de base.
        a4.cancel();
        a4 = false;
    }
    else {
        a4 = div.animate({
            borderRadius: ["0", "50%", "5px", "25%"]
        }, {
            duration: 2500,
            fill: "forwards"
        });
    }

}
/*
la methode animate, n'est qu'un raccourci pour l'utilisation des objets suivants:
    - keyframeEffect qui prend un objet HTML, puis les keyframes, pui sles options.
    animation qui prend l'objet "keyframeEffect" puis la timeline concerné.
*/
const keyframes = new KeyframeEffect(div, [
    { transform: "translate(0, 0)" },
    { transform: "translate(100%, 50%)" }
], {
    duration: 2000,
    fill: "forwards"

});

const anime5 = new Animation(keyframes, document.timeline);
async function animation5() {
    const b5 = document.querySelector('.b5');
    console.log(anime5.playState);
    switch (anime5.playState) {
        case "idle":
            anime5.play();
            b5.textContent = "pause";
            //   ".finished" est une promesse qui indique que l'animation est finie.
            console.log(anime5.finished);
            await anime5.finished;
            b5.textContent = "reverse";
            break;
        case "running":
            anime5.pause();
            b5.textContent = "Continue";
            break;
        case "paused":
            anime5.play();
            b5.textContent = "pause";
            break;
        case "finished":
            anime5.reverse();
            await anime5.finished;
            b5.textContent = "Start";
            break;

    }
}