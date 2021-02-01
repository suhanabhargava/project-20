var backgroundImg;
var cat , catImg1, catImg2, catImg3 , mouse , mouseImg1, mouseImg2 , mouseImg3;

function preload() {
    //load the images here
  backgroundImg = loadImage("images/garden.png");
  catImg1 = loadAnimation("images/cat1.png");
  catImg2 = loadAnimation("images/cat2.png","images/cat3.png" );
  catImg3 = loadAnimation("images/cat4.png");
  mouseImg1 = loadAnimation("images/mouse1.png");
  mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
  mouseImg3 = loadAnimation("images/mouse4.png");
  
  
  
  
  

}

function setup(){
    createCanvas(500,500);
    //create tom and jerry sprites here
 cat = createSprite(450,400,20,20);
 cat.addAnimation("sleeping",catImg1);
 cat.scale = 0.08;

 mouse = createSprite(100,400,20,20);
 mouse.addAnimation("standing",mouseImg1 );
 mouse.scale = 0.08;
}

function draw() {

    background(backgroundImg);

    //Write condition here to evalute if tom and jerry collide
  keyPressed();

  if (cat.x - mouse.x < (cat.width/2 - mouse.width/2) ) {
      cat.velocityX = 0;
      cat.addAnimation("cat",catImg3);
      cat.changeAnimation("cat");
      cat.scale = 0.1;
      cat.x = 40;

      mouse.addAnimation("mouse",mouseImg3);
      mouse.changeAnimation("mouse");
      mouse.scale = 0.08;
  }
 
    drawSprites();
}


function keyPressed(){
  
  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW) {

      cat.velocityX = -5;
      cat.addAnimation("running",catImg2);
      cat.changeAnimation("running");

      mouse.addAnimation("mouseRunning", mouseImg2);
      mouse.frameDelay = 20;
      mouse.changeAnimation("mouseRunning");
  }


}
