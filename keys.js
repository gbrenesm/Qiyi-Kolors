/* document.getElementById('start-game-button').onclick = function() {
    const cuadrito = new Cuadrito(0, 0)
    cuadrito.draw()

}; */
/* const cuadrito = new Cuadrito(0, 0, "img/3.jpg")
let mouseX
let mouseY
let mouseDown = false
let espacioX = 0
let espacioY = 0

canvas.addEventListener("mousedown", getPosition);

function getPosition(event) {
    let clickX = event.x;
    let clickY = event.y;

    if (cuadrito.x < clickX + cuadrito.width &&
        cuadrito.x + cuadrito.width > clickX &&
        cuadrito.y < clickY + cuadrito.height &&
        cuadrito.y + cuadrito.height > clickY) {
        cuadrito.cuadritoMove()
    }

}


$canvas.addEventListener('mousedown', function(e) {
    mouseDown = true;
    mouseX = e.pageX - $canvas.offsetLeft; // subtract the canvas offset for left and top
    mouseY = e.pageY - $canvas.offsetTop;
});

if (mouseDown){
    if (cuadrito.x == espacioX && cuadrritoY)
} */


let buttonstart = document.getElementById("start-game")
let firstslide = document.getElementById("start-game1")
let canvasshow = document.getElementById("levels1")
let titledis = document.getElementById("titleid")

buttonstart.addEventListener('click', () => {
    firstslide.style.visibility = 'hidden';
    canvasshow.style.visibility = 'visible';
    titledis.style.visibility = 'hidden';
    //     document.getElementById("img-picker").src = imagenseleccionada
});

// function myFunction() {
//     document.getElementById("img-picker").src = imagenseleccionada
// }