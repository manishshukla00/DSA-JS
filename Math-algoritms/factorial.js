// Prolem:- Given an integer 'n', find the factorial of that number

// factorial of zero and 1 is 1.

// Factorial(4) = 4*3*2*1 = 24
// Factorial(5) = 5*4*3*2*1 = 

function factorial(n) {
    let result = 1
    for(let i = 2; i<=n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

// Big-O = O(n)

/*

 BIG-O Guide (Cheat sheet)
 calculation not dependent on input size - Object(1)

 1- loop - O(n)
 2- nested loops - O(n^2)

 Input size reduced by half - O(logn)
 
 */
