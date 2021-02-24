/**
 * the function runs whatever is in the brace, but it requires a name  
 * function, name, x (parameter)
 * write = calling the function
*/
function write(x)
{
    console.log(x);
}

write('whatever i want');

// made a function called add with parameters a and b, and returns (gives) the addition of a and b
function add(a, b)
{
    return (a + b);
}
let result = add(1, 2);
console.log(result);
// The same as console.log(add(1, 2));

/**
 * letting the result become the addition of a and b 
 * assigns 1 to a
 * assigns 2 to b
*/

function times(x, y)
{
    return (x*y);
}
let solution = times(4, 5);
console.log(solution);

function multiply(d, e)
{
    let res = 0;
    for (let f = 1; f <= e; f++)
    {
        res = res + d;
    }
    return (res);
}
let res = multiply(6, 9);
console.log(res);
// can start from f = 0 (use this) but, would need to be < not <=