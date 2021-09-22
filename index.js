
var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

var userName = readLineSync.question(chalk.underline.cyanBright.bold('What is your name?\n'));
console.log(chalk.underline.cyanBright.bold('welcome ' + userName + " let's play this quiz"));


// function
function play(question, answer){
var quesAns = readLineSync.question(question);
console.log(chalk.underline.yellowBright.italic('You answered: ' + quesAns));
if(quesAns === answer){
  console.log(chalk.underline.greenBright.italic('right answer'));
  score = score + 1;
}
else{
  console.log(chalk.underline.redBright.italic('wrong answer'));
}

console.log(chalk.underline.cyanBright.italic('Score: ' + score));

}

// objects
var questionOne = {
  question: chalk.underline.magentaBright.italic('How many days do we have in a week?\n a: 4 \n b: 6 \n c: 5 \n d: 7\n'),
  answer: 'd'
}

var questionTwo = {
  question: chalk.underline.magentaBright.italic('Which animal is known as the Ship of the Desert? \n a: lion \n b: dog \n c: elephant \n d: camel\n'),
  answer: 'd'
}
var questionThree = {
  question: chalk.underline.magentaBright.italic('How many sides are there in a triangle? \n a: 1 \n b: 2 \n c: 3 \n d: 4\n'),
  answer: 'c'
}
var questionFour = {
  question: chalk.underline.magentaBright.italic('Which month of the year has the least number of days? \n a: Jan \n b: Feb \n c: Mar \n d: Apr\n'),
  answer: 'b'
}
var questionFive = {
  question: chalk.underline.magentaBright.italic('Which is the largest of all sharks?\n a: Great White Shark \n b: Whale Shark \n c: Bull Shark \n d: Tiger Shark \n'),
  answer: 'b'
}
var questionSix = {
  question: chalk.underline.magentaBright.italic('What unusual thing can the bull shark do? \n a: Survive in Fresh Water \n b: Survive out of water \n c: Eat Seaweed \n d: Talk \n'),
  answer: 'a'
}

const highScore = [
{
name: 'aryan',
score: '6'
},
{
name: 'deepak',
score: '5'
}
]

// array of object

const questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

for (let i = 0; i < highScore.length; i++) {
	console.log(chalk.italic(highScore[i].name + ' : ' + highScore[i].score)); 
}

calculateScore()

function calculateScore(){
if(highScore[0].score < score){
  console.log('you score higher than aryan, send me the screenshot I will update it');
}
else if(highScore[1].score < score){
  console.log(chalk.yellow.bold('you score higher than deepak, send me the screenshot, I will update it'));
}
else if((highScore[1].score == score) || (highScore[1].score == score)){
console.log(chalk.yellow.bold(`You scored high`));
}
else{
  console.log(chalk.italic.red('you loose'));
}

}