//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dog.loadImage();
  happyDog.loadImage();
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database(); 
  dog = new Dog();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  drawSprites();
  //add styles here
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(dogHappy);
}

textSize(h2);
fill("orange");
stroke("purple");

dog.display();
happyDog.display();

}

function readStock(data){
  foodS=data.val();
}


function writeStock(x){


database.ref('/').update({
  Food:x
})

}


