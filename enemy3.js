class Enemy3 {
    constructor(ctx, canvasW, canvasH) {
      this.ctx = ctx;
      this.canvasW = canvasW;
      this.canvasH = canvasH;
  
      this.img = new Image()
      this.img.src = 'assets/Enemy3Walk.png'
      this.enemySound = new Audio('assets/enemySound.wav')
  
      this.img.frameIndex = 0;
      this.img.frames = 8;
  
      this.x = canvasW - 100;
      this.y = canvasH -70
  
      this.vx = 12;
  
      this.w = 700;
      this.h = 800;
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

    
    enemy3Defeat() {
      this.img.src = 'assets/burning_enemy3.png';
      this.img.frameIndex = 0;
      this.img.frames = 5;
      this.enemy3Dead = true;
      this.enemySound.volume = 0.75
      this.enemySound.play()  
      
}
  
    move() {
      this.x -= this.vx;
    }

    
  }