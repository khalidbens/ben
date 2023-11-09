export default class SuperBalise extends HTMLElement {
    constructor() {
        super();
        this.info = document.createElement("div");
        this.info.textContent = this.getAttribute("text") || "rien à dire";
        this.append(this.info);
        this.iniStyle();
        this.addEventListener("mouseenter", this.toggle);
        this.addEventListener("mouseleave", this.toggle);
    }
    iniStyle() {
        this.style.fontWeight = 900;
        this.style.color = "red";
        this.style.position = "relative";

        this.info.style.position = "absolute";
        this.info.style.bottom = " -2rem";
        this.info.style.right = "-1rem";
        this.info.style.border = " 2px solid blue";
        this.info.style.borderRadius = "5px";
        this.info.style.backgroundColor = "rgba(0,0,255,0.7)";
        this.info.style.color = "yellow";
        this.info.style.display = "none";

    }
    toggle() {
        if (this.info.style.display === "none")

            this.info.style.display = "";
        else

            this.info.style.display = "none";

    }
    connectedCallback() {
        console.log("ma balise est entree dans le DOM");
    }
    disconnectedCallback() {
        console.log("ma balise est sorti du DOM");
    }
    adoptedCallback() {
        console.log("j'ai la flemme de faire afficher ce message");
    }
    attributeChangedCallback(name, old, now) {
        console.log(`l'attribut ${name} est passé de : ${old} a ${now}`);
    }
    static get observedAttributes() {
        return ["style"];
    }
}
customElements.define("super-balise", SuperBalise);