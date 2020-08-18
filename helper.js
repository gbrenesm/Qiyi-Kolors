/* function update() {
    clearCanvas()
    cuadrito.draw()
}

function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
} */

startBtn.addEventListener("click", iniciar)

function iniciar() {
    img = new Image();
    img.addEventListener(`load`, dividirCuadritos)
    let random = Math.floor(Math.random() * imagenesColors.length)
    img.src = "./img/bluecuadrito.jpg"
    //creo que el problema es el random aquí
}

function dividirCuadritos() {
    cuadritoswidth = $canvas.width / nivel
    cuadritosheight = $canvas.height / nivel
    //set canvas y init puzle cambiaran
    //setCanvas();
    empezarQiyi();
}

function empezarQiyi() {
    // ctx.drawImage(img, 0, 0, $canvas.width, $canvas.height)
    //esta función (buildpieces) puede cambiar
    generarPiezas()
}

function generarPiezas() {
    let cuadro;
    let xPos = 0;
    let yPos = 0;
    for (let i = 0; i < nivel * nivel; i++) {
        cuadro = {};
        cuadro.sx = xPos;
        cuadro.sy = yPos;
        cuadritos.push(cuadro);
        xPos += cuadritoswidth;
        if (xPos >= $canvas.width) {
            xPos = 0;
            yPos += cuadritosheight;
        }
    }
    cuadritos.pop()
    //crear las piezas al dar clic en algun boton
    // document.onmousedown = 
    shuffleCuadritos(cuadritos);
}


function shuffleCuadritos() {

    cuadritos = shuffleArray(cuadritos)
    // $canvas.clearReact(0, 0, $canvas.width, $canvas.height);
    let xPos = 0
    let yPos = 0;
    for (let i = 0; i < cuadritos.length; i++) {
        cuadritos[i].xPos = xPos
        cuadritos[i].yPos = yPos
        ctx.drawImage(img, cuadritos[i].sx, cuadritos[i].sy, cuadritoswidth, cuadritosheight, cuadritos[i].xPos, cuadritos[i].yPos, cuadritoswidth, cuadritosheight);
        xPos += cuadritoswidth;
        if (xPos >= $canvas.width) {
            xPos = 0;
            yPos += cuadritoswidth
        }
    }

    //posible cambio de accion
    // document.onmousedown = onPuzzleClick;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function onGame(){
    mover()
}

$canvas.addEventListener('mousedown', e => {
    mouseDown = true;
    mouseX = e.pageX - $canvas.offsetLeft; 
    mouseY = e.pageY - $canvas.offsetTop;
    mover()
})

function mover() {
    for (i = 0; i < cuadritos.length; i++) {
        if (mouseDown) {
            if (cuadritos[i].xPos < mouseX && (cuadritos[i].xPos + cuadritoswidth) > mouseX && cuadritos[i].yPos < mouseY && (cuadritos[i].yPos + cuadritosheight) > mouseY) {
                if (cuadritos[i].xPos == espacioX && (cuadritos[i].yPos == espacioY - cuadritosheight || cuadritos[i].yPos == espacioY + cuadritosheight) || cuadritos[i].yPos == espacioY && (cuadritos[i].xPos == espacioX - cuadritoswidth || cuadritos[i].xPos == espacioX + cuadritoswidth)) {
                        ctx.clearRect(cuadritos[i].xPos, cuadritos[i].yPos, cuadritoswidth, cuadritosheight)
                        nuevoEspacioX = cuadritos[i].xPos
                        nuevoEspacioY = cuadritos[i].yPos
                        cuadritos[i].xPos = espacioX
                        cuadritos[i].yPos = espacioY
                        espacioX = nuevoEspacioX
                        espacioY = nuevoEspacioY
                    }
            }
        ctx.drawImage(img, cuadritos[i].sx, cuadritos[i].sy, cuadritoswidth, cuadritosheight, cuadritos[i].xPos, cuadritos[i].yPos, cuadritoswidth, cuadritosheight)

        }
    }
}

// function winGame(){
//     for (i = 0; i < cuadritos.length; i++ ){
//         if (cuadritos[i].sx == cuadritos[i].xPos && cuadritos[i].sy == cuadritos[i].yPos){
//             ctx.drawImage(img, 0, 0, $canvas.width, $canvas.height)
//             nextLevel()
//         }

//     }
// }