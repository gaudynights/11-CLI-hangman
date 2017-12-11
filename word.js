  // * **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

  // constructs displayed thing - blanks and letters
  // check if the letters are in the word
  // tracks number of guesses
  //tracks arr of guessed letters

  var Letter = require("./letter.js");

  console.log("WORD reporting for duty");

  var Word = function(currentWord) {
      this.numGuessesRemaning = 10;
      this.currentWord = currentWord;
      this.letters = [];
      this.guesses = [];


      for (var i = 0; i < this.currentWord.length; i++) {
          this.letters.push(new Letter(this.currentWord[i]));
      
      };
    console.log(this.letters);
  };

  Word.prototype.print = function() {
      var display = "";
      for (var p = 0; p < this.letters.length; p++) {
          display += this.letters[p].printLetter
      }
      return display;
  };

Word("pizza");
// function testPrint(word){
// 	Word.print();
// };
// testPrint("candy");

  module.exports = Word;