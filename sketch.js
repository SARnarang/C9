var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(100,100,50,50)
}

function draw() 
{
  background(30);
  if (keyIsDown(LEFT_ARROW) || keyDown("A")) {
     ball.x = ball.x-2
  }
  else if (keyIsDown(RIGHT_ARROW) || keyDown("D")) {
    ball.x = ball.x+2
 }
 else if (keyIsDown(UP_ARROW)) {
 ball.width = ball.width - 2
 ball.height = ball.height - 2

}
else if (keyIsDown(DOWN_ARROW)) {
  ball.width = ball.width + 2
  ball.height = ball.height + 2
}
ball.shapeColor = "red"
drawSprites()
}




