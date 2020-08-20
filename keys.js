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
let nextleve = document.getElementById("next-level")
let ins = document.getElementById("instructions")

buttonstart.addEventListener('click', () => {
    firstslide.style.visibility = 'hidden';
    canvasshow.style.visibility = 'visible';
    ins.style.visibility = 'visible';
    titledis.style.visibility = 'hidden';
    //nextleve.style.visibility = 'visible';
    enableAutoplay()

});

//Asigno el pensamiento que le corresponde a la imagen 
/* nextleve.addEventListener('click', () => {
    document.getElementById("img-picker").src = zenSeleccionado
}); */

var x = document.getElementById("song");


function enableAutoplay() {
    x.autoplay = true;
    x.load();
}

function disableAutoplay() {
    x.autoplay = false;
    x.load();
}

function checkAutoplay() {
    alert(x.autoplay);
}

// function myFunction() {
//     document.getElementById("img-picker").src = imagenseleccionada
// }