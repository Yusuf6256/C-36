var database;
var gameState = 0;
var playerCount = 0;
var form,player,game;



function setup(){
  
  
  createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.Start();
  

  
}

function draw(){
  
  
}

