var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImage;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    sound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
     
	sound.play();
 
	//create fairy sprite and add animation for fairy

	fairy = createSprite(100,497,20,20);
	fairy.addAnimation("fairyFlying",fairyImage);
	fairy.scale = 0.2;

	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

 

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(fairy.x > 535){
	  fairy.velocityX = 0;
	  fairy.velocityY = 0;

	
  }

  if(star.y > 470 && starBody.position.y ){
	Matter.Body.setStatic(starBody,true);
  }

  if(keyDown(RIGHT_ARROW)){
	fairy.velocityX=6
}else if (keyDown(LEFT_ARROW)){
	fairy.velocityX=-6
}else if (keyDown(DOWN_ARROW)){
	star.velocityY=3
}

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
