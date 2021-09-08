export class Bar {
   constructor(x,y,width,height,board) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.board = board;
      
      this.board.bars.push(this);

      this.kind = 'rectangle';
   }

   down() { //linea 31 parece que se equivocó

   }

   up(){

   }
}