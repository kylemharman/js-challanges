// Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

// console.log(letterReverse("Luke I am your father"));
// => "ekuL I ma ruoy rethaf"

const letterReverse = str => str.split('').reverse().join('').split(' ').reverse().join(' ');

console.log(letterReverse("Luke I am your father"));