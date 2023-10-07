/*
Recursion ->

Recursion is a problem solving technique where the solutions to smaller Instances of the same problem 

-> Recursion is when a function calls itself

-> A great technique to simplify your solution

-> if you find yourself breaking down your problem into smaller versions of the same prolem, recursion is very usefull

*/
// Recursive approach of solving fibonacci series

function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(6));

// Big-O = O(n) (iterative)
// Big-O = O(2^n) (Recursive)

// Recursive factorial of a number

function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(5));

// Big-O = O(n)
