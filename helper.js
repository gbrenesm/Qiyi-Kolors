/* function update() {
    clearCanvas()
    cuadrito.draw()
}

function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
} */

function iniciar() {
    img = new Image();
    img.addEventListener(`load`, onImage, false)
    let random = Math.floor(Math.random() * imagenesColors.length)
    img.src = imagenesColors[random]
}

function dividirCuadritos(e) {
    cuadritoswidth = Math.floor($canvas.width / nivel)
    cuadritosheight = Math.floor($canvas.height / nivel)
        //set canvas y init puzle cambiaran
        //setCanvas();
    initPuzzle();
}

function empezarQiyi() {
    ctx.drawImage(img, 0, 0, $canvas.width, $canvas.height, 0, 0, $canvas.width, $canvas.height)
        //esta función (buildpieces) puede cambiar
    generarPiezas()
}

function generarPiezas() {
    let cuadro = {};
    let xPos = 0;
    let yPos = 0;
    for (let i = 0; i < nivel * nivel; i++) {
        cuadro.sx = xPos;
        cuadro.sy = yPos;
        cuadritos.push(cuadro);
        xPos += cuadritoswidth;
        if (xPos >= $canvas.width) {
            xPos = 0;
            yPos += cuadritosheight;
        }
    }
    //crear las piezas al dar clic en algun boton
    document.onmousedown = shuffleCuadritos(cuadritos);


}


function shuffleCuadritos() {

    cuadritos = shuffleArray(cuadritos)
    $canvas.clearReact(0, 0, cuadritoswidth, cuadritosheight);
    let cuadro;
    let xPos = 0;
    let yPos = 0;

    for (let i = 0; i < cuadritos.length; i++) {
        cuadro = cuadritos[i];
        piece.xPos = xPos;
        piece.yPos = yPos;
        ctx.drawImage(img, piece.sx, piece.sy, cuadritoswidth, cuadritosheight, xPos, yPos, cuadritoswidth, cuadritosheight);
        xPos += cuadritoswidth;
        if (xPos >= cuadritoswidth) {
            xPos = 0;
            yPos += cuadritosheight
        }
    }

    //posible cambio de accion
    document.onmousedown = onPuzzleClick;



}

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

    }
    return array

}