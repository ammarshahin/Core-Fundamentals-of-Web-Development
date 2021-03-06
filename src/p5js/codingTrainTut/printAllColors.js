/**
 * @file printAllColors.js
 * @author Ammar Shahin (Ammar0Shahin@gmail.com)
 * @brief
 * @version 0.1
 * @date 2021-01-08
 *
 * @copyright Copyright (c) 2021
 *
 */

let indexR = 0;
let indexB = 0;
let indexG = 0;
let step = 10;

function setup() {
  createCanvas(1500, 700);
}

function draw() {
  background(255);
  circle(200, 200, 200);

  fill(indexR, indexG, indexB);
  console.log(indexR, indexG, indexB);

  if (indexB >= 255) {
    indexB = 0;
    if (indexG >= 255) {
      indexG = 0;
      if (indexR >= 255) {
        indexR = 0;
      } else {
        indexR += step;
      }
    } else {
      indexG += step;
    }
  } else {
    indexB += step;
  }
}
