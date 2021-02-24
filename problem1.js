//https://projecteuler.net/problem=1 (the problem I am literally solving)

let result = 0;
for (let i = 0; i <=1000; i++) 
{
    if ((i % 3 == 0) || (i % 5 == 0))
    {
        result += i;
        console.log(i); //does not need to be logged, this will list all the numbers i have asked for, but the problem only asks for the sum of these numbers that the log of i will list.
    }
}

console.log(result);

/**
 * % = modulo (remainder)
 * for loop just counts from 0 to 1000 but I only need multiples of 3 and 5
 * || = or. if i has a remainder when dividing by 3 OR 5, it will not run those numbers
 * let result = 0 begins my maths from 0
 * result += i adds all values of i (which are multiples of 3 and 5) to 0, adding them all together
 */