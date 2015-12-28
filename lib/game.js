const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;
const Food     = require('../lib/food').Food;

let canvas    = document.querySelector('canvas');
let context   = canvas.getContext('2d');


let docWidth = document.documentElement.clientWidth

canvas.width  = docWidth
canvas.height = 350
console.log(docWidth)


let board = new Board(canvas.width, canvas.height);
let snake = new Snake(board);
let food  = new Food(board);

function overlay() {
  canvas.style.display = "none"
  let el = document.getElementById("overlay");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

$('#play-again').click(function () {
  window.location.reload()
})

let direction = '0';

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  board.draw(context);
  food.draw(context);

  document.onkeydown = function(e) {
    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
      direction = e.keyCode.toString();
    }
  };

  if (snake.collisionAtEdge() || snake.collisionWithSelf(direction)) {
    return overlay()
  }

  snake.move(direction);
  requestAnimationFrame(gameLoop);
});
