/* const $canvas = document.querySelector("canvas") */

//es posible necesitar definirlo mediante funcion setCanvas()
/* function setCanvas() {
    const $canvas = document.querySelector("canvas")
    const ctx = $canvas.getContext("2d")
} */

const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

const startBtn = document.querySelector("#start-game")
const nextLevlBtn = document.querySelector("#next-level")


let intervalId