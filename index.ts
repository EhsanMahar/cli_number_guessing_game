#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWellcome to You! with Ehsan Mahar -Cli Number Guessing-Game\n");


const randomNumber=Math.floor(Math.random()* 5+1);

const answer=await inquirer.prompt([

{message:"Enter your guess number(Number limit is from 1 to 5)",type:"number",name:"guessedNumber"},


]);
if(answer.guessedNumber===randomNumber){
    console.log("Congratulations you win the Game!");
    
}
else{
    console.log("sorry you guessed the wrong number");
    
}

