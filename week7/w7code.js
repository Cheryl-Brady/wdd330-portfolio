// The length method in functions - returns the # of parameters:
function square(x) {
    return x*x;
}
console.log(square.length);

// The call() method can be used to set the value of 'this' inside a
// function to an object that is provided as the first argument.
function sayHello() {
    return `Hello, my name is ${ this.name }`;
}

const clark = { name: 'Clark'};
const bruce = { name: 'Bruce'};

console.log(sayHello.call(clark));
// << Hello, my name is Clark
console.log(sayHello.call(bruce));
// << Hello, my name is Bruce


// If the function that's called requires any parameters, these need to 
// be provided as arguments AFTER the first argument, which is always
// the value of 'this'.  Example:
function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}
console.log(sayHello.call(clark, 'How do you do'));
// << 'How do you do, my name is Clark'
console.log(sayHello.call(bruce));
// << 'Hello, my name is Bruce'


//Immediately Invoked Function Expression (IFFE "Iffy")
// A useful way of performing a task while keeping any variables wrapped up
// within the scope of the function. 
// This is done by placing () at the end of the funciton definition. The function
// also has to be made into an expression, which is done by placing the whole
// declaration inside of () - example:
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();
// << 'Hello World'

//Example of a Recursive Function
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
