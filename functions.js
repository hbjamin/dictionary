function displayScreen() {
  background(color(80,0,0));
  //Title
  textFont('Georgia');
  textSize(50);
  textAlign(CENTER,CENTER);
  fill(255);
  // stroke(color(0));
  // strokeWeight(8)
  text('ENGLISH',canvasX/2,canvasY/8);
  text('DICTIONARY',canvasX/2,canvasY/8+50);

  // Display search window
  strokeWeight(0);
  fill(255);
  rectMode(CENTER);
  rect(canvasX/2,canvasY/2-25,250,200);

  // Updating colors of display
  if (!check) {
    backgroundColor = color(220);
    textColor = color(0);
  } else {
    if (isWord()) {
      backgroundColor = color(0,200,0);
      textColor = color(255);
    } else {
      backgroundColor = color(200,0,0);
      textColor = color(255);
    }
  }
  fill(backgroundColor);
  rect(canvasX/2,canvasY/2-110,250,30);
  // Display word
  textSize(15);
  textAlign(LEFT);
  fill(textColor)
  text(word,90,190)

  // display guesses
  fill(0);
  if (word.length>0) {
    for(var i=0;i<guesses.length;i++) {
      if (i==8) {
        break;
      }
      text(guesses[i],90,220+20*i);
    }
  }
  fill(255);
  rect(canvasX-40,20,50,20,5,5,5,5)
  fill(0);
  textSize(12);
  textAlign(CENTER);
  text('STATS',canvasX-40,20)    
}

function printStats() {
  textAlign(LEFT);
  fill(0)
  var totalWords = 0;
  for (var i=0;i<dictionary.length;i++) {
    fill(0)
    text(dictionary[i].length+" words start with "+alphabet[i],20,20*i+50);  
    totalWords+=dictionary[i].length;
    printCubes(canvasX/2,20*i+50,dictionary[i].length)
  }
  fill(0)
  text("This dictionary has "+totalWords+" words in it!",100,20);
  text('Where each     is equal to 5000 words',100,canvasY-20)
  rectMode(CENTER);
  rect(canvasX-40,20,50,20,5,5,5,5)
  fill(255);
  textAlign(CENTER,CENTER)
  text('EXIT',canvasX-40,20)
  printCubes(170,canvasY-20,500)
  
}

function printCubes(x,y,length) {
  var len = length/500;
  var num = Math.floor(len);
  var extra = len-num;
  fill(color(0,0,255))
  rectMode(CENTER);
  for (var i=0;i<num;i++) {
    rect(x+i*10,y,8,8)
  }
  rectMode(CORNER)
  rect(x+num*10-4,y-4,8*extra,8)
}

function isWord() {
  //check = false;
  var index = alphabetIndex(word[0]);
  for (var i=0;i<dictionary[index].length;i++) {
    if (word==dictionary[index][i]) {
      return true;
    }
  }
  return false;
}

function updateGuesses() {
  guesses = [];
  var index = alphabetIndex(word[0]);
  // Just display first 5 if word is length 1
  if (word.length==1) {
    for (var i=0;i<10;i++) {
      guesses.push(dictionary[index][i]);
    }
  } else {
    var found = false;
    //print(dictionary[index].length)
    for (var i=0;i<dictionary[index].length;i++) {
      //print(dictionary[index][i].slice(0,word.length-1))
      if (word==dictionary[index][i].slice(0,word.length)) {
        guesses.push(dictionary[index][i])
        found = true;
      }
      if (found && word!=dictionary[index][i].slice(0,word.length)) {
        break;
      }
    }
  }
  //Make sure first guess isn't the same as the word
  if (guesses.length>0) {
    if (word==guesses[0]) {
      guesses = guesses.slice(1,guesses.length);
    }
  }
  
  // Make sure first two guesses aren't the same
  for (var i=0;i<guesses.length-1;i++) {
    if (guesses[i]==guesses[i+1]) {
      guesses.splice(i,1);
    }
  }
}

function alphabetIndex(letter) {
  for (var i=0;i<alphabet.length;i++) {
    if (letter==alphabet[i]) {
      return i;
    }
  }
}

function storeWords() {
  dictionary.push(aWords);
  dictionary.push(bWords);
  dictionary.push(cWords);
  dictionary.push(dWords);
  dictionary.push(eWords);
  dictionary.push(fWords);
  dictionary.push(gWords);
  dictionary.push(hWords);
  dictionary.push(iWords);
  dictionary.push(jWords);
  dictionary.push(kWords);
  dictionary.push(lWords);
  dictionary.push(mWords);
  dictionary.push(nWords);
  dictionary.push(oWords);
  dictionary.push(pWords);
  dictionary.push(qWords);
  dictionary.push(rWords);
  dictionary.push(sWords);
  dictionary.push(tWords);
  dictionary.push(uWords);
  dictionary.push(vWords);
  dictionary.push(wWords);
  dictionary.push(xWords);
  dictionary.push(yWords);
  dictionary.push(zWords);
}

function createKeyboard() {
  for (var i = 0; i < 10; i++) {
    if (i<10) {
      keyboard.push(new Button(40*i+20,450,40,60,row1[i]));
    }
    if (i<9) {
      keyboard.push(new Button(40*i+40,510,40,60,row2[i]));
    }
    if (i<7) {
      keyboard.push(new Button(40*i+80,570,40,60,row3[i]));
    }
  }
  keyboard.push(new Button(30,570,60,60,'ENTER'));
  keyboard.push(new Button(370,570,60,60,'DELETE'));
}

function displayKeyboard() {
  fill(220);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  rect(canvasX/2,canvasY-180/2,canvasX,185);
  for (var i = 0; i < keyboard.length; i++) {
    keyboard[i].display();
  }
}

function keyPressed() {
  if (key == 'Enter') {
    if (word.length>0) {
      check = true;
    }
  } else if (key == 'Backspace' && word.length>0) {
    word = word.slice(0,-1);
    check = false;
    if (word.length>0) {
      updateGuesses();
    }
  } else if (key == 'Tab') {
    if (guesses.length>0) {
      word = guesses[0]; 
      updateGuesses();
    }
  } else {
    for (var i=0;i<alphabet.length;i++) {
      if(key==alphabet[i]) {
        check=false;
        word += key;
        updateGuesses();
      }
    }
  }
}

function touchStarted() {
  for (var i = 0; i < keyboard.length; i++) {
    if (mouseX>keyboard[i].getX()-(keyboard[i].getW()/2) &&
        mouseX<keyboard[i].getX()+(keyboard[i].getW()/2) &&
        mouseY>keyboard[i].getY()-(keyboard[i].getH()/2) &&
        mouseY<keyboard[i].getY()+(keyboard[i].getH()/2)) {
      if (keyboard[i].getLetter()!='ENTER' && 
         keyboard[i].getLetter()!='DELETE') {
        word += keyboard[i].getLetter();
        updateGuesses();
        check=false;
      } else if (keyboard[i].getLetter()=='ENTER') {
        if (word.length>0) {
          check = true;
        }
      } else if (keyboard[i].getLetter()=='DELETE' && word.length>0) {
        word = word.slice(0,-1);
        check = false;
        if (word.length>0) {
          updateGuesses();
        }
      }
    }
  }
  if (mouseX>336 && mouseX<386 && mouseY>12 && mouseY<32) {
    if (stats) {
      stats=false;
    } else {
      stats=true;
    }
  }
}

  
