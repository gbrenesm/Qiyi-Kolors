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
