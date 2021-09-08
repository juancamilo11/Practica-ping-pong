export class Ball {
   constructor(x,y,radius,board) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.board = board;
      
      board.ball = this;
      this.kind = 'circle';

   }
}