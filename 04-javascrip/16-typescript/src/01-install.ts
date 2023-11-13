"use strict";

/*
    typescript est une surcouche js;
    c'est a dire que tout ce qui est faisable en js, est possible en typescript.

    mais au contraire d'une simple bibliotheque, ici nous avons une nouvelle extension ".ts"

    par ce fai, ils sont ilisible par le navigateur, il faudra compiler notre code avant de le donner a lire celui ci.

    -----------avantage-------------
    TS apporte le typage, cela nous force a coder avec rigueur en indiquant le type de chaque variable et argument.
    il peut aussi nous permettre d'adapter un code moderne a de vieux navigateur.
    Typescript n'a pas besoind'etre chargé par le site, donc notre projet n'est pas allourdi.

    -----------desavantage-------------
    On est force de compiler notre code.
    cela rajoute un outil supplementaire au projet.
    le code est un peu plus complexe.

    ----------installation-------------
    l'installation se fait via npm avec la commande suivante:
    *npm install typescript --save-

    une fois installé, vous pouvez lancer la compilation d'un fichier avec :
    *(npx) tsc pathTofile.ts --outDir folderName

    pour eviter de retaper tout cela, on peut crer a la racine de notre projet un fichier *tsconfig.json

    une fois le fichier rempli, on n'aura plus qu'a taper :
    * (npx) tsc 

    et comme avec scss, il est possible de demander a typescript de surveiller nos fichier. cela afin de les compiler automatiquement a chaque sauvegarde.
    *(npx) tsc --watch
*/

const btn = document.querySelector("#compte") as HTMLButtonElement;
let i = 0;
btn.addEventListener("pointerdown", () => {
    i++;
    // typescript provoque une erreur, car textcontent attend un string, et on lui donne un nombre.
    // btn.textContent = i;
    // On devra alors transformer notre nombre en string:
    btn.textContent = i.toString();

})

/*
par default typecript compile pour du js un peu agé, faisont disparaitre "let", "const" et "fonctions flechées".
On peut ajouter a notre fichier de configuration, l'option suivante:
* "target": "es2022" (On peut aller de es3 par default, ESNEXT qui compilera sur la derniere version disponible)
pour indiquer quel version de EcmaScript utiliser pour la compilation.

Typescript compilera le code qu'il y ai une erreur ou non.
on peut lui interdire avec l'option:
* "noEmitOnError": true

Si on souhaite que notre code puisse gerer n'importe quelle erreur, on peut demander aTS d'etre bien plus strict sur la detection:
* "strict": true

*/
