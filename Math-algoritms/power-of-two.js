// Problem :- give a positive 'n', determine if the number is power of 2 or not
// isPowerOfTwo(1) = (2^0)
// isPowerOfTwo(2) = (2^1)
// isPowerOfTwo(5) = false
// n = 8
// 8/2 = 4 ( remainder 0 )
// 4/2 = 2 ( remainder 0 )
// 2/2 = 1 ( remainder 0 )

// If remainder is not 0 in any step, 'n' is not a power of two

// If remainder is 0 and 'n' comes down to 1 eventually, n is a power of two


function isPowerOfTwoBitWise(n) {
    if( n< 1) {
        return false
    }
    return (n & (n-1)) === 0
    }

    // Big-O = O(1)

    
// function isPowerOftwo(n) {
//     if (n < 1) {
//       return false
//     }
//     while (n > 1) {
//         if(n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(4));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));

// Big-O = O(log(n))