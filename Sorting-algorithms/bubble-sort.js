/*
Problem - Given an array of integers, sort the array.

 const arr = [-6, 20, 0, -2, 4]

 bubbleSort => should return [-6, -2, 4, 8, 20]
 
 compare adjascent elements n the array and swap the positions if they are not in intended order
 */

 function bubbleSort(arr) {
    let swapped
    do{
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
               let temp = arr[i]
               arr[i] = arr[i+1]
               arr[i+1] = temp
               swapped = true 
            }
        }
    } while(swapped)
}

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr);

// Big-O = O(n^2)