// THIS GOES WITH QUIZ NINJA!


// *** THIS DIDNT WORK ***
// const url = 'http://spbooks.github.io/questions.json';
// fetch(url)
// .then(res => res.json())
// .then(quiz => {
//     view.start.addEventListener('click', () => game.start(quiz.questions), false);
//     view.response.addEventListener('click', (event) => game.check(event), false);
// });

function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" }
];

const game = {
    start(quiz){
        console.log('start() invoked');
        this.secondsRemaining = 20;
        this.timer = setInterval(this.countdown, 1000);
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
        },
    countdown() {
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        if(game.secondsRemaining < 0) {
            game.gameOver();
        }
    },
    ask(name){
        console.log('ask() invoked');
        if(this.questions.length > 0) {
            shuffle(this.questions);
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
        } else {
            this.gameOver();
        }
    },
    check(event){
        console.log('check(event) invoked');
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result,`Wrong. The correct answer is ${answer}.`, {'class':'wrong'});
        }
        view.resetForm();
        this.ask();
    },
    gameOver(){
        console.log('gameOver() invoked');
        view.render(view.info,`Game Over.  You scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
        clearInterval(this.timer);
    }
};

//Chapter 6 - View Object
const view = {
    timer: document.querySelector('#timer strong'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
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
    },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        this.resetForm();
    },
    resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

//Event listeners
view.start.addEventListener('click', ()=> game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);


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