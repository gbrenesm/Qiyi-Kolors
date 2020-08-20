let buttonstart = document.getElementById("start-game")
let firstslide = document.getElementById("start-game1")
let canvasshow = document.getElementById("levels1")
let titledis = document.getElementById("titleid")
let nextleve = document.getElementById("next-level")
let ins = document.getElementById("instructions")
let mute = document.getElementById("mute")
let play = document.getElementById("play")

buttonstart.addEventListener('click', () => {
    firstslide.style.visibility = 'hidden';
    canvasshow.style.visibility = 'visible';
    ins.style.visibility = 'visible';
    titledis.style.visibility = 'hidden';
    enableAutoplay()
});

/* mute.addEventListener('click', () => {
    muteAudio()
    mute.innerHTML = "Play song";
    document.getElementById("song").id = "mute";
    document.getElementById("song").id = "play";
    pauseAudio()

});

play.addEventListener('click', () => {
    enableAutoplay()
    play.innerHTML = "Mute";
    document.getElementById("song").id = "play";
    document.getElementById("song").id = "mute";
    playAudio()

}); */



var x = document.getElementById("song");


function enableAutoplay() {
    x.autoplay = true;
    x.load();
    x.loop = true;
    x.volume = 0.2;
}

function disableAutoplay() {
    x.autoplay = false;
    x.load();
}

function checkAutoplay() {
    alert(x.autoplay);
}



function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}