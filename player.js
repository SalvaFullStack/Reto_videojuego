class Player {
  constructor(ctx, canvasW, canvasH, keys) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.keys = keys;

    this.img = new Image()
    this.img.src = 'assets/_Run.png'

    this.attackSound = new Audio('assets/Attacksound.mp3')

    this.img.frameIndex = 0
    this.img.frames = 10


    this.x = canvasW * 0.08;
    this.y0 = canvasH * 0.48;
    this.y = this.y0;
    
    this.vx = 3;
    this.vy = 3;

    this.w = 400;
    this.h = 460;

    this.actions = {
      
      walk: false,
      back: false, 
      attack: false,
      jump: false, 
    };

    this.setControls();
  }

  setControls() {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        
        case this.keys.WALK:
          this.actions.walk = true;

          break;

        case this.keys.BACK:
          this.actions.back = true;

          break;

        case this.keys.JUMP:
          this.actions.jump = true;
           this.img.src = 'assets/_Jump.png'
           this.img.frames = 3
           this.img.frameIndex = 0;
          

          if(this.y === this.y0){
            this.y = this.y0 - 1
            this.vy = -5
          }

          break;
        
        case this.keys.ATTACK:
          this.actions.attack = true;
           this.img.src = 'assets/_Attack2.png'
           this.img.frames = 6
           this.img.frameIndex = 0;
           this.attackSound.volume = 1
           this.attackSound.play()

      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.code) {

        case this.keys.WALK:
          this.actions.walk = false;

          break;

        case this.keys.BACK:
          this.actions.back = false;
              
          break;
     
      }
    });
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
        this.h)

      this.animateSprite(frameCounter)
  }

  animateSprite(frameCounter){
    if(frameCounter % 4 === 0) {
      this.img.frameIndex++

      if(this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0
      }
    }

  }

  move() {

    const gravity = 0.1;


    switch (true) {
      case this.actions.walk:
        this.x += this.vx;
        break;
        
      case this.actions.back:
        this.x -= this.vx;
      
        break;

      case this.actions.jump:
        this.y += this.vy;

       
          break;

      case this.actions.attack:
        if(this.img.frameIndex === this.img.frames - 1) {
          this.img.src = 'assets/_Run.png';
          this.img.frames = 10;
          this.actions.attack = false;
          this.img.frameIndex = 0
          
        } 
       
        break
  
    }
    if(this.x <= 0.08) {
      this.x = 0.09
    } 
    if(this.y < this.y0) {
      this.vy += gravity
    } else {
      this.vy = 0
      this.y = this.y0
    }

    // jump == true


    if (this.y === this.y0 && this.actions.jump) 
    
      {this.img.src = 'assets/_Run.png'
      this.img.frames = 10; 
      this.actions.jump = false
    }

    
    this.y += this.vy
   
  }

}