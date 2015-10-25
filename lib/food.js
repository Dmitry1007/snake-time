const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;

function Food(board) {
    this.board  = board;
    this.x      = Math.floor((Math.random() * board.columns) + 0);
    this.y      = Math.floor((Math.random() * board.rows) + 0);
    this.width   = 10;
    this.height  = 10;
}



module.exports = {Food: Food};