let buttonstart = document.getElementById("start-game")
let firstslide = document.getElementById("start-game1")
let canvasshow = document.getElementById("levels1")
let titledis = document.getElementById("titleid")

buttonstart.addEventListener('click', () => {
    firstslide.style.visibility = 'hidden';
    canvasshow.style.visibility = 'visible';
    titledis.style.visibility = 'hidden';
});
