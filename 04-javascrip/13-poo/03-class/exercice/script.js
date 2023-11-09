import { Slider } from "./slider.js";

const images = [
  "../../../../ressources/images/paysage/lava.jpg",
  "../../../../ressources/images/paysage/space.jpg",
  "../../../../ressources/images/paysage/montagne.jpg"
];

async function addSlider() {
  const slider1 = new Slider(images, 5000);
  const slider2 = new Slider(images, 3000);
  document.body.append(slider1.html);
  document.body.append(slider2.html);
  window.removeEventListener("click", addSlider);
  
}
window.addEventListener("click", addSlider);

