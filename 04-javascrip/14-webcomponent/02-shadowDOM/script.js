"use strict";
/*

le shadowDOM permet de creer un DOM separé du reste du DOM principal.
ce DOM fantome obeit a ses propres regles, ignorant les scripts et styles appliqués au DOM parent.
de meme, les scripts et styles appliqués au DOM fantome, n'influront pas le DOM parent.

pour creer un " hote fantome" ( shadow host), il suffit d'appeler sur l'element HTML  voulu, la methode "attachShadow":
    *ElementHTML.attachShadow({mode: open: ""})
    le mode peut etre "open" ou "closed".

    le mode "open" permet de creer un DOM fantome et de le mettre en "visible" sur le DOM parent.
    */

    const op = document.querySelector('.open');
    const cl= document.querySelector('.close');

    const shadowpen = op.attachShadow({mode: 'open'});
    const shadowclose = cl.attachShadow({mode: 'closed'});

    // accessible:
    console.log(op.shadowRoot);
    // inaccessible:
    console.log(cl.shadowRoot);

    /*

        dans l'exemple suivant, chacun des 3 h1 ne sont affecté que par le style de leur DOM.

        pour l'exemple, j'utilise des feuilles de style interne, mais rien n'empeche d'utiliser des stylesheets externe.

        le selecteur CSS ":host" correspond au body ou au ":root" de notre shadowDOM.
        */

    const style1 = document.createElement('style');
    style1.textContent = /*css*/
    `
    :host{text-align: right;}
    h1{background-color: black}
    `;

    const h01 = document.createElement('h1');
    h01.textContent = "je vois des fantomes dans les ombres";
    shadowpen.append(style1, h01);

    const style2 = document.createElement('style');
    style2.textContent = /*css*/
    `
    :host{text-align: center;}
    h1{text-shadow: 5px 5px 5px red;}
    `;

    const h02 = document.createElement('h1');
    h02.textContent = "Mon ombre cache un fantome";
    shadowclose.append(style2, h02);

    /*
    si je tente de selectionner tous les h1 sauf celui du DOM principal sera selectionne.

    Pour selectionner un element du shadowDOM, il me faudra directement faire la recherche dans celui ci:

    */

    const hx = document.querySelectorAll('h1');
    console.log(hx, hx.length);

    const hx1 = shadowpen.querySelector('h1');
    const hx2 = op.shadowRoot.querySelector('h1');
    console.log(hx1, hx2, hx1===hx2);

    const hx3 = shadowclose.querySelector('h1');
    const hx4 = cl.shadowRoot?.querySelector('h1');
    console.log(hx3, hx4, hx3===hx4);

    /*
    maintenant, lions le custom Element et le shadow dom.
    */
   import SuperBalise from "./SuperBalise.js";
