// const nums = [1,2,3,4,5,6,7,8,9,10];
const nums = [2, 3, 6, 6, 5];


function getSecondLargest(nums) {
    
    let answer = nums.sort((a,b) => a - b );
    
    for (let i = 0; i < answer.length; i++) {
        if (answer[answer.length -1] === answer[answer.length -2]) {
            answer.pop();
        }
    }
    return answer[answer.length -2]
}

console.log(getSecondLargest(nums));