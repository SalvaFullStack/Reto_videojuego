class Enemy2 {
    constructor(ctx, canvasW, canvasH) {
      this.ctx = ctx;
      this.canvasW = canvasW;
      this.canvasH = canvasH;
  
      this.img = new Image()
      this.img.src = 'assets/Enemy2Walk.png'
  
      this.img.frameIndex = 0;
      this.img.frames = 4;
  
      this.x = canvasW - 100;
      this.y = canvasH + 85;
  
      this.vx = 18;
      
  
      this.w = 560;
      this.h = 560;
    }
  
    draw(frameCounter) {
      this.ctx.drawImage(this.img,
        this.img.frameIndex * (this.img.width / this.img.frames),
        0,
        this.img.width / this.img.frames,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
      );
  
      this.animateSprite(frameCounter);
    }
  
    animateSprite(frameCounter) {
      if (frameCounter % 4 === 0) {
        this.img.frameIndex++;
  
        if (this.img.frameIndex >= this.img.frames) {
          this.img.frameIndex = 0;
        }
      }
    }
  
    move() {
      this.x -= this.vx;
    }
  }