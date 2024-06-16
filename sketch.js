function setup() {
  createCanvas(canvasX, canvasY);
  storeWords();
  createKeyboard();
}

function draw() {
  if (!stats) {
    displayScreen();
    displayKeyboard();
  } else {
    background(255);
    printStats();
  } 
}

