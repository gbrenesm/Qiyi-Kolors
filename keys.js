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
    enableAutoplay()
});

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
