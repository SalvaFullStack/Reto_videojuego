class Obstacle {
	constructor(ctx, canvasW, playerY, playerH) {
		this.ctx = ctx
		this.canvasW = canvasW

		this.w = 150
		this.h = 200

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
