/* */

function konamiCode(cb) {
  var input = '';
  var key = '3838404037393739666513';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

konamiCode(function () {
    document.body.style.backgroundImage = "url('./assets/gdimpbg.jpg')";
    document.getElementById("container").style.display = "inline";
    document.getElementById("canvas").style.display = "inline-block";
    document.getElementById("canvas").width = window.innerWidth;
    document.getElementById("canvas").height = window.innerHeight;
    draw();

})

function showFrog() {
    document.getElementById("frog").style.display = "inline";
}

/* Bouncing frog */
var ctx = null;
var x_icon = 0;
var y_icon = 0;
var stepX = 3;
var stepY = 3;
var size_x = frog.width;
var size_y = frog.height;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var anim_img = null;
      
function draw() {
        var canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        anim_img = new Image(size_x, size_y);
        anim_img.onload = function() { setInterval('myAnimation()', 10); }
        anim_img.src = 'https://i.imgur.com/Wnqnl0O.jpg';
}

function myAnimation() {
  ctx.clearRect(0, 0, windowWidth, windowHeight);
       if (x_icon < 0 || x_icon > windowWidth - size_x) {stepX = -stepX; }
       if (y_icon < 0 || y_icon > windowHeight - size_y) {stepY = -stepY; }
          x_icon += stepX;
          y_icon += stepY;
       ctx.drawImage(anim_img, x_icon, y_icon);
}

  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }