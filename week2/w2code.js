// WEEK 2 PRACTICE CODE

// Function Declarations
function hello(){
    console.log('Hello World!');
}
        
// Function Expressions - anonymous function
const goodbye = function(){
    console.log('Goodbye World!');
}

// Function Expressions - a named function
const bye = function bye(){
    console.log('Bye-bye!');
}

// Return Values
function howdy(){
    return 'Howdy World!';
}

// Variable numbers of arguments - the arguments variable
function arguments(){
    return arguments;
}

// A better option is to use the rest operator
// (The actual operator is the 3 dots)
function rest(...args){
    for(arg of args){
        console.log(arg);
    }
}

// Example mean function
function mean(...values){
    let total = 0;
    for(const value of values){
        total += value;
    }
    return total/values.length;
}

// Default parameters examples
function hello(name='World'){
    console.log(`Hello ${name}!`);
}

// If mixing a default parameter with a non-default,
// non-default parameters ALWAYS go first!
function discount(price, amount=10){
    return price*(100-amount)/100;
}

// Arrow functions
const square = x => x * x; //single parameters do not need ()
const add = (x, y) => x + y; //multi parameters need to be in ()
const hello = () => alert('Hello World!'); //no parameters need empty ()

// CALLBACKS - a function that is passed as an argument to another function
// the callback is provided as a paramenter and then invoked inside the body.
function sing(song, callback){
    console.log(`I'm singing along to ${song}.`);
    callback();
}