" use strict";

// ?------------------ While ----------------

/*
    while ( tant que) va verifier que ce qui se trouve entre parantheses est "true" ou "false".
    et répéter l'action entre accolade " tant que " cest "true ".
    | Attention, de toujours avoir un moyen de sortir de votre boucle.
    le navigateur pourra facilement faire des centaines ou des milliers de boucles , mais si il en fait a linfinie , il plantera
*/

let a = true;
while (a) {
    console.log("coucou");
    // si mon nombre aleatoire est plus grand que 0.5, alors la boucle sarretera
    a = Math.random() < 0.5;
}
let b= 0;
while (true)
{

    b++;
    // continue met fin a l'iteration actuelle et passe a la suivante.
    if(b<10) continue;
    // break met fin a la boucle
    if(b === 20) break;
    console.log("b vaut", b);
    
}
// "do while" va effectuer son action une premiere fois, avant de verifier si il doit recommencer.
do 
{
    console.log("do while :b vaut", b);
}while(b<5)

// ?------------------ For ----------------

/*
    for va prendre 3 instruction entre ses parentheses.
    -la premiere est une declaration de variable lancé avant le debut de la boucle.
    -la seconde est une condition qui sera verifié avant chaque itération.
    -la troisieme est une instruction qui sera effectuer pour chaque itération.
*/
for(let i=0; i<10; i++)
{
    console.log('i vaut, $[i]');
}

let arr = ["pizza", "poulet", "salade"];
let person = {
    name: "Pierre",
    age: 55,
    yeux: "vert",
}
/* "for in" va creer une iteration pour chaque valeur dans le tableau ou l'objet suivant le mot "in".
a chaque iteration , la variable definie entre parenthese se verra attribue une nouvelle valeur.

Pour un tableau, cela correspondra a chaque index du tableau.
pour objet, cela correspondra a chaque propriété de l'objet.
*/
for(let food in arr)
{
    console.log(`food vaut ${food}-> ${arr[food]}`);
}
for( let carac in person)
{
    console.log(`carac vaut ${carac}-> ${person[carac]}`);
}
/*
    "for of" fonctionnera de la meme facon que "for in".
    si ce n'est qu'il recupere directement la valeur et non l'index.

    Il ne fonctionne pas avec les objets.
*/
for(let f of arr)
{
    console.log(`f vaut ${f}`);
}
// ceci retourne une erreur
// for(let c of person){}

// ?------------------ Boucle de tableau ----------------
/*
    Il existe tout un tas de methode ( fonctions) specifique aux tableaux qui permettent de boucler dessus.
    Ici on va voir forEach et map, mais il en existe d'autres comme "reduce" par exemple:
        tableau.forEach(fonction);
        tableau.map(fonction);

    Il existe plusieurs facons de donner une fonction en parametre d'une autre. Mais on verra cela dans le cours des fonctions.

    forEach va produire une boucle pour chaque element du tableau.
    a chaque bouvle il appelera la fonction donné en parametre.
    et placera lelement du tableau en parametre de fonction.
    si on donne un second parametre a la fonction , il pourra aussi recuperer l'index
*/
arr.forEach((f) =>console.log(`forEach: f vaut ${f}`));
arr.forEach((f, i) =>console.log(`forEach: f vaut ${f} et i vaut ${i}`));

/*
    "map" va paramettre de creer un nouveau tableau a partir d'un ancien.
    de meme que pour forEach, il va boucle sur chaque element du tableau.
    Mais il se servira des valeurs que l'on aura modifié ( ou non), pour creer un nouveau tableau.
*/
let newArr = arr.map((f) => f .toUpperCase());
console.log(arr, newArr);
