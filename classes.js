/* class Cuadrito {
    constructor(x, y, src) {
        this.x = x
        this.y = y
        this.width = 200
        this.height = 200
        this.img = new Image()
        this.img.src = src
        this.img.onload = () => {
            this.draw()
        }
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        ctx.fillStyle = "#bada55"
        ctx.fillRect(200, 200, $canvas.width, $canvas.height)
    }

    cuadritoMove() {
        this.y += 200
    }
} */