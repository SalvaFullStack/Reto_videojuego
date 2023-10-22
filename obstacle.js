class Obstacle {
	constructor(ctx, canvasW, playerY, playerH) {
		this.ctx = ctx
		this.canvasW = canvasW

		this.w = 75
		this.h = 100

		this.x = canvasW
		this.y = playerY + playerH - this.h

        this.img = new Image()
        this.img.src = 'assets/column.png'

		this.dx = 10
	}

	draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
		
	}

	move() {
		this.x -= this.dx
	}
}
