export class BoardView {
   constructor(canvas, board) {
      this.canvas = canvas;
      this.canvas.width = board.width;
      this.canvas.heiht = board.heiht;
      this.board = board;
      this.ctx = canvas.getContext("2d");
   }

}
