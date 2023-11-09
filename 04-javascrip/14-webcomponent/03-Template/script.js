" use strcit ";

/*
la balise template est par default invisible.
son contenu n'est pas lu par le navigateur.

son but est d'acceuillir des elements HTML qui vont servir a etre recuperer par JS,
afin d'etre cloné et reutilisé a divers endroits.

on commencera par selectionné le template qui nous interesse.
puis avec la proprieté "content" on recupere le contenu de template sous forme d'un documentFragment.

enfin nous cloneron ce fragement, via la methode ".cloneNode(true)" dont le boolean permet de cloner son contenu en entier.

il nous restera qu'a inserer le cole dans le HTML.
*/
// je recupere le template:
const blogTemplate = document.querySelector('#blog');
// je recupere son contenu:
const blogArticle = blogTemplate.content;
// je selectionne les differents elements que je souhaite modifier:
const blogTitle = blogArticle.querySelector('h2');
const blogText = blogArticle.querySelector('p');
const blogSource = blogArticle.querySelector('a');

// je recupere les informations de mon blog:

async function getBlog (){
    const response = await fetch ('blog.json');
    if(!response.ok) return;
    const articles = await response.json()
    articles.forEach(a => {
        blogTitle.textContent = a.title;
        blogText.textContent = a.content;
        blogSource.href = a.source;
        blogSource.textContent = a.source;
        // je clone le template:
        const clone = blogArticle.cloneNode(true);
        // et j'insere le clone dans le HTML:
        document.body.append(clone);
    })
}
getBlog();

/*
    si les template sont utilisable seul,
    les slots eux accompagnent forcement le shadowDOM.

    on va donc tester cela sur un webcomponent.

    en inserant des balises "slot" avec des attributs " name"
    puis en lisant ce template au shadowDOM d'un custom element.

    lorsque je vais appeler mon customElement, si je place des balises HTML ayant attribut " slot" correspondant a un des attributs " name",
    alors celle ci viendra remplacer le "slot" correspondant

    ainsi il est possible d'inserer des elements variables anos templates.
*/

import SuperCard from './SuperCard.js';
