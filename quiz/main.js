// THIS GOES WITH QUIZ NINJA!

alert('Welcome to Quiz Ninja!');

const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

let score = 0; //initialize score

//const question = "What is Superman's real name?"
//const answer = prompt(question);

// example of a FOR-OF loop
for(const [question, answer] of quiz){
    const response = prompt(question);
    if(response === answer) {
        alert('Correct!');
        score++;
    } else{
        alert(`Wrong. The correct answer was ${answer}.`);
    }
}

// !! REMEMBER TO USE BACKTICKS ` FOR STRINGS WITH STRING LITTERALS IN THEM!!!

// At the end of the game, report the player's score
alert(`Game Over.  You scored ${score} point${score !== 1 ? "s" : ""}.`);