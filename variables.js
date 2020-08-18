let nivel = 3;
let img;
let cuadritos = [];
let cuadritosheight;
let cuadritoswidth;
let espacioX = ($canvas.width / nivel) * (nivel - 1)
let espacioY = ($canvas.height / nivel) * (nivel - 1)
let mouseX
let mouseY
let mouseDown = false;
let imagenesColors = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg"];

// El número que es divisible entre 3, 4 y 5 es 180, o sea que puede ser de: 360 ó 720

// intervalId = setInterval(update, 1000 / 60)