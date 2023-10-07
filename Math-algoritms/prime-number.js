// Problem - Gve a natural number 'n', determine if thhe numbber is primr or not

// A prime number is a natural number greater then 1 that is not a product of two smaller numbers

// isPrime(5) = true(1*5 or 5*1)
// isPrime(4) = false(1*4 or 2*2 or 4*1)

function isPrime(n) {
    if(n<2) {
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if ( n%i === 0 ) {
            return false
        }
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Big-O = O(sqrt(n))

// Optimize Primality Test 
// Integer larger then the square root do not need to be checked because,whenever 'n=a*b',one of the two factors 'a' and 'b' is less then or equal to the square root of 'n'