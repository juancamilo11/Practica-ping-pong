import { Bar } from "./class/Bar.js";
import { Board } from "./class/Board.js";
import { BoardView } from "./class/BoardView.js";

window.addEventListener('load',main);

function main() {
   let board = new Board(500,500);
   let canvas = document.getElementById('canvas');
   let bar1 = new Bar(10,60,10,30,board);
   let bar2 = new Bar(480,60,10,30,board);
   let boardView = new BoardView(canvas,board);
   boardView.draw();
   
}