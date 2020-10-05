function draw() {
  var canvas = $("#canvas")[0];
  var ctx = canvas.getContext("2d");

  //just an array holding the x and y coordinates for all segments in our snake
  var snake = [
    { x: 50, y: 100, oldX: 0, oldY: 0 },
    { x: 50, y: 90, oldX: 0, oldY: 0 },
    { x: 50, y: 80, oldX: 0, oldY: 0 },
  ];

  //setting snakeWidth and snakeHeight both to 10
  var snakeWidth = (snakeHeight = 10);
  var blockSize = 10;

  const LEFT = 37;
  const UP = 38;
  const RIGHT = 39;
  const DOWN = 40;

  var keyPressed = DOWN;


  //setInterval(what you will do, how often you will do it);
  setInterval(gameLoop, 1000);

  //function to move snake
  function gameLoop(){
      //call drawSnake function
      clearCanvas();
      moveSnake();
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

        }else if (keyPressed === RIGHT){
            
        }else if (keyPressed === LEFT){
            
        }
        //else it is the body of the snake
       }else {

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
    });
  }

  function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

}
