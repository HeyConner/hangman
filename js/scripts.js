var wordArray = ["apple", "cherry", "banana", "tomato", "strawberry", "watermelon", "grape", "blueberry", "marionberry", "grapefruit", "mango", "pineapple", "peach", "lime", "lemon"]

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

var randomWordLettersArray = randomWord.split()

// function search
// for (i = 0; i < randomWordLettersArray.length; i++)
//   if (userLetter === i) {
//     return "This letter is found in the word!"
//   } else {
//     return "This letter is not found in the word"
//   }

var allCorrectLetters = []
var correctLetter = randomWordLettersArray.indexOf(userLetter);
while (userLetter != -1) {
  indices.push(correctLetter);
  correctLetter = randomWordLettersArray.indexOf(userLetter, correctLetter + 1);
}

function testTheLetter () {
  var userLetter = document.getElementById('value').value;
  if (order === correctLetter ) {
    return true;
  }
}



$(document).ready(function() {
    $("button").click(function() {
      var userLetter = $(this).val();






  event.preventDefault();
  });
});
