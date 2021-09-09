export class Ball {
  constructor(x, y, radius, board) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed_y = 0;
    this.speed_x = 3;
    this.board = board;
    this.direction = 1;
    this.bounce_angle = 0;
    this.max_bounce_angle = Math.PI / 12;
    this.speed = 5;

    board.ball = this;
    this.kind = "circle";
  }
  get width() {
    return this.radius * 2;
  }
  get height() {
    return this.radius * 2;
  }
  move() {
    this.x += this.speed_x * this.direction;
    this.y += this.speed_y;
  }
  collisions(bar) {
    let relative_intersect_y = bar.y + bar.height / 2 - this.y;

    let normalized_intersect_y = relative_intersect_y / (bar.height / 2);

    this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

    this.speed_y = this.speed * -Math.sin(this.bounce_angle);
    this.speed_x = this.speed * Math.cos(this.bounce_angle);

    if (this.x > this.board.width / 2) this.direction = -1;
    else this.direction = 1;
  }

  collision2() {
    if (
      250 + this.y + this.speed_y > this.board.height - this.radius ||
      this.y + this.speed_y < this.radius
    ) {
      this.speed_y = -this.speed_y;
    }
    this.collision3();
  }

  collision3() {
    let puntuacionA = document.getElementById("score-A");
    let puntuacionB = document.getElementById("score-B");
    if (this.x <= 0) {
      //B gana el turno
      let nuevaPuntuacion = parseInt(puntuacionB.textContent) + 1;
      puntuacionB.textContent = nuevaPuntuacion;
      this.reUbicarPelota(1);
    } else if (this.x >= 495) {
      //A gana el turno
      let nuevaPuntuacion = parseInt(puntuacionA.textContent) + 1;
      puntuacionA.textContent = nuevaPuntuacion;
      this.reUbicarPelota(2);
    }
  }

  reUbicarPelota(nuevoTurno) {
    this.x = 250;
    this.y = 70;
    if (nuevoTurno == 1) {
      this.speed_x = 3;
      this.speed_y = 0;
    } else if (nuevoTurno == 2) {
      this.speed_x = 3;
      this.speed_y = 0;
    }
  }
}