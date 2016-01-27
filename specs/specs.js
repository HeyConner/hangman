describe("wordObject", function() {
  it("creates a word object with a random word from our list and an array with all of the letters broken into separate strings", function() {
    var newGame = new wordObject ();
    expect(newGame.randomWord).to.be.a('string');
    expect(newGame.randomWordLettersArray).to.be.a('array');
  });
});

describe("randomWordLettersArray", function() {
  it("splits the random word string into an array of separate letters", function() {
  expect().to.be.a('array');
  });
});

describe("")
