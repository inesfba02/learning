//more strict on how rules are defined
//To run = node the file name.js
'use strict';

console.log('mousepad');
// calling console.log with the parameters of mousepad
// a parameter defines a system/sets conditions of the command

console.log(6>7);

if (6 > 7)
{
    console.log('6 is bigger than 7');
}
else
{
    console.log('7 is bigger than 6');
}

//let is a variable
let duck;
// undefined ^ declaring a variable
let quack = 'duck';
// defined ^ initialising a variable

let table = 'desk';
console.log(table);
table = 'chair';
console.log(table);

let peach = 'watermelon';
console.log(peach);
let boolean = true;
console.log(boolean);

let monitor = 420;
console.log(monitor);
monitor = monitor + 1;
monitor++;
monitor += 1;
console.log(monitor);

let mouse = 60.08;
console.log(mouse);
mouse++;
console.log(mouse);
mouse--;
console.log(mouse);

//array is an object
let array = [1, 2, 3, 4, 5];
console.log(array[0]);

let pencil = `make a drawing ${table}`;
console.log('make a drawing ' + table);

let object = {
    highlighter: 'green',
    pen: 'blue',
}
console.log(object.pen);
console.log(object.highlighter);

// amount
/*
Multiline comment 
    variable amount = 12, amount is in a separate scope
        let amount outside scope, access
            amount = 12 inside scope, no access
                NEEDS SAME SCOPE 
*/

let amount; 

{
    amount = 12;

    {
        let amountLength = 124; 
    }
    amountLength = 34545; //doesn't work
    console.log(amountLength);

}

console.log(amount);

/*
EXAMPLE: P/ = parent folder (first folder)
    P/Teaching = child folder (folder within a folder)
        let amount = global scope
        amount = 12 is child scope
*/

// dont use var. hoisted = moved to parent-most scope

