describe("randomWord", function() {
  it("creates a list of words the computer can randomly select from for a new Hangman game ", function() {
  expect(randomWord).to.be.a('string');
  });
});

describe("randomWordLettersArray", function() {
  it("splits the random word string into an array of separate letters", function() {
  expect(randomWordLettersArray).to.be.a('array');
  });
});
