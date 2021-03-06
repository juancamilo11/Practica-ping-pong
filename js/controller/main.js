import { Ball } from "../model/Ball.js";
import { Bar } from "../model/Bar.js";
import { Board } from "../model/Board.js";

import { BoardView } from "../view/BoardView.js";

//Declaración de variables para el juego
let board = new Board(500,400);
let canvas = document.getElementById('canvas');
let bar1 = new Bar(10,60,10,30,board);
let bar2 = new Bar(480,60,10,30,board);
let boardView = new BoardView(canvas,board);
let ball = new Ball(250,70,6,board);

//Eventos de captura de tecla 
document.addEventListener('keydown',function(e){
   if(e.key == 'w'){
      bar1.up();
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

//Evento de reinicio de juego
let botonReiniciar = document.getElementById('btn-reiniciar');
botonReiniciar.addEventListener('click',() => {
   location.reload();
})


//Dibujar por primera vez el canvas
boardView.draw();


window.requestAnimationFrame(controller);

function controller() {
   boardView.play();
   window.requestAnimationFrame(controller);
}

//Funcion anónima autoejecutable para retirar la ventana de instrucciones
(function(){
   let botonIniciar = document.getElementById('btn-jugar');
   
   botonIniciar.addEventListener('click',function iniciarJuego(e) {
      let modal = document.querySelector('.modal-container');
      modal.classList.add('hide');
   });

})();


