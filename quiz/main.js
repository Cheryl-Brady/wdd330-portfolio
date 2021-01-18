// THIS GOES WITH QUIZ NINJA!

const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

function start(quiz){
    //initialize score
    let score = 0; 

    // main game loop (example of a FOR-OF loop)
    for(const [question, answer] of quiz){
        const response = ask(question);
        check(response, answer);
    }

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    // !! REMEMBER TO USE BACKTICKS ` FOR STRINGS WITH STRING LITTERALS IN THEM!!!

    function check(response, answer){
        if(response === answer){
            alert('Correct!');
            score++;
        } else{
            alert(`Wrong, the correct answer is ${answer}.`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}.`);
    }
}
start(quiz);