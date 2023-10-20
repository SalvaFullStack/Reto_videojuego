const ScoreBoard = {
    init: function (ctx) {
        this.ctx = ctx
    },

    update: function (score) {
        this.ctx.font = "50px Gothic";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("SCORE: " + score, 50, 50)

       
    },
  
}

