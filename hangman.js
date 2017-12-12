var inquirer=require("inquirer");
var answerList=require("./answer-list.js");
var Word=require("./word.js");

// var currentWord="candy";





function Prompt(){
	console.log(newWord.print());
	inquirer.prompt([{
		name: "letter",
		type: "text",
		message: "Guess a letter!"
	}]).then(function(user){
		var letter =  user.letter;
		newWord.checkLetter(letter);
		if (newWord.letterFound===true){
			console.log("already guessed that!");
			Prompt();
		} else if (newWord.numGuessesRemaning<1){
			console.log("you lose! It was "+newWord.currentWord+", obviously!");
		} else {
			console.log(newWord.numGuessesRemaning + "guesses left. guesses so far")
		}
	})
};

// function newGame(){
// 	newWord= new Word("candy cane")
// }



var newWord= new Word("candy cane");
Prompt();



// function guess(){
	// console.log(newWord)
// }