// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

// We return the value of 4! = 4 x 3 x 2 x 1 = 24.

const factorial = n => {
    
    let result = 1;

    for (let i = n; i > 1; i--) {
        result *= i
    }

    return result;

}

console.log(factorial(4));

// const recurrsion = n => {
    
//     if(n === 0) return;
//     console.log(n)
//     recurrsion(n -1)

// }

// console.log(recurrsion(4))