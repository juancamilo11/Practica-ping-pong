export class Ball {
   constructor(x,y,radius,board) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.speedX = 1;
      this.speedY = 0; 
      this.board = board;
      
      board.ball = this;
      this.kind = 'circle';
      this.direction = 1;
   }

   move() {
      this.x += (this.speedX * this. direction);
      this.y += this.speedY;
   }
}