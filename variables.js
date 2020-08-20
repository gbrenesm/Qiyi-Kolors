let grid = 3;
let nivel = 1;
let img;
let cuadritos = [];
let cuadritosheight;
let cuadritoswidth;
let espacioX = ($canvas.width / grid) * (grid - 1)
let espacioY = ($canvas.height / grid) * (grid - 1)
let mouseX
let mouseY
let mouseDown = false;
let imagenesColors = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/6.jpg", "./img/7.jpg", "./img/8.jpg", "./img/9.jpg", "./img/10.jpg"];
let imagenesBlindColor = []
let imagenseleccionada = ""
let imagenIndex
    //creo un array de frases correspondientes por imagen
let imagenesZen = ["./img/1a.png", "./img/2a.png", "./img/3a.png", "./img/4a.png", "./img/5a.png", "./img/6a.png", "./img/7a.png", "./img/8a.png", "./img/9a.png", "./img/10a.png"];
let zenSeleccionado;