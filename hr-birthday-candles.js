// return the amount of largest intergers in array
// const ar = [3,2,1,3];
// expected output 2


const ar = [3,2,1,3];

function birthdayCakeCandles(ar) {

    const highest = Math.max(...ar);
    const result = ar.filter(e => e == highest);
    return result.length;
    
}
birthdayCakeCandles(ar);