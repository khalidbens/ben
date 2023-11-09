"use strict";
/*
    une classe est un plan de construction pour un objet.

    certaines classes sont deja integré par defaut a JS:
        "date," formData"...

        Mais on peut aussi creer les notre.

            pour cela on utilisera le mot clef "class" suivi du nom de la classe, puis d'accolade.
            *class MasuperClass{}

            quelque convention de developpement:
                -une classe par fichier.
                -le nom de la classe qui commence par une majuscule.
                -le nom du fichier est le meme que celui de la classe .

                losqu'on voudra creer un objet a partir d'une classe, 
                (on parle d'instancier un objet)

                on appellera le nom de la classe precedé du mot clef "new".
    * const monSuperObjet = new MasuperClass();


*/

export default class human 
{
    /*
        En JS il existe 3 types de proprietés pour un objet:
        - la proprieté "public" qui est une proprieté classique, comme on a pu en avoir jusqu'ici.
        -La proprieté "privée" qui est une proprieté accessible uniquement depuis sa classe en elle meme.
        -La proprieté "static" elle est procedé du mot clef "static",
        Elle n'est accessible que sur la classe, et non sur l'objet instancié.

        ( les methodes aussi peuvent etre static ou privee)
    */
   vivant = true;
   #name = {};
   #age;
   static categorie = "Mammifere";
   /*
   En POO, il existe certaines methodes aux capacités predefinis.
   en JS on retrouvera la plus commune,
   c'est le mot clef "constructor".
   c'est une methode que l'on ne peut pas appeler nous meme,
   elle est automatiquement appelee lors de l'instanciation d'un objet.

   lors de la creation de l'objet ( avec le mot clef "new"),
   Si des parametres sont donnes, ils seront automatiquement transmit au constructeur:
   */
  /**
   * 
   * @param {string} prenom Prenom de l'humain
   * @param {string} nom Nom de l'humain
   * @param {number|string} age Age de l'humain
   */
  constructor(prenom, nom, age)
  {
    console.log(prenom, nom, age);
    /*
        les proprietés prives doit etre declarees en a l'avance.
        mais les publiques peuvent etre cree a la volee:
    */
    this.createdAt = new Date();
    // this.#test = true;
    // this.#age = age;

    // jutilise mes setters:
    this.setPrenom = prenom;
    this.setNom = nom;
    this.#setAge = age;
  }
  /*
  on peut toujours creer des getters et des setters:
  */
 set setPrenom(p)
 {
     this.#name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
 }
 set setNom(n)
 {
     this.#name.nom = n.toUpperCase();
 }
 set #setAge(a)
 {
     this.#age = parseInt(a);
 }
 get getFullName()
 {
     return this.#name.prenom + " " + this.#name.nom;
 }
 get getAge()
 {
     return this.#age+ " ans";
 }
//  j'ajoute quelques methodes:
    static description()
    {
        console.log(`Un humain est un ${this.categorie}, a generalement, une tete, un buste deux bras et deux jambes.`);
    }
    salutation()
    {
        console.log(`Bonjour, je suis ${this.getFullName} et j'ai ${this.getAge}`);
    }
    anniversaire()
    {
        this.#age++;
        this.#age = this.#age + 1;
        this.salutation();
    }
}