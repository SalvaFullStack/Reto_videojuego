class Enemy1 {
    constructor(ctx, canvasW, canvasH) {
      this.ctx = ctx;
      this.canvasW = canvasW;
      this.canvasH = canvasH;
  
      this.img = new Image()
      this.img.src = 'assets/_Enemy1walk.png'
      this.enemySound = new Audio('assets/enemySound.wav')
  
      this.img.frameIndex = 0;
      this.img.frames = 4;
  
      this.x = canvasW - 100;
      this.y = canvasH + 150
  
      this.vx = 15;
  
      this.w = 400;
      this.h = 460;
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

    enemy1Defeat() {
           this.img.src = 'assets/burning_enemy1.png';
           this.img.frameIndex = 0;
           this.img.frames = 5;
           this.enemy1Dead = true;
           this.enemySound.volume = 0.75
           this.enemySound.play()  
  }
    move() {
      this.x -= this.vx;
    }
  }