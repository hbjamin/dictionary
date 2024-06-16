class Button {
  constructor(x,y,w,h,letter) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.letter = letter;
    this.color = color(255);
    this.letterColor = color(0);
  }
  
  display() {
    // Display background
    fill(this.color);
    stroke(220)
    //stroke(color(80,0,0));
    strokeWeight(4);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h,5,5,5,5);
    // Display letter
    fill(this.letterColor);
    stroke(color(0));
    strokeWeight(0);
    if (this.letter=='ENTER' || this.letter=='DELETE') {
      textSize(12);
    } else {
      textSize(20);
    }
    text(this.letter,this.x,this.y);
  }
  
  getLetter() {
    return this.letter;
  }
  
  getX() {
    return this.x;
  }
  
  getY() {
    return this.y;
  }
  
  getW() {
    return this.w;
  }
  
  getH() {
    return this.h;
  }
  
  changeColor(c) {
    this.color = color(c);
    this.letterColor = color(255);
  }
}
