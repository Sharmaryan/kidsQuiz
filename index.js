var readLineSync = require('readline-sync');

var score = 0;

var userName = readLineSync.question('What is your name?');
console.log('welcome ' + userName + " let's play this quiz");


// function
function play(question, answer){
var quesAns = readLineSync.question(question);
console.log('You answered: ' + quesAns);
if(quesAns === answer){
  console.log('right answer');
  score = score + 1;
}
else{
  console.log('wrong answer');
}

console.log('Score: ' + score);

}

// objects
var questionOne = {
  question: 'How many days do we have in a week?\n a: 4 \n b: 6 \n c: 5 \n d: 7\n',
  answer: 'd'
}

var questionTwo = {
  question: 'Which animal is known as the Ship of the Desert? \n a: lion \n b: dog \n c: elephant \n d: camel\n',
  answer: 'd'
}
var questionThree = {
  question: 'How many sides are there in a triangle? \n a: 1 \n b: 2 \n c: 3 \n d: 4\n',
  answer: 'c'
}
var questionFour = {
  question: 'Which month of the year has the least number of days? \n a: Jan \n b: Feb \n c: Mar \n d: Apr\n',
  answer: 'b'
}

// array of object

const questions = [questionOne, questionTwo, questionThree, questionFour];

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  // console.log(currentQuestion)
  play(currentQuestion.question, currentQuestion.answer);
}