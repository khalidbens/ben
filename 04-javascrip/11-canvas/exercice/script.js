"use strict";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let painting = false;

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

document.getElementById("clear").addEventListener("click", clearCanvas);

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    context.beginPath();
}

function draw(e) {
    if (!painting) return;

    context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Fonctionnalités supplémentaires

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function () {
    context.strokeStyle = colorPicker.value;
});

const lineWidthSlider = document.getElementById("lineWidthSlider");
lineWidthSlider.addEventListener("input", function () {
    context.lineWidth = lineWidthSlider.value;
});

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", function () {
    const image = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = image;
    a.download = "my_drawing.png";
    a.click();
});

const loadImageInput = document.getElementById("loadImage");
loadImageInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function () {
                context.drawImage(img, 0, 0);
            };
        };
        reader.readAsDataURL(file);
    }
});
