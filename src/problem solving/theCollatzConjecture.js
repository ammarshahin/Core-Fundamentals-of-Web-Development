function calcSteps() {
  let largestStep = 0;
  let largestStepNum = 0;
  for (let index = 2; index < 10000000; index++) {
    let steps = 0;
    let num = index;
    while (num > 1) {
      steps++;
      num = isEven(num) ? applyEvenCalc(num) : applyOddCalc(num);
    }
    // console.log(`num ${index} took ${steps} steps`);
    if (steps > largestStep) {
      largestStep = steps;
      largestStepNum = index;
    }
    steps = 0;
  }

  console.log(
    `the largest steps num is ${largestStepNum} with ${largestStep} steps`
  );
}

function applyOddCalc(num) {
  return num * 3 + 1;
}

function applyEvenCalc(num) {
  return num / 2;
}

function isEven(num) {
  return num % 2 == 0 ? true : false;
}

calcSteps();
