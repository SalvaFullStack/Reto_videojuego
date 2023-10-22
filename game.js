const Game = {
  ctx: undefined,
  canvasW: undefined,
  canvasH: undefined,
  scoreboard: ScoreBoard,
  fps: 60,
  keys: {
    BACK: "KeyS",
    WALK: "KeyD",
    JUMP: "Space",
    ATTACK: "KeyP"
  },
  intervalId: undefined,

  init: function () {
    const canvas = document.querySelector("canvas");
    this.ctx = canvas.getContext("2d");
    this.canvasW = canvas.width = innerWidth;
    this.canvasH = canvas.height = innerHeight;
    this.bso = new Audio ('assets/BSO_Ghosts.mp3')
    this.bso.play()
    this.enemySound = new Audio('assets/enemySound.mp3')
    this.reset();
  },

  reset: function () {
    this.background = new Background(this.ctx, this.canvasW, this.canvasH);
    this.player = new Player(this.ctx, this.canvasW, this.canvasH, this.keys);
    this.obstacles = [];
    this.enemy1 = [];
    this.enemy2 = [];
    this.enemy3 = [];
    this.enemy4 = [];
    this.enemy5 = [];
    this.score = 0;
    this.scoreboard.init(this.ctx);
    this.start();
  },

  start: function () {
    this.frameCounter = 0;
    this.intervalId = setInterval(() => {
      this.clear();
      this.frameCounter++;

      if (this.frameCounter % 400 === 0) {
       this.generateObstacle();
      }

      if (this.frameCounter % 200 === 0) {
       this.generateEnemy1();
      }

      if (this.frameCounter % 350 === 0) {
       this.generateEnemy2();
      }

      if (this.frameCounter % 500 === 0) {
        this.generateEnemy3();
      }

      if (this.frameCounter % 600 === 0) {
        this.generateEnemy4();
        }

      if (this.frameCounter % 700 === 0) {
        this.generateEnemy5();
          }
    
  

      this.moveAll();
      this.drawAll();

      if (this.isCollision()) {
    
      }

      if (this.isCollisionEnemy1()) {
       
      }

      if (this.isCollisionEnemy2()) {
    
      }

      if (this.isCollisionEnemy3()) {
  
       }

       if (this.isCollisionEnemy4()) {
    
         }

       if (this.isCollisionEnemy5()) {
      
          }
    }, 1000 / this.fps);
  },

  drawAll: function () {
    this.background.draw();
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    });
    this.player.draw(this.frameCounter);

    this.enemy1.forEach((enemy1) => {
      enemy1.draw(this.frameCounter);
    });

    this.enemy2.forEach((enemy2) => {
      enemy2.draw(this.frameCounter);
    });
    this.enemy3.forEach((enemy3) => {
      enemy3.draw(this.frameCounter);
    });
    this.enemy4.forEach((enemy4) => {
      enemy4.draw(this.frameCounter);
    });
    this.enemy5.forEach((enemy5) => {
      enemy5.draw(this.frameCounter);
    });

    this.scoreboard.update(this.score)
  },

  moveAll: function () {
    this.background.move();
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
    });
    this.player.move();
    this.enemy1.forEach((enemy1) => {
      enemy1.move();
    });
    this.enemy2.forEach((enemy2) => {
      enemy2.move();
    });
    this.enemy3.forEach((enemy3) => {
      enemy3.move();
    });
    this.enemy4.forEach((enemy4) => {
      enemy4.move();
    });
    this.enemy5.forEach((enemy5) => {
      enemy5.move();
    });
    
    
  },

  gameOver: function () {
    clearInterval(this.intervalId);
    if (confirm("GAME OVER! ¿Volver a jugar?")) {
      this.reset();
    }
  },

  generateObstacle: function () {
    this.obstacles.push(
     new Obstacle(this.ctx, this.canvasW, this.player.y0, this.player.h)
    );
  },

  generateEnemy1: function () {
    this.enemy1.push(
      new Enemy1(this.ctx, this.canvasW, this.player.y0, this.player.h)
    );
  },

  generateEnemy2: function () {
    this.enemy2.push(
      new Enemy2(this.ctx, this.canvasW, this.player.y0, this.player.h)
    );
  },

  generateEnemy3: function () {
    this.enemy3.push(
      new Enemy3(this.ctx, this.canvasW, this.player.y0, this.player.h)
    );
  
    
  },

  generateEnemy4: function () {
    this.enemy4.push(
      new Enemy4(this.ctx, this.canvasW, this.player.y0, this.player.h)
    );
  
    
  },

  generateEnemy5: function () {
    this.enemy5.push(
      new Enemy5(this.ctx, this.canvasW, this.player.y0, this.player.h)
    );
  
    
  },

 
  
  isCollision: function () {
    return this.obstacles.some((obstacle) => {
      if(
        obstacle.x + 250 < this.player.x + this.player.w &&
        obstacle.x + obstacle.w > this.player.x &&
        obstacle.y + obstacle.h > this.player.y &&
        obstacle.y < this.player.y + this.player.h
      ) {
        if(!this.player.playerDead) {setTimeout(() => {
          this.gameOver()
         }, 1000)}
        
        this.player.playerDefeat()
      }
    });
  },

  isCollisionEnemy1: function () {
    let playerAttacking = this.player.actions.attack;
  
    for (let i = 0; i < this.enemy1.length; i++) {
      const enemy = this.enemy1[i];
      if (
        enemy.x + 320 < this.player.x + this.player.w &&
        enemy.x + enemy.w > this.player.x &&
        enemy.y + enemy.h > this.player.y &&
        enemy.y < this.player.y + this.player.h
      ) {
        if (playerAttacking) {
         
          enemy.enemy1Defeat()
          this.addScore(10)

        } if (enemy.enemy1Dead) {

          setTimeout(() => {
            this.enemy1.splice(i, 1)
          }, 1000);
        }
          
          else {

            if(!this.player.playerDead) {setTimeout(() => {
              this.gameOver()
             }, 1000)}
            
            this.player.playerDefeat()
             

            }

            
        return true; 
      }
    }
  
    return false; 
  },


  isCollisionEnemy2: function () {
    let playerAttacking2 = this.player.actions.attack;
  
    for (let i = 0; i < this.enemy2.length; i++) {
      const enemy2 = this.enemy2[i];
      if (
        enemy2.x + 320 < this.player.x + this.player.w &&
        enemy2.x + enemy2.w > this.player.x &&
        enemy2.y + enemy2.h > this.player.y &&
        enemy2.y < this.player.y + this.player.h
      ) {
        if (playerAttacking2) {
         
          enemy2.enemy2Defeat()
          this.addScore(20)  

        } if (enemy2.enemy2Dead) {

          setTimeout(() => {
            this.enemy2.splice(i, 1)
          }, 1000);
        }
          
          else {
          
            if(!this.player.playerDead) {setTimeout(() => {
              this.gameOver()
             }, 1000)}
            
            this.player.playerDefeat()
        }
        return true; 
      }
    }
  
    return false; 
  },

  isCollisionEnemy3: function () {
    let playerAttacking3 = this.player.actions.attack;
  
    for (let i = 0; i < this.enemy3.length; i++) {
      const enemy3 = this.enemy3[i];
      if (
        enemy3.x + 450 < this.player.x + this.player.w &&
        enemy3.x + enemy3.w > this.player.x &&
        enemy3.y + enemy3.h > this.player.y &&
        enemy3.y < this.player.y + this.player.h
      ) {
        if (playerAttacking3) {
         
          enemy3.enemy3Defeat()
          this.addScore(15)  

        } if (enemy3.enemy3Dead) {

          setTimeout(() => {
            this.enemy3.splice(i, 1)
          }, 1000);
        }
          
          else {
            if(!this.player.playerDead) {setTimeout(() => {
              this.gameOver()
             }, 1000)}
            
            this.player.playerDefeat()
        }
        return true; 
      }
    }
  
    return false; 
  },


  isCollisionEnemy4: function () {
    let playerAttacking4 = this.player.actions.attack;
  
    for (let i = 0; i < this.enemy4.length; i++) {
      const enemy4 = this.enemy4[i];
      if (
        enemy4.x + 450 < this.player.x + this.player.w &&
        enemy4.x + enemy4.w > this.player.x &&
        enemy4.y + enemy4.h > this.player.y &&
        enemy4.y < this.player.y + this.player.h
      ) {
        if (playerAttacking4) {
         
          enemy4.enemy4Defeat()
          this.addScore(30)  

        } if (enemy4.enemy4Dead) {

          setTimeout(() => {
            this.enemy4.splice(i, 1)
          }, 1000);
        }
          
          else {
          
            if(!this.player.playerDead) {setTimeout(() => {
              this.gameOver()
             }, 1000)}
            
            this.player.playerDefeat()
        }
        return true; 
      }
    }
    return false; 
  },

  isCollisionEnemy5: function () {
    let playerAttacking5 = this.player.actions.attack;
  
    for (let i = 0; i < this.enemy5.length; i++) {
      const enemy5 = this.enemy5[i];
      if (
        enemy5.x + 300 < this.player.x + this.player.w &&
        enemy5.x + enemy5.w > this.player.x &&
        enemy5.y + enemy5.h > this.player.y &&
        enemy5.y < this.player.y + this.player.h
      ) {
        if (playerAttacking5) {
         
          enemy5.enemy5Defeat()
          this.addScore(40)  

        } if (enemy5.enemy5Dead) {

          setTimeout(() => {
            this.enemy5.splice(i, 1)
          }, 1000);
        }
          
          else {

            if(!this.player.playerDead) {setTimeout(() => {
              this.gameOver()
             }, 1000)}
            
            this.player.playerDefeat()
        }
        return true; 
      }
    }
  
    return false; 

  },
  addScore: function (points) {
    this.score += points; 
    this.scoreboard.update(this.score); 
  },


  clear: function () {
    this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
  },
};