"use strict";

export default class SuperCard extends HTMLElement
{
    constructor()
    {
        super();
        this.Shadow = this.attachShadow({ mode: "open" });
        const template = document.querySelector("#card");
        this.shadowRoot.append(template.content.cloneNode(true));
    }
    
}
customElements.define("super-card", SuperCard)