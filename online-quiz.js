class Quiz {
  constructor(questions) {
    this.questions = questions;
  }

  start() {
    let score = 0;
    for (const question of this.questions) {
      console.log(question.text);
      console.log("Options:");
      for (const option of question.options) {
        console.log(option);
      }

      const userAnswer = prompt("Enter the number of your answer: ");

      if (userAnswer === question.correct) {
        console.log("Correct!\n");
        score++;
      } else {
        console.log(
          `Incorrect! The correct answer is ${
            question.options[question.correct]
          }\n`
        );
      }
    }

    console.log(`Your score: ${score} out of ${this.questions.length}`);
  }
}

class Question {
  constructor(text, options, correct) {
    this.text = text;
    this.options = options;
    this.correct = correct;
  }
}

const questions = [
  new Question("What is 2 + 2?", ["1", "3", "4", "5"], "2"),
  new Question(
    "What is the capital of France?",
    ["Madrid", "Berlin", "Paris", "Rome"],
    "2"
  ),
  // Add more questions here
];

const quiz = new Quiz(questions);
quiz.start();
