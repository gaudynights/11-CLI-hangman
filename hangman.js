var inquirer=require("inquirer");
var answerList=require("./answer-list.js");
var Word=require("./word.js");

var a;
var newWord;
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
		} else if (newWord.isComplete()==true){
			console.log("you win!");
			startGame();
		} 

		else if (newWord.numGuessesRemaning<1){
			console.log("you lose! It was "+newWord.currentWord+", obviously!\n"+"░░░░░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░░░░░░\n ░░░░░░░░░░░░▄████████████████▄░░░░░░░░░░\n ░░░░░░░░░░▄██▀░░░░░░░▀▀████████▄░░░░░░░░\n ░░░░░░░░░▄█▀░░░░░░░░░░░░░▀▀██████▄░░░░░░\n ░░░░░░░░░███▄░░░░░░░░░░░░░░░▀██████░░░░░\n ░░░░░░░░▄░░▀▀█░░░░░░░░░░░░░░░░██████░░░░\n ░░░░░░░█▄██▀▄░░░░░▄███▄▄░░░░░░███████░░░\n ░░░░░░▄▀▀▀██▀░░░░░▄▄▄░░▀█░░░░█████████░░\n ░░░░░▄▀░░░░▄▀░▄░░█▄██▀▄░░░░░██████████░░\n ░░░░░█░░░░▀░░░█░░░▀▀▀▀▀░░░░░██████████▄░\n ░░░░░░░▄█▄░░░░░▄░░░░░░░░░░░░██████████▀░\n ░░░░░░█▀░░░░▀▀░░░░░░░░░░░░░███▀███████░░\n ░░░▄▄░▀░▄░░░░░░░░░░░░░░░░░░▀░░░██████░░░\n ██████░░█▄█▀░▄░░██░░░░░░░░░░░█▄█████▀░░░\n ██████░░░▀████▀░▀░░░░░░░░░░░▄▀█████████▄\n ██████░░░░░░░░░░░░░░░░░░░░▀▄████████████\n ██████░░▄░░░░░░░░░░░░░▄░░░██████████████\n ██████░░░░░░░░░░░░░▄█▀░░▄███████████████\n ███████▄▄░░░░░░░░░▀░░░▄▀▄███████████████\n");
			startGame();
			
		} else {
			console.log(newWord.numGuessesRemaning + " guesses left. guesses so far: "+newWord.guesses);
			Prompt();
		}
	})
};

// function newGame(){
// 	newWord= new Word("candy cane")
// }


function startGame(){
	console.log("Welcome to hangman, Greatest Actor of All Time edition! Name this movie!");
a=Math.floor(Math.random() * 77); 
// console.log(a);
 newWord= new Word(answerList[a]);
// console.log(answerList[a]);
Prompt();
}

startGame();

// function guess(){
	// console.log(newWord)
// }