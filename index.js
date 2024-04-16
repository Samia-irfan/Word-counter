#! /usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence",
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`The word count of your sentence is ${words.length}`);
