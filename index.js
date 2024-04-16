
function getColor(){

    const random1 = Math.floor(Math.random() * 255);
    const random2 = Math.floor(Math.random() * 255);
    const random3 = Math.floor(Math.random() * 255);


    const color = `rgb(${random1}, ${random2}, ${random3})`;
    const color2 = `rgb(${random2}, ${random3}, ${random1})`;

    document.body.style.background = color;
    document.body.innerHTML = `<h2>${color}</h2>`;

    const h2 = document.querySelector('h2');
    h2.style.border = `5px solid ${color2}`;
};

setInterval(getColor, 3000);