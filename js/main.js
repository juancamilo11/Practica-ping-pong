import { Board } from "./class/Board.js";
import { BoardView } from "./class/BoardView.js";

window.addEventListener('load',main);

function main() {
   let board = new Board(500,500);
   console.log(board);
   let canvas = document.getElementById('canvas');
   let boardView = new BoardView(canvas,board);
   
}