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
    img.src = imagenesColors[random]
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
    let cuadro;
    let xPos = 0
    let yPos = 0;
    for (let i = 0; i < cuadritos.length; i++) {
        cuadro = cuadritos[i];
        cuadro.xPos = xPos;
        cuadro.yPos = yPos
        ctx.drawImage(img, cuadro.sx, cuadro.sy, cuadritoswidth, cuadritosheight, xPos, yPos, cuadritoswidth, cuadritosheight);
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

$canvas.addEventListener('mousedown', e => {
    mouseDown = true;
    mouseX = e.pageX - $canvas.offsetLeft; 
    mouseY = e.pageY - $canvas.offsetTop;
})

function mover() {
    espacioX = ($canvas.width / nivel) * (nivel - 1)
    espacioY = ($canvas.height / nivel) * (nivel - 1)
    for (i = 0; i < cuadritos.length; i++) {
        if (mouseDown) {
            if (cuadritos[i].sx < mouseX && (cuadritos[i].sx + cuadritoswidth) > mouseX && cuadritos[i].sy < mouseY && (cuadritos[i].sy + cuadritosheight) > mouseY) {
                if (cuadritos[i].sx == espacioX && (cuadritos[i].sy == espacioY - cuadritosheight || cuadritos[i].sy == espacioY + cuadritosheight) || cuadritos[i].sy == espacioY && (cuadritos[i].sx == espacioX - cuadritoswidth || cuadritos[i].sx == espacioX + cuadritoswidth)) {
                        ctx.clearRect(cuadritos[i].sx, cuadritos[i].sy, cuadritoswidth, cuadritosheight)
                        nuevoEspacioX = cuadritos[i].sx
                        nuevoEspacioY = cuadritos[i].sy
                        cuadritos[i].sx = espacioX
                        cuadritos[i].sy = espacioY
                        espacioX = nuevoEspacioX
                        espacioY = nuevoEspacioY
                }
            }
        ctx.drawImage(img, cuadritos[i].sx, cuadritos[i].sy, cuadritoswidth, cuadritosheight, 50, 50, cuadritoswidth, cuadritosheight)

        }
    }
}