// WEEK 3 PRACTICE CODE

//Create an object:
let user = {
    name: "John",
    age: 30
};

//Create a method for the object:
user.sayHi = function() {
    console.log("Hello!");
}
user.sayHi();

//shorthand example:
user = {
    sayHi() {
        console.log("Hi!");
    }
};
user.sayHi();

//To access the object, a method can use the 'this' keyword.
// The value of 'this' is the object "before dot", the one used to call the method.
let user = {
    name: "Cheryl",
    age: 40,

    sayHi() {
        console.log(this.name);
    }
};
user.sayHi();

//The value of 'this' is evaluated during run-time, depending on the context.
//Example of the same function assigned to 2 different objects:
let user = { name: "Brooke"};
let admin = { name: "Kris"};

function sayHello() {
    console.log( this.name );
}

//same function used
//the ".f accesses the method"
user.f = sayHello;
admin.f = sayHello;

//These calls have a different value for 'this'
admin.f();
user.f();

/* Create an object calculator with 3 methods:
    - read() prompts for 2 values and saves them as object properties.
    - sum() returns the sum of saved values.
    - mul() multiplies saved values and returns the result. */
let calculator = {

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};
calculator.read();
console.log = calculator.sum();
console.log = calculator.mul();  //GETTING AN ERROR "PROMPT IS NOT DEFINED ON this.a = prompt"???

//Testing out array iteration methods:
//forEach
[1, 2, 3].forEach(function (item, index) {
    console.log(item, index);
  });

//map
const three = [1, 2, 3];
const doubled = three.map(function (item) {
  return item * 2;
});
console.log(three === doubled, doubled);

//more practice with objects and 'this'
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log(dice.roll());

//RegExp examples
const pattern = /[Jj][aeiou]v[aeiou]/;
console.log(pattern.test('JavaScript'));
console.log(pattern.test('jive'));
console.log(pattern.test('hello'));