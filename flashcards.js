const flashcard = document.getElementById("flashcard");

const button = document.getElementById("button");

const questions = [
  ["True of false? The centre of the Earth is very hot", "True"],
  [
    "The cheetah is the fastest animal",
    "False, that honour goes to the peregrine falcon with a dive speed of 322km/h"
  ]
];

flashcard.innerText = questions[0][0];

let question = 0;
let showAnswer = false;
const clickButton = () => {
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
};
