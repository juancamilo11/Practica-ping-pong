import { Ball } from "./class/Ball.js";
import { Bar } from "./class/Bar.js";
import { Board } from "./class/Board.js";
import { BoardView } from "./class/BoardView.js";




let board = new Board(500,500);
let canvas = document.getElementById('canvas');
let bar1 = new Bar(10,60,10,30,board);
let bar2 = new Bar(480,60,10,30,board);
let boardView = new BoardView(canvas,board);
let ball = new Ball(250,100,6,board);


document.addEventListener('keydown',function(e){
   if(e.key == 'w'){
      bar1.up();
      controller();
   } else if(e.key == 's'){
      e.preventDefault();
      bar1.down();
   } else if(e.key == 'ArrowUp'){
      e.preventDefault();
      bar2.up();
   } else if(e.key == 'ArrowDown'){
      e.preventDefault();
      bar2.down();
   } else if(e.key == 'ArrowDown'){
      e.preventDefault();
      bar2.down();
   } else if(e.key == " "){
      e.preventDefault();
      board.playing = !board.playing;
   }
});

boardView.draw();


window.requestAnimationFrame(controller);

function controller() {
   boardView.play();
   window.requestAnimationFrame(controller);
}