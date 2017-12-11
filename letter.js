 //   * **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
 // doesnt check if the letters are in the word - word will do that
 // this one decides whether to show _ or letter

 console.log("LETTER reporting for duty");

 function Letter(letter) {
     this.letter = letter;
     if (this.letter == " ") {
         this.show = true;
     } else { this.show = false; }
 };

 Letter.prototype.printLetter = function() {
     if (this.show = true) {
         return this.letter;
     } else {
         return "_";
     }
 };

 module.exports = Letter;