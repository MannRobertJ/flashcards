const flashcard = document.getElementById("flashcard");

const button = document.getElementById("button");

let questions = [
  ["True of false? The centre of the Earth is very hot", "True"],
  [
    "The cheetah is the fastest animal",
    "False, that honour goes to the peregrine falcon with a dive speed of 320km/h"
  ]
];

flashcard.innerText = questions[0][0];

let question = 0;
let showAnswer = false;
/* const clickButton = () => {
  if (question === questions.length - 1 && showAnswer === true) {
    question = 0;
    showAnswer = false;
    flashcard.innerText = questions[question][0];
  } else {
    if (showAnswer === false) {
      showAnswer = true;
      flashcard.innerText = questions[question][1];
    } else {
      showAnswer = false;
      question++;
      flashcard.innerText = questions[question][0];
    }
  }
}
 */

const clickButton = () => {
    if (showAnswer === false) {
        showAnswer = true;
        flashcard.innerText = questions[question][1];
      } else {
        showAnswer = false;
        question = Math.floor(Math.random() * questions.length);
        flashcard.innerText = questions[question][0];
      }
    }
 
  
function userFlash () {
    const userQuestion = document.getElementById('userQuestion').value;
    const userAnswer = document.getElementById('userAnswer').value;
    questions.push([userQuestion,userAnswer]);
    document.getElementById('userQuestion').value = null;
    document.getElementById('userAnswer').value = null;
}
