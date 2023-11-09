
export class Slider {
    slider = {};

    constructor(imgs, timing = 3000) {
        this.time = timing;
        this.html = this.create(imgs);
        this.select();
        this.showItems(0);
        this.startInterval();
    }

    create(imgs) {
        const container = document.createElement("div");
        container.classList.add("slider-container");

        const dots = document.createElement("div");
        dots.classList.add("dots");

        imgs.forEach((img, i) => {
            const div = document.createElement("div");
            div.classList.add("items", "fade");
            const image = document.createElement("img");
            image.src = img;
            div.append(image);
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dot.dataset.id = i;
            dots.append(dot);
            container.append(div);
        });

        container.append(dots);

        const next = document.createElement("a");
        next.classList.add("next");
        next.innerHTML = "&#10095;";
        const prev = document.createElement("a");
        prev.classList.add("prev");
        prev.innerHTML = "&#10094;";
        container.append(next, prev);

        return container;
    }

    select() {
        this.slider.dots = this.html.querySelectorAll(".dot");
        this.slider.items = this.html.querySelectorAll(".items");
        this.slider.btns = this.html.querySelectorAll(".next, .prev");

        // Ajoutez les écouteurs d'événements ici
        this.slider.dots.forEach(dot => {
            dot.addEventListener("click", this.currentItem.bind(this));
        });

        this.slider.btns[0].addEventListener("click", this.changeItem.bind(this));
        this.slider.btns[1].addEventListener("click", this.changeItem.bind(this));
    }

    showItems(n) {
        let index = n > this.slider.items.length - 1 ? 0 : n < 0 ? this.slider.items.length - 1 : n;
        this.slider.items.forEach((item, i) => {
            item.style.display = "none";
            this.slider.dots[i].classList.remove("active");
        });

        this.slider.items[index].style.display = "block";
        this.slider.dots[index].classList.add("active");
    }

    currentItem(e) {
        clearInterval(this.intervalId);
        let n = parseInt(e.target.dataset.id);
        this.showItems(n);
    }

    changeItem(e) {
        clearInterval(this.intervalId);
        let n = parseInt(document.querySelector(".dot.active").dataset.id);
        if (e.target.classList.contains("next")) {
            this.showItems(n + 1);
        } else {
            this.showItems(n - 1);
        }
        this.startInterval();
    }

    startInterval() {
        this.intervalId = setInterval(() => {
            this.slider.btns[1].click();
        }, this.time);
    }
}
