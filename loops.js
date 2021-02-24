let array = [6, 9, 4, 2, 0];
console.log(array);
console.log(array[0]);
// ^ will print 6, only 6

let i = 0; //while loop
while (i < array.length) // > prints first one and nothing else
{
    console.log(array[i]);
    i++;
}
// ^ will print each number, including first 6 coded

console.log('\n');
// \n makes new blank line when running the code

//incriment = add 1
//scope = curly brackets (braces)

//for loop
// for (Initialiser; condition; incriment)
    // let j = 0 will run at beginning of for loop, then we need a condition
    // will run until false
for (let j = 0; j < array.length; j++) 
{
    console.log(array[j]);
}

console.log('\n');

// [] = index

for (let k = 1; k <= 10; k++)
{
    console.log(k);
}

/* 
    or: k = 0; k < 11; k++
    Same thing as above
*/

let a = 120;
let b = 69;

let result = 0;

for (let x = 0; x < b; x++)
{
    result += a;
}
console.log(result);

console.log(120*69);
// * = times but ben is silly and wanted me to times through addition

/** 
 * < not <= as i am starting from 0 
    * result is 0, x is 0
    * x until it is no longer smaller than b (69)
    * ++ adds 1 to x
    * the + = a (120) so it adds it 120 times
*/ 


