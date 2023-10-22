class Enemy4 {
    constructor(ctx, canvasW, canvasH) {
      this.ctx = ctx;
      this.canvasW = canvasW;
      this.canvasH = canvasH;
  
      this.img = new Image()
      this.img.src = 'assets/Enemy4Flight.png'
      this.enemySound = new Audio('assets/enemySound.wav')
  
      this.img.frameIndex = 0;
      this.img.frames = 8;
  
      this.x = canvasW - 100;
      this.y = canvasH 
  
      this.vx = 14;
  
      this.w = 600;
      this.h = 660;
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

    
    enemy4Defeat() {
      this.img.src = 'assets/burning_enemy4.png';
      this.img.frameIndex = 0;
      this.img.frames = 5;
      this.enemy4Dead = true;
      this.enemySound.volume = 0.75
      this.enemySound.play()  
      
}
  
    move() {
      this.x -= this.vx;
    }
  }