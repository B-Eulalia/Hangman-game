const wordToComplete = [];
const list = ["alfabeticeste", "electrocardiograma", "Bibliologie", "Neologism", "Licarire", "Pneumatic", "Homodiegetic", "Nostalgie", "Incapabil"];
let listLength = list.length;
let word;

function gamePlay() {
  let x = Math.floor((Math.random() * listLength) + 1);
  word = list[x];
  let wordLength = word.length;
  let line = "__";
  wordToComplete[0] = word[0];
  for(let i = 1; i < wordLength - 1; ++i) {
    wordToComplete[i] = line;
  }
  wordToComplete[wordLength - 1] = word[wordLength - 1];
  document.getElementById("wordToComplete").innerHTML = wordToComplete.join(' '); 
  document.getElementById("btn").disabled = true;
}

let life = 6;
let spacesFilled = 0;
const listPressedLetters = [];
document.getElementById("life").innerHTML = life;

function whichButton(event) {
  let letterPressed = event.key;
  let found = listPressedLetters.includes(letterPressed);
  if (found == false) {
    listPressedLetters.push(letterPressed);
    let letterNotFound = 0;
    let numberSpaces = word.length - 2;
    for (let i = 1; i < word.length - 1; ++i) {
      if (letterPressed == word[i]) {
        ++spacesFilled;
        wordToComplete[i] = letterPressed ;
        document.getElementById("wordToComplete").innerHTML = wordToComplete.join(' ');
      } else {
        ++letterNotFound;
      }
    }
    let space = " ";
    document.getElementById("lettersEntered").innerHTML += letterPressed + space;
    if (letterNotFound == numberSpaces) {
      --life;
    }
    document.getElementById("life").innerHTML = life;
    if (life == 0) {
      document.getElementById("displayResult").innerHTML = "Game Over";
      let h1 = document.getElementById("displayResult");
      h1.style.color = "red";
      document.getElementById("lettersEntered").remove();
    }
    if (spacesFilled == numberSpaces) {
      document.getElementById("displayResult").innerHTML = "Game won"; 
      let h1 = document.getElementById("displayResult");
      h1.style.color = "green";
      document.getElementById("lettersEntered").remove();
    }
  }
}
