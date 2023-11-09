"use strict";

import H from "./Human.js";
// ? ---------- Class ----------------
const humain = new H ("Eric", "Dupont", 45);
console.log(humain);

// ? ---------- Static ----------------
// Je peux appeler ma proprieté "static" sur ma classe, mais pas sur l'objet.
console.log(humain.categorie, H.categorie);
// exemple:
console.log(Date.now());
/* const n = new Date ();
console.log(n.now); */
H.description();
// humain.description();
// ? ---------- Private ----------------
// je peux pas acceder a mes proprietés privées:
console.log(humain.vivant);
// console.log(humain.#name);

humain.setPrenom = "Eric";
// humain.#setAge = 46;

humain.salutation();
humain.anniversaire();

// ? ---------- Heritage ----------------
import D from "./Dev.js";
import init from "../../12-module/exercice/slider.js";

const dev = new D ("Fred", "Fontaine", 18, ["HTML", "CSS", "JS"]);

dev.salutation();
dev.anniversaire();



