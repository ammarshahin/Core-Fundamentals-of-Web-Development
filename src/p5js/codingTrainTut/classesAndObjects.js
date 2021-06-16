/**
 * @file classesAndObjects.js
 * @author Ammar Shahin (Ammar0Shahin@gmail.com)
 * @brief
 * @version 0.1
 * @date 2021-01-08
 *
 * @copyright Copyright (c) 2021
 *
 */

const width = 700;
const hight = 400;

let array = [];
let arraySize = 10;
speed = 10;
let pushCount = 0;
let spliceCount = 0;
let bubble;

function preload() {
  bubble = loadImage("src/p5js/Images/bubble.jpg");
}

function setup() {
  createCanvas(width, hight);
  for (let index = 0; index < arraySize; index++) {
    array[index] = new Bubble(
      random(10, 600), // xPos
      random(10, 600), // yPos
      random(10, 20), // size
      speed, // speed
      random(50, 255) // color
    );
  }
}

function draw() {
  background(255);
  array.forEach((x) => {
    x.move();
    x.show();
  });

  noOverLap();
}

function mousePressed() {
  for (let index = 0; index < arraySize; index++) {
    if (array[index].contains(mouseX, mouseY)) {
      array.splice(index, 1);
      index--;
      let temp = new Bubble(
        random(10, 600), // xPos
        random(10, 600), // yPos
        random(10, 20), // size
        speed, // speed
        random(0, 255) // color
      );
      array.push(temp);
    }
  }
}

function noOverLap() {
  /* no overlap between circles */
  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = i + 1; j < arraySize; j++) {
      let xPos = array[j].x_position_get();
      let yPos = array[j].y_position_get();
      if (array[i].contains(xPos, yPos)) {
        console.log(i, j);
        console.log(count);
        i = 0;
        j = 0;
        array.splice(j, 1);
        spliceCount++;
        let temp = new Bubble(
          0, // xPos
          random(10, 600), // yPos
          random(10, 20), // size
          speed, // speed
          random(0, 255) // color
        );
        array.push(temp);
        pushCount++;
        if (pushCount >= 100) {
          return;
        }
      }
    }
  }
  // console.log(pushCount);
  // console.log(spliceCount);
}
