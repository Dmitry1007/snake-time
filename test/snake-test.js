const chai     = require('chai');
const assert   = chai.assert;
const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;

describe('Snake', function () {
  it('exists', function () {
    assert(new Snake());
  });

  it('has a head and a body', function () {
    let snake = new Snake();
    assert.equal(snake.head.x, 40);
    assert.equal(snake.head.y, 40);
    assert.equal(snake.head.width, 10);
    assert.equal(snake.head.height, 10);
    assert(snake.body)
  });

  it('should have a draw method', function () {
    let snake = new Snake();
    assert(snake.draw);
  });

  it('appends body part when it eats', function () {
    let snake = new Snake();
    snake.eat();
    assert(snake.body[1]);
    assert.equal(snake.body.length, 2)
  });

  describe('canMoveDown', function () {

  it('should be true if it can move down', function () {
    let snake = new Snake(300, 200)
    snake.head.x = 10
    snake.head.y = 100
    assert.equal(snake.canMoveDown(), true);
  });

  it('should be false if at the bottom edge of the board', function () {
    let snake = new Snake(300, 200)
    snake.head.x = 10
    snake.head.y = 200
    assert.equal(snake.canMoveDown(), false);
  });

});

describe('canMoveRight', function () {

  it('should be true if it can move right', function () {
    let snake = new Snake(300, 200)
    snake.head.x = 10
    snake.head.y = 200
    assert.equal(snake.canMoveRight(), true);
  });

  it('should be false if against the right wall', function () {
    let snake = new Snake(300, 200)
    snake.head.x = 300
    snake.head.y = 200
    assert.equal(snake.canMoveRight(), false);
  });

});

describe('canMoveLeft', function () {

  it('should be true if it can move left', function () {
    let snake = new Snake(300, 200)
    snake.head.x = 100
    snake.head.y = 10
    assert.equal(snake.canMoveLeft(), true);
  });

  it('should be false if against the Left wall', function () {
    let snake = new Snake(300, 200)
    snake.head.x = 0
    snake.head.y = 10
    assert.equal(snake.canMoveLeft(), false);
  });

});

describe('canMoveUp', function () {

  it('should be true if it can move up', function () {
    let snake = new Snake(300, 200)
    snake.head.x = 100
    snake.head.y = 100
    assert.equal(snake.canMoveUp(), true);
  });

  it('should be false if against the top wall', function () {
    let snake = new Snake(300, 200)
    snake.head.x = 50
    snake.head.y = 0
    assert.equal(snake.canMoveUp(), false);
  });

});


  describe('Snake Moves Right', function () {
    it('body block, on the same y-axis of the head block takes the coordinates of the head block once the head block moves right', function () {
      let snake = new Snake();
      let block = new Block(null, 30, 40);
      snake.body.push(block);
      snake.move('39');
      assert.equal(snake.head.x, 50);
      assert.equal(snake.head.y, 40);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('body block, on the same x-axis of the head block takes the coordinates of the head block once the head block moves right', function () {
      let snake = new Snake();
      let block = new Block(null, 40, 30);
      snake.body.push(block);
      snake.move('39');
      assert.equal(snake.head.x, 50);
      assert.equal(snake.head.y, 40);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('moves 3-block snake into the right coordinates when the head moves right', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 50);
      let block2 = new Block(null, 40, 60);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.move('39');

      assert.equal(snake.head.x, 50);
      assert.equal(snake.head.y, 40);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 50)
    });

    it('moves 4-block snake into the right coordinates when the head moves right', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 30);
      let block2 = new Block(null, 30, 30);
      let block3 = new Block(null, 30, 40);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.move('39');

      assert.equal(snake.head.x, 50);
      assert.equal(snake.head.y, 40);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 30);

      assert.equal(snake.body[3].x, 30);
      assert.equal(snake.body[3].y, 30)
    });
  });

  describe('Snake Moves Up', function () {
    it('body block, on the same y-axis of the head block takes the coordinates of the head block once the head block moves up', function () {
      let snake = new Snake();
      let block = new Block(null, 30, 40);
      snake.body.push(block);
      snake.move('40');
      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 50);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('body block, on the same x-axis of the head block takes the coordinates of the head block once the head block moves up', function () {
      let snake = new Snake();
      let block = new Block(null, 40, 30);
      snake.body.push(block);
      snake.move('40');
      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 50);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('moves 3-block snake into the right coordinates when the head moves up', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 50);
      let block2 = new Block(null, 40, 60);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.move('40');

      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 50);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 50)
    });

    it('moves 4-block snake into the right coordinates when the head moves Up', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 30);
      let block2 = new Block(null, 30, 30);
      let block3 = new Block(null, 30, 40);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.move('40');

      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 50);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 30);

      assert.equal(snake.body[3].x, 30);
      assert.equal(snake.body[3].y, 30)
    });
  });

  describe('Snake Moves Down', function () {
    it('body block, on the same y-axis of the head block takes the coordinates of the head block once the head block moves down', function () {
      let snake = new Snake();
      let block = new Block(null, 30, 40);
      snake.body.push(block);
      snake.move('38');
      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 30);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('body block, on the same x-axis of the head block takes the coordinates of the head block once the head block moves down', function () {
      let snake = new Snake();
      let block = new Block(null, 40, 50);
      snake.body.push(block);
      snake.move('38');
      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 30);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('moves 3-block snake into the right coordinates when the head moves down', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 50);
      let block2 = new Block(null, 40, 60);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.move('38');

      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 30);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 50)
    });

    it('moves 4-block snake into the right coordinates when the head moves down', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 30);
      let block2 = new Block(null, 30, 30);
      let block3 = new Block(null, 30, 40);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.move('38');

      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 30);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 30);

      assert.equal(snake.body[3].x, 30);
      assert.equal(snake.body[3].y, 30)
    });
  });

  describe('Snake Moves Left', function () {
    it('body block, on the same y-axis of the head block takes the coordinates of the head block once the head block moves left', function () {
      let snake = new Snake();
      let block = new Block(null, 30, 40);
      snake.body.push(block);
      snake.move('37');
      assert.equal(snake.head.x, 30);
      assert.equal(snake.head.y, 40);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('body block, on the same x-axis of the head block takes the coordinates of the head block once the head block moves left', function () {
      let snake = new Snake();
      let block = new Block(null, 40, 50);
      snake.body.push(block);
      snake.move('37');
      assert.equal(snake.head.x, 30);
      assert.equal(snake.head.y, 40);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('moves 3-block snake into the right coordinates when the head moves left', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 50);
      let block2 = new Block(null, 40, 60);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.move('37');

      assert.equal(snake.head.x, 30);
      assert.equal(snake.head.y, 40);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 50);
    });

    it('moves 4-block snake into the right coordinates when the head moves left', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 30);
      let block2 = new Block(null, 30, 30);
      let block3 = new Block(null, 30, 40);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.move('37');

      assert.equal(snake.head.x, 30);
      assert.equal(snake.head.y, 40);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 30);

      assert.equal(snake.body[3].x, 30);
      assert.equal(snake.body[3].y, 30);
    });
  });
  describe('snake head checks for body parts', function () {
    it('cannot move left onto itself', function () {
      let snake = new Snake(); //  40, 40
      let block1 = new Block(null, 40, 30);
      let block2 = new Block(null, 30, 30);
      let block3 = new Block(null, 30, 40);
      let block4 = new Block(null, 30, 50);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.body.push(block4);

      assert.equal(snake.canMoveLeft(), false);

    });

  });
});
