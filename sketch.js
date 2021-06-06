var backgroundImg
var manImg, man

function setup() {

  createCanvas(800,600);

  man = createSprite(200,400)
  man.addAnimation("running",manImg)
  man.scale = 0.3

}

function preload(){
  backgroundImg = loadImage("Images/background.jpg")
  manImg = loadAnimation("Images/man1.png","Images/man2.png","Images/man3.png","Images/man4.png","Images/man5.png","Images/man6.png","Images/man7.png","Images/man8.png","Images/man9.png","Images/man10.png")
}

function draw() {

 

  background(backgroundImg);  

  
  drawSprites();
}