"use strict";
import H from "./Human.js";

/*
    une des capacités les plus importantes de la POO, est nommé "heritage".

    cela permet de creer des classes qui ont les meme proprietés et methodes qu'une autre classe.

    par exemple, ici je vais creer une classe " DEV" pour creer un nouveau developpeur. et aux dernieres nouvelles, un developpeur reste un humain.

    j'aimerai donc qu'il ai toute les proprieté et methode d'un humain.

    pour lui faire heriter de tout cela, je vais faire suivre son nom du mot clef "extends" puis de la classe a heriter.
    */
   export default class Dev extends H
   {
    /**
   * creer un nouveau developpeur
   * @param {string} prenom Prenom de l'humain
   * @param {string} nom Nom de l'humain
   * @param {number|string} age Age de l'humain
   * @param {string|Array} tech Technologies connues
   */
       constructor(prenom, nom, age, tech)
       {
           /* en js, a partir du moment ou l'on souhaite changer le constructeur d'une classe qui a herité.
           il est important  d'appeler le constucteur du parent.
           pour cela on utilisera la methode super().

           on devra alors passer les arguments attendu par le parent, a la methode "super()".
           */
           super(prenom, nom, age);
           this.setTechniques = tech;
           /*
           lors d'un heritage, ce n'est pas toute les methodes et proprieté qui sont transmises. puisque ce qui se trouve en "privé".
           n'est pas transmit
           */
       }

       set setTechniques(t)
       {
           if(Array.isArray(t))
           {
               this.tech = t;
           }
           else
           {
               this.tech = [t];
           }
       }

       /*
       il est possible de reecrire une methode herité d'un parent.

       pour cela il suffit de la redeclaré.
       */

       salutation()
       {
        console.log(`Bonjour, je suis ${this.getFullName} et j'ai ${this.getAge} et je maitrise ${this.tech.join(", ")}`);
       }

       
   }