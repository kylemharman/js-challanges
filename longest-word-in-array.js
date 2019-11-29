// Write a function printLongestWord that accepts a  single argument, an array of strings.

// The method should return the longest word in the array.  In case of a tie, the method should return the word that  appears first in the array.




// const printLongestWord = (arr) => {
//     let longestWord = "";
//     let wordLength = 0; 
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length >= wordLength) {
//             longestWord = arr[i];
//             wordLength = arr[i].length;
//         }
//     }      
//     return `The longest word in the array is "${longestWord}" which is ${wordLength} characters long`; 
// }

// ONE LINER
const printLongestWord = arr => arr.reduce((a, b) => a.length > b.length ? a : b)

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"] ));

