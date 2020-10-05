function draw() {
  var canvas = $("#canvas")[0];
  var ctx = canvas.getContext("2d");

  //just an array holding the x and y coordinates for all segments in our snake
  var snake = [
    { x: 50, y: 100 },
    { x: 50, y: 90 },
    { x: 50, y: 80 },
  ];

  //setting snakeWidth and snakeHeight both to 10
  var snakeWidth = (snakeHeight = 10);

  //setInterval(what you will do, how often you will do it);
  setInterval(gameLoop, 1000);

  //function to move snake
  function gameLoop(){
      //call drawSnake function
      drawSnake();
      console.log("game running")

  }

  function moveSnake() {
      
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
}
