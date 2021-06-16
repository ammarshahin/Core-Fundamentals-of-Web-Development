const width = 600;
const height = 600;

let spaceShip;
let enemies = [];

function setup() {
  createCanvas(width, height);
  spaceShip = new SpaceShip();
  for (let index = 0; index < width / 20; index++) {
    enemies[index] = new Enemy(index * 30, 0, 0, 20);
  }
}

function draw() {
  background(0);
  spaceShip.show();
  spaceShip.move();
  for (let index = 0; index < enemies.length; index++) {
    enemies[index].show();
    enemies[index].move();
  }

  for (let index = 0; index < enemies.length; index++) {
    enemies[index].show();
    enemies[index].move();
  }
}

function keyPressed() {
  if (key == " ") {
    drops.push(new Drop(spaceShip.xPos_get()));
  }

  if (keyCode === LEFT_ARROW) {
    spaceShip.SetDirection(-1);
  } else if (keyCode === RIGHT_ARROW) {
    spaceShip.SetDirection(1);
  }
}

function keyReleased() {
  spaceShip.SetDirection(0);
}
