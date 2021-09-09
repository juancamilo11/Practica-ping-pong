// export class Ball {
//    constructor(x,y,radius,board) {
//       this.x = x;
//       this.y = y;

//       this.radius = radius;
//       this.speed_x = 3;
//       this.speed_y = 0; 
//       this.board = board;
      
//       board.ball = this;
//       this.kind = 'circle';
//       this.direction = 1;
//       this.bounce_angle = 0;
//       this.max_bounce_angle = Math.PI / 12;
//       this.speed = 3; 
//    }

//    move() {
//       this.x += (this.speedX * this. direction);
//       this.y += this.speedY;
//    }

//    get width() {
//     return this.radius * 2;
//   }
//   get height() {
//     return this.radius * 2;
//   }

//    collisions(bar) {
//     let relative_intersect_y = bar.y + bar.height / 2 - this.y;

//     let normalized_intersect_y = relative_intersect_y / (bar.height / 2);

//     this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

//     this.speed_y = this.speed * -Math.sin(this.bounce_angle);
//     this.speed_x = this.speed * Math.cos(this.bounce_angle);

//     if (this.x > this.board.width / 2) this.direction = -1;
//     else this.direction = 1;
//   } 
//   collision2() {
//     if (
//       this.y + this.speed_y > this.board.height - this.radius ||
//       this.y + this.speed_y < this.radius
//     ) {
//       this.speed_y = (-1) * this.speed_y;
//     }
//   }
// }
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
      (this.y > 145.0 && this.y < 150.0) ||
      this.y + this.speed_y < this.radius
    ) {
      this.speed_y = -this.speed_y;
    }
  }
}

