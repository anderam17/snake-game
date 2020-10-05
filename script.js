function draw() {
    var canvas = $('#canvas')[0];
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(50, 100, 10, 10);
    }
  }