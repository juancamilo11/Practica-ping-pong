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
   e.preventDefault();
   console.log(e.key);
   if(e.key == 'w'){
      bar1.up();
      controller();
   } else if(e.key == 's'){
      bar1.down();
   } else if(e.key == 'ArrowUp'){
      bar2.up();
   } else if(e.key == 'ArrowDown'){
      bar2.down();
   }
});

//window.addEventListener('load',main);

window.requestAnimationFrame(controller);

function controller() {
   boardView.play();
   window.requestAnimationFrame(controller);
}