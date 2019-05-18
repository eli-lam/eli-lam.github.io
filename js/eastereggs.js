/*Konami Code*/

function konamiCode(cb) {
  var input = "";
  var key = "3838404037393739666513";
  document.addEventListener("keydown", function(e) {
    input += "" + e.keyCode;
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = "" + e.keyCode;
  });
}

konamiCode(function() {
  document.body.style.backgroundImage = "url('./assets/gdimpbg.jpg')";
  document.getElementById("container").style.display = "inline";
  document.getElementById("canvas").style.display = "inline-block";
  document.getElementById("canvas").width = window.innerWidth;
  document.getElementById("canvas").height = window.innerHeight;
  draw();
});

/* Bouncing frog */
var ctx = null;
var anim_img = null;

var x = Math.floor(Math.random() * 100 + 1);
var y = Math.floor(Math.random() * 100 + 1);
var xspeed = 3;
var yspeed = 3;
var size_x = frog.width;
var size_y = frog.height;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

window.addEventListener("resize", function() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
});

function draw() {
  var canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  anim_img = new Image(size_x, size_y);
  anim_img.onload = function() {
    setInterval("bounce()", 8);
  };
  anim_img.src = "./assets/frog.jpg";
}

function bounce() {
  ctx.clearRect(0, 0, windowWidth, windowHeight);
  ctx.drawImage(anim_img, x, y);
  x = x + xspeed;
  y = y + yspeed;

  if (x + size_x >= windowWidth) {
    xspeed = -xspeed;
    x = windowWidth - size_x;
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
  }

  if (y + size_y >= windowHeight) {
    yspeed = -yspeed;
    y = windowHeight - size_y;
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
  }
}
