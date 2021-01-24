// THIS GOES WITH QUIZ NINJA!

const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" }
];

const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        //new main game loop
        for(const question of this.questions){
            this.question = question;
            this.ask();
        }
        //end of main game loop
        this.gameOver;
        view.hide(view.start);
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
        const response = prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            alert('Correct!');
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result,`Wrong. The correct answer is ${answer}`, {'class':'wrong'});
            alert(`Wrong. The correct answer is ${answer}.`);
        }
    },
    gameOver(){
        view.render(view.info,`Game Over.  You scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
    }
}

//Chapter 6 - View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    }
};

//Chapter 7 - adding an event listener
view.start.addEventListener('click', ()=> game.start(quiz), false);


// WEEK 2 QUIZ NINJA CODE
// function start(quiz){
//     //initialize score
//     let score = 0; 

//     // main game loop (example of a FOR-OF loop)
//     for(const [question, answer] of quiz){
//         const response = ask(question);
//         check(response, answer);
//     }

//     gameOver();

//     // function declarations
//     function ask(question){
//         return prompt(question);
//     }

//     // !! REMEMBER TO USE BACKTICKS ` FOR STRINGS WITH STRING LITTERALS IN THEM!!!

//     function check(response, answer){
//         if(response === answer){
//             alert('Correct!');
//             score++;
//         } else{
//             alert(`Wrong, the correct answer is ${answer}.`);
//         }
//     }

//     function gameOver(){
//         alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}.`);
//     }
// }

// start(quiz);