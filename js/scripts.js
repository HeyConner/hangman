var wordArray = ["apple", "cherry", "banana", "tomato", "strawberry", "watermelon", "grape", "blueberry", "marionberry", "grapefruit", "mango", "pineapple", "peach", "lime", "lemon"]
// var randomWord = wordArray[Math.floor(Math.random() * myArray.length)];

wordArray.prototype.randomWord = function (){
  return this[Math.floor(Math.random() * this.length)]
}
