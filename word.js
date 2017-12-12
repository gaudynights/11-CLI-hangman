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
      // console.log(this.letters);
  };

  Word.prototype.print = function() {
      var display = "";
      for (var p = 0; p < this.letters.length; p++) {
          display += this.letters[p].printLetter();
      }
      console.log(display);
      return display;

  };

  Word.prototype.checkLetter = function(letter) {
      this.letterFound = false;
      this.letterWrong = true;
      var letter = letter.toLowerCase();
      if (this.guesses.indexOf(letter) > 0) {
          this.letterFound = true;
      } else {
          this.guesses.push(letter);
          for (var i = 0; i < this.letters.length; i++) {
              if (this.letters[i].letter.toLowerCase() == letter) {
                  this.letterWrong = false;
                  this.letters[i].show = true;
              }
          }
          if (this.letterWrong) {
              this.numGuessesRemaning--;
          }
      }
  };



  module.exports = Word;