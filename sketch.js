var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstacles;
var s;
var passedFinish;
var form, player, game;

var cars, car1, car2, car3, car4, gold, silver, bronze;
var i, track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  f2 = loadImage("images/f1.png");
s=loadSound("sounds/sliding.mp3")
gold = loadImage("images/gold.png");
silver = loadImage("images/silver.png");
bronze = loadImage("images/bronze.png");
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  obstacles.add(f1);
 }
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers === 0) {
     console.log("All players in");
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (finishedPlayers === 4) {
     game.update(2);
   }}
   if(gameState === 2 && finishedPlayers === 4){
     game.displayRanks();
   }
 
  
