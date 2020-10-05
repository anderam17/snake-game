function draw() {
  var canvas = $("#canvas")[0];
  var ctx = canvas.getContext("2d");

  //just an array holding the x and y coordinates for all segments in our snake
  var snake = [
    { x: 50, y: 100, oldX: 0, oldY: 0 },
    { x: 50, y: 90, oldX: 0, oldY: 0 },
    { x: 50, y: 80, oldX: 0, oldY: 0 },
  ];

  var food = {x: 200, y: 200, eaten: false};

  //setting snakeWidth and snakeHeight both to 10
  var snakeWidth = (snakeHeight = 10);
  var blockSize = 10;

  const LEFT = 37;
  const UP = 38;
  const RIGHT = 39;
  const DOWN = 40;

  var keyPressed = DOWN;
  var score = 0;


  //setInterval(what you will do, how often you will do it);
  setInterval(gameLoop, 150);

  //function to move snake
  function gameLoop(){
      //call drawSnake function
      clearCanvas();
      moveSnake();
      drawFood();
      drawSnake();
      console.log("game running")
  }

  function moveSnake() {
    $.each(snake, function (index, value) {
        snake[index].oldX = value.x;
        snake[index].oldY = value.y;

        //if the index is 0, that means this is the head of the snake
       if(index === 0){
        if (keyPressed === DOWN){
            snake[index].y = value.y + blockSize;
        }else if (keyPressed === UP){
            snake[index].y = value.y - blockSize;
        }else if (keyPressed === RIGHT){
            snake[index].x = value.x + blockSize;
        }else if (keyPressed === LEFT){
            snake[index].x = value.x - blockSize;
        }
        //else it is the body of the snake
       }else {
           //set the x and y values to the old x and y values of the block before it in the array(or line)
        snake[index].x = snake[index-1].oldX;
        snake[index].y = snake[index-1].oldY;
       }
    });
  }


  //draws each section of the snake using the values in the snake array
  function drawSnake() {
    $.each(snake, function (index, value) {
        //color
      ctx.fillStyle = "rgb(200, 0, 0)";
      //getting unique x and y coordinates as well as width and height of each block
      ctx.fillRect(value.x, value.y, snakeWidth, snakeHeight);
    //   making outline color and location/sizes
      ctx.strokeStyle = "white";
      ctx.strokeRect(value.x, value.y, snakeWidth, snakeHeight);
      if (index === 0){
          if(didEatFood(value.x, value.y)){
            console.log("yay food");
            score++;
            $("#score").text(score);
            makeSnakeBigger();
          }
      }
    });
  };

  //adds a link to the snake
  function makeSnakeBigger() {
    snake.push({
        x: snake[snake.length - 1].oldX,
        y: snake[snake.length - 1].oldY
    })
  };

  //checks if head of snake is at same position as food
  function didEatFood(x, y){
    return food.x === x && food.y === y;
  }

  function drawFood() {
    ctx.fillStyle = "rgb(0, 200, 0)";
    ctx.fillRect(food.x, food.y, blockSize, blockSize);
  };

  function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  $(document).keydown(function(e){
      if ($.inArray(e.which, [DOWN, UP, LEFT, RIGHT]) != -1){
          keyPressed = checkKeyIsAllowed(e.which);
      }
  })

  function checkKeyIsAllowed(tempKey){
    let key;
    if (tempKey === DOWN){
        key = (keyPressed != UP) ? tempKey : keyPressed;
    }else if(tempKey === UP){
        key = (keyPressed != DOWN) ? tempKey : keyPressed;
    }else if(tempKey === RIGHT){
        key = (keyPressed != LEFT) ? tempKey : keyPressed;
    }else if(tempKey === LEFT){
        key = (keyPressed != RIGHT) ? tempKey : keyPressed;
    }
    return key;
  }

}
