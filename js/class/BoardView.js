export class BoardView {
   constructor(canvas, board) {
      this.canvas = canvas;
      this.canvas.width = board.width;
      this.canvas.heiht = board.heiht;
      this.board = board;
      this.ctx = canvas.getContext("2d");
   }

   // draw() {
   //    for (let index = this.board.elements.length - 1 ; index >= 0 ; index--) {
   //       const element = this.board.elements[index];
   //       if(element !== null && element.hasOwnProperty("kind")) {
   //          switch (element.kind) {
   //             case 'rectangle':
   //                this.ctx.fillRect(element.x,element.y,element.width,element.height);
   //                break;
   //             default:
   //                break;
   //          }
   //       } 
   //    }
   // }

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
   
   play() {
      this.clean();
      this.draw();
   }
}
