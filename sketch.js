var dogImg, happyDogImg, dog, database, foodS, foodStock, lastFed, fedTime, foodObj, feed, addFood, food1, foodCount, milk, milkImg;

function preload() {
  dogImg = loadImage('dog.png');
  happyDogImg = loadImage('dog1.png');
  milkImg = loadImage('Milk.png');
}

function setup() {
  database = firebase.database();

  dog = createSprite(650, 250);
  dog.scale = 0.3;
  dog.addImage(dogImg);

  milk = createSprite(565, 300);
  milk.addImage(milkImg);
  milk.scale = 0.1;
  milk.visible = false;
  milk.rotation = 55;
  
  foodS = new Food();
  
  foodS.start();

  addFood = createButton("Add food");
  addFood.position(370, 70);
  addFood.mousePressed(addFoods);

  feed = createButton("Feed your Dog");
  feed.position(450, 70);
  feed.mousePressed(feedDog);

  canvas = createCanvas(800, 400);
}

function draw() {  
  background(46, 139, 87);

  foodS.display();

  drawSprites();
}

function feedDog() {
  foodS.getFoodStock();
  foodS.updateFedTime();

  if(foodCount === 0) {
    foodCount = 0;
    milk.visible = false;
    dog.addImage(dogImg);
  } else {
    foodS.updateFoodStock(foodCount - 1);
    milk.visible = true;
    dog.addImage(happyDogImg);
  }
}

function addFoods() {
 foodS.getFoodStock();

 foodS.updateFoodStock(foodCount + 1); 
}