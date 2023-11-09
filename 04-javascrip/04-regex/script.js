"use strict"

/*
    Les regex ou expressiions regulieres,
    permettent la recherche dans un string de caracteres.

    Une regex commence et se termine par "/"( ou flag, voir plus bas dans le cours).
*/

const r1 = /ou/;
const r2 = /[ou]/;
/*
    En javascript il existe plusieurs fonctions qui peuvent utiliser les regex,
    La premiere que l'on va voir, est "regex.test(string)". qui retourne un boolean selon si la regex a été retrouvé dans le string.

    r1 recherche la presence de "ou" dans le string
*/
console.log(r1,r1.test("bonjour"), r1.test("salut"));
// r2 recherche la presence de "o" ou "u" dans le string
console.log(r2,r2.test("bonjour"), r2.test("salut"));

const r3 = /^ou/;
// r3 recherche la presence de mot qui commence par "ou" dans le string 
console.log(r3, r3.test("bonjour"), r3.test("outre"));

const r4 = /ou$/;
// r4 recherche la presence de "ou" mot qui termine par "ou" dans le string
console.log(r4, r4.test("bonjour"), r4.test("mou"));

const r5 = /ou|oi/;
// r5 recherche la presence de "ou" ou "oi" dans le string
console.log(r5, r5.test("bonjour"), r5.test("outre"));

const r6 = /[a-z]/;
// r6 recherche la presence de caractere minuscule dans le string de a a z
console.log(r6, r6.test("bonjour"), r6.test("0987654321"));

const r7 = /[^a-z]/;
// r7 recherche la non presence de caractere minuscule dans le string de a a z( Une lettre majuscule dans le mot suffit a retourner true)
console.log(r7, r7.test("bonjour"), r7.test("0987654321"));

const r8 = /(ou)?/;
// r8 recherche la presence de "ou" ou pas dans le string.
console.log(r8, r8.test("bonjour"), r8.test("pizza"));

const r9 = /(ou)+/;
// r9 recherche la presence de "ou" plusieur fois dans le string.
console.log(r9, r9.test("bonjour"), r9.test("pizza"));

const r10 = /(ou)*/;
// r10 cherche la presence de "ou" autant de fois qu'on le veut ou pas du tout.
console.log(r10, r10.test("bonjour"), r10.test("pizza"));

const r11 = /(cou){2}/;
// r11 recherche la presence de "cou" deux fois d'affilé dans le string
console.log(r11, r11.test("coup"), r11.test("coucou"));

const r12 = /^(cou){2,4}$/;
// r12 recherche un string qui commence et termine par "cou" apparaissant entre 2 et 4 fois
console.log(r12, r12.test("coucoucou"), r12.test("coucoucoucoucou"));

const r13 = /^(cou){2,}$/;
// r13 recherche un string qui commence et termine par "cou" apparaissant entre 2 et autant de fois qu'in le veut
console.log(r13, r13.test("coucoucou"), r13.test("coucoucoucou"));

const r14 = /^/;
// r14 recherche la presence "^" dans le string . ( le caractere suivant "/" sera echapé, il prendra son sens premier pour la regex)
console.log(r14, r14.test("^^"),r14.test("bonjour"));

const r15= /\s/;
// r15 recherche un espace dans le string. ( un \ devant un caractere sans signification, peut lui en donnr un )
console.log(r15, r15.test("Hello World"), r15.test("Bonjour"));

const r16 = /\d/;
// r16 recherche un chiffre dans le string (equivalent a [0-9])
console.log(r16, r16.test("Bonjour 8 fois"), r16.test("Bonjour a tous"));

const r17 = /(ou|oi).*\1/;
// Il  recherche la presence de "ou" ou "oi" suivi de n'importe quel caracteres, suivi du meme resultat que la premiere parenthse
console.log(r17, r17.test("bonjour à tous"), r17.test("Bonsoir à tous"));

// ?------------------Flags----------------

/*
     Les flags sont des caracteres qui se pacent apres la fin de la regex.
     Ils viennent lui donner de nouvelles capacités.

     On va les tester avec la methode "string.match(regex)". qui retourne un tableau contenant les resultats de la regex.
*/
const phrase = "j'aime la pizza, les cannelés et les okonomoyaki";

console.log(phrase.match(/pizza/));
// Par defaut , la regex s'arrete au premier resultat trouvé.
console.log(phrase.match(/les/));
// le flag "g" indiquera a la regex de rechercher de facon global et donc de ne pas s'arreter au premier resulat.
console.log(phrase.match(/les/g));

const phrase2 = "Vive les regex et vive javascript !";
// par defaut , une regex est sensible a la casse.
console.log(phrase2.match(/vive/g));
// avec le flag "i", la regex va ignoré la casse.
console.log(phrase2.match(/vive/gi));

const phrase3 = `1er : Maurice
2eme : paul
3eme : Charlie`;
// Le string commence par un chiffre, il nous est bien retourné, mais les sauts a la ligne ne sont pas de nouveaux strings
console.log(phrase3.match(/^\d/g));
// avec le flag "m", chaque saut a la ligne est consideré comme une nouvelle phrase traiter
console.log(phrase3.match(/^\d/gm));
// cela fonctionne aussi avec les fin de lignes
console.log(phrase3.match(/(\w+)$/gm));
// \w tient pour "word" (attention, il ne prend pas en compte les accents)

// chaque saut a la ligne mettant fin a la phrase, il ne trouve rien ici
console.log(phrase3.match(/1.+3/gm));
// le flag "s" permet de prendre en compte les "saut a la ligne"dans la recherche
console.log(phrase3.match(/1.+3/gms));

// ?------------------autre fonctions et bonus----------------

// Les lettres accentués sont des caracteres a part de l'alphabet:
console.log(/^[a-z]+$/.test("Paul"), /^[a-z]+$/.test("élodie"));
// Si je veux prendre compte les lettres accentués ... pas trop le choix:
console.log(/^[a-zàèéù]+$/i.test("élodie"));

/*
    Il existe d'autres fonctions qui acceptent les regex comme :
       un string.replace(string|regex, string);
    Qui viendra remplacer dans le premier string, ce qui est trouvé par la regex(ou le string) par le dernier string.
*/

console.log(phrase.replace("pizza", "salade"));
console.log(phrase.replace(/pizza/, "salade"));
// L'avantage de la regex, c'est qu'elle pourra etre plus versatile qu'un string.
console.log(phrase.replace(/pizza|okonomiyaki|cannelés/gi, "salade"));
console.log(phrase2.replace(/regex|javascript/gi,"******"));
// "$&" permet de ne pas pas remplacer mais seulement d'ajouter.
console.log(phrase2.replace(/javascript/gi, "CSS et $& et PHP"));

/*
    Dans la table des caractere "unicode" entre les majuscules et les minuscules se trouvent des caracteres speciaux ce test retourne donctrue
*/

console.log(/[A-z]/.test("_"));
// On ecrira donc plus habituellement:
console.log(/[A-Za-z]/.test("_"));












