const random1 = Math.floor(Math.random() * 255);
const random2 = Math.floor(Math.random() * 255);
const random3 = Math.floor(Math.random() * 255);

const color = `rgb(${random1}, ${random2}, ${random3})`;

document.body.style.background = color;
document.body.innerHTML = `<h2>${color}</h2>`;