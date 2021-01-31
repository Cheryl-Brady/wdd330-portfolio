// WEEK 4 PRACTICE CODE

//OOP in JS

//object literal notation:
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }    
}

//OOP - CONSTRUCTOR FUNCTION:
const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

//Create an instance of the dice constructor:
const redDice = new Dice();
console.log(redDice.sides);
console.log(redDice.roll());


//OOP - CLASS DECLARATIONS:
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

//Create an instance of the Dice CLASS, use the new operator:
const blueDice = new Dice(20);
console.log(blueDice);

/*The Class declaration works the same way as a constructor function, but the class
 declaration is preferred. */

 
//PROTOTYPAL INHERITANCE
//First create a new class:
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}.`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}

//Create a new turtle instance:
const leo = new Turtle('Leonardo');
console.log(leo);

//The variable leo points to an instance of the Turtle class.
console.log(leo.name);
console.log(leo.sayHi());

/* The Prototype Property is used to augment a class with extra
methods and properties after it has been created.
All classes and constructor functions have a prototype property
that returns an object. */

Turtle.prototype;
console.log(Turtle.prototype);

//Add new properties to the prototype by assignment:
Turtle.prototype.weapon = 'Hands';
console.log(Turtle.prototype.weapon);

//Add a method to the prototype:
Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
}

console.log(Turtle.prototype.attack);

/*Create a new Turtle instance and see the inheritance of the 
weapon property and attack() method from the Turtle.prototype object,
as well as receiving the name property and sayHi() method from 
the class declaration: */

const raph = new Turtle('Raphael');
console.log(raph.name);
// returns: Raphael
console.log(raph.sayHi());
//returns: Hi dude, my name is Raphael!
console.log(raph.weapon);
//returns: Hands
console.log(raph.attack());
//returns:  Feel the power of my Hands!

/* An object instance can overwrite any properties of methods from its
prototype by simply assigning a new value to them.  Example, we can give
our turtles their own weapons: */
leo.weapon = 'Katana Blades';
raph.weapon = 'Sai';

//These properties now become an 'own property' of the instance object.
console.log(leo);
console.log(raph);


