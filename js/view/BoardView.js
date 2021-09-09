export class BoardView {
   constructor(canvas, board) {
      this.canvas = canvas;
      this.canvas.width = board.width;
      this.canvas.heiht = board.heiht;
      this.board = board;
      this.ctx = canvas.getContext("2d");
   }

   draw() {
      for (let index = this.board.elements.length - 1 ; index >= 0 ; index--) {
         const element = this.board.elements[index];
         switch (element.kind) {
            case 'rectangle':
               this.ctx.fillRect(element.x,element.y,element.width,element.height);
               break;
            case 'circle':
               this.ctx.beginPath();
               this.ctx.arc(element.x,element.y,element.radius,0,7);
               this.ctx.fill();
               this.ctx.closePath();
               break;
            default:
               break;
         }
      }
   }
   
   clean() {
      this.ctx.clearRect(0,0,this.board.width,500);
   }
   
   check_collisions() {
    for(let i = this.board.bars.length - 1; i >= 0; i--) {
      let bar = this.board.bars[i];
      if (this.hit(bar, this.board.ball)) {
        this.board.ball.collisions(bar);
      } else {
        this.board.ball.collision2();
      }
    }
  }

   hit(a, b) {
      //Revisa si a colisiona con b
      var hit = false;
      
      //Colisiones hirizontales
      if (b.x + b.width >= a.x && b.x < a.x + a.width) {
         //Colisiona verticales
         if (b.y + b.height >= a.y && b.y < a.y + a.height) hit = true;
      }

      //Colisión de a con b
      if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
         if (b.y <= a.y && b.y + b.height >= a.y + a.height) hit = true;
      }

      //Colision b con a
      if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
         //Colisiona verticales
         if (a.y <= b.y && a.y + a.height >= b.y + b.height) hit = true;
      }
      return hit;
   }

   play() {
      if(this.board.playing){
         this.clean();
         this.draw();
         this.check_collisions();
         this.board.ball.move();
      }
   }
}
