export class Board {
      
      constructor(width, height) {
         this.width = width;
         this.height = height;
         this.playing = false;
         this.gameOver = false;
         this.bars = [];
         this.ball = null;
         this.playing = false;
      }

      get getWidth(){
         return this.width;
      }
      
      get getHeight(){
         return this.height;
      }

      get isPlaying(){
         return this.playing;
      }

      get isGameOver(){
         return this.gameOver;
      }

      get getBars(){
         return this.bars;
      }

      get getBall(){
         return this.ball;
      }

      get elements() {
         let elements = this.bars.map(elem => elem);
         elements.push(this.ball);
         return elements;
      }
}