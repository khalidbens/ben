import SuperBalise from "./superBalise.js";
import SuperDiv from "./superDiv.js";

/*
    les customs elements (element personnalisés) permettent de creer nos propres elements html.
    on va pouvoir creer de nouvelles balises avec leurs propre regle et capacité.

    il existe deux type de customs elements
    - les elements personnalisés autonomes qui heritent de "HTMLElement".
    -les elements personalises integre qui heritent d'un element html particulier (div, p, li...)

    pour les creer nous allons devoir definir une classe qui herite de lement voulu.
    puis hors de celle ci utiliser la methode:
        *customElement.define()

        cette methode prendra en premier argument un string qui sera le nom de votre balise personnalisééé

        ! important : les noms des customs elements doivent prendre un tiret "-".


        en seconde argument la classe que vous avez definie plus haut est optionnellement, cela pour les custom elements integres, elle prendra le nom de la classe dont elle herite.

        une fois la methode precedente appelee, pour utilisé nos balises il suffira de suivre une des facon suivante:

        *autonome: "<nom-balise></nom-balise>"
        *integré: "<baliseParent is="nom-balise"></baliseParent>"

        il est aussi possible d'ajouter des "cycles de vie" a nos elements HTML.
        les cycles de vie sont des methode predefinies qui se declenchent automatiquement a certains moment precis:
        * connectedCallback: appelé losque l'element est connecté au DOM.
        * disconnectedCallback: appelé lorsque l'element est deconnecté du DOM.
        * adoptedCallback: appelé lorsque l'objet est deplacé d'un dom parent vers un autre. ( avec iframe par exemple )
        * attributeChangedCallback: appelé lorsqu'un attribut est modifié‚
            ce dernier prendra 3 arguments:
                -le nom de l'attribut modifié
                -la valeur avant modification
                -la nouvelle valeur
        pour que cela fonctionne, on devra accompagner cela d'un "getter static" appelé:
        "observedAttributes" qui retournera un tableau contenant les attributs a observer

        */