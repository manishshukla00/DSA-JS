/*
problem - Given an array of 'n' elements and a target element 't',find the index of 't' in array.Return -1 if the target element is not found.

arr = [-5,2,10,4,6], t = 10 -> Should return -1
arr = [-5,2,10,4,6], t = 6 -> Should return 4
arr = [-5,2,10,4,6], t = 20 -> Should return -1
*/

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([-5,2,10,4,6], 10));
console.log(linearSearch([-5,2,10,4,6], 4));
console.log(linearSearch([-5,2,10,4,6], 6));
console.log(linearSearch([-5,2,10,4,6], 20));

// Big-O = O(n)