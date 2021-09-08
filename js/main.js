import { Bar } from "./class/Bar.js";
import { Board } from "./class/Board.js";
import { BoardView } from "./class/BoardView.js";




let board = new Board(500,500);
let canvas = document.getElementById('canvas');
let bar1 = new Bar(10,60,10,30,board);
let bar2 = new Bar(480,60,10,30,board);
let boardView = new BoardView(canvas,board);

document.addEventListener('keydown',function(e){
   console.log(e.key);
   if(e.key == 'w'){
      bar1.up();
      console.log(bar1);
   } else if(e.key == 's'){
      bar1.down();
      console.log(bar1);
   } else if(e.key == 'ArrowUp'){
      bar2.up();
      console.log(bar2);
   } else if(e.key == 'ArrowDown'){
      bar2.down();
      console.log(bar2);
   }
});

window.addEventListener('load',main);

function main() {
   boardView.draw();
}