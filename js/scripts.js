function wordObject() {
  var wordArray = ["apple", "cherry", "banana", "tomato", "strawberry", "watermelon", "grape", "blueberry", "marionberry", "grapefruit", "mango", "pineapple", "peach", "lime", "lemon"]

  var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

  return randomWord.split('');
}

function buttonPress(value, wordArray) {
  var index = wordArray.indexOf(value);
  var solved = [];
  while (index != -1) {
    solved.push(index);
    index = randomWordLettersArray.indexOf(value, index + 1);
  }
  return solved;
}


// var allCorrectLetters = [];
// var correctLetter = lettersString.indexOf(userLetter);
// while (userLetter != -1) {
//   indices.push(correctLetter);
//   correctLetter = randomWordLettersArray.indexOf(userLetter, correctLetter + 1);
// }

function testTheLetter () {

  var userLetter = document.getElementById('value').value;
  if (userLetter === correctLetter ) {
    return true;
  }
}

var theWord = wordObject();
$(document).ready(function() {
  $("button").click(function() {

    buttonPress($(this).value, theWord);

    //if there are more than X misses, end game
    //otherwise update list

    //disable button





  event.preventDefault();
  });
});
