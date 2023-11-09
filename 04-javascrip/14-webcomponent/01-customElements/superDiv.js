export default class SuperDiv extends HTMLDivElement
{
    constructor()
    {
        console.log("Ma classe superDiv a été construite");
        super();
        this.#setStyle();
        this.addEventListener("click", this.hide);
    }
    #setStyle()
    {
        this.style.display = "block";
        this.style.overflow = "hidden";
        this.style.backgroundColor = this.getAttribute("bg")??"red"
        this.style.transition = "height 0.3s linear";

        this.sizes = this.getBoundingClientRect();
        this.style.height = this.sizes.heiht+"px";
        

    }

    hide()
    {
        if(this.style.height == "1rem")
        this.style.height = this.sizes.height+"px";
        else
        this.style.height = "1rem"
    }
} 
customElements.define("super-div", SuperDiv, { extends: "div" });
    
