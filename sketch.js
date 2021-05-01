var canvas;
var music;
var ball,edges;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

block1 = createSprite(0,580,360,30);
block1.shapeColor="blue";
block2 = createSprite(295,580,200,30);
block2.shapeColor="yellow";
block3 = createSprite(515,580,200,30);
block3.shapeColor="pink";
block4 = createSprite(740,580,220,30);
block4.shapeColor="green";

ball= createSprite(random(20,750),100,40,40);
ball.shapeColor="white";

ball.velocityX=5;
ball.velocityY=7;


}

function draw() {
    background(rgb(169,169,169));
    
    edges=createEdgeSprites();

    ball.bounceOff(edges);


    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor="blue";
        music.play();

    }
    if(block2.isTouching(ball)){
     ball.shapeColor="yellow";
     ball.velocityX=0;
     ball.velocityY=0;
    music.stop();

    }

    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor="pink"
    }
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor="green"
    }
drawSprites();
}
