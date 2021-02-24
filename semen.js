//more strict on how rules are defined
//To run = node the file name.js
'use strict';

console.log('duck');
// calling console.log with the parameters of duck
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

let sixnine = 'sex';
console.log(sixnine);
sixnine = 'tiddies';
console.log(sixnine);

let bum = 'poo';
console.log(bum);
let boolean = true;
console.log(boolean);

let pussy = 420;
console.log(pussy);
pussy = pussy + 1;
pussy++;
pussy += 1;
console.log(pussy);

let ass = 69.69;
console.log(ass);
ass++;
console.log(ass);
ass--;
console.log(ass);

//array is an object
let array = [1, 2, 3, 4, 5];
console.log(array[0]);

let poo = `bristol stool chart ${sixnine}`;
console.log('bristol stool chart ' + sixnine);

let object = {
    cum: 'penis',
    vagina: 'clitoris',
}
console.log(object.vagina);
console.log(object.cum);

// girth 
/*
Multiline comment 
    variable girth = 12, girth is in a separate scope
        let girth outside scope, access
            girth = 12 inside scope, no access
                NEEDS SAME SCOPE 
*/

let girth; 

{
    girth = 12;

    {
        let penisLength = 124; // inches ;)
    }
    penisLength = 34545; //doesn't work
    console.log(penisLength);

}

console.log(girth);

/*
EXAMPLE: P/ = parent folder (first folder)
    P/Teaching = child folder (folder within a folder)
        let girth = global scope
        girth = 12 is child scope
*/

// dont use var. hoisted = moved to parent-most scope

