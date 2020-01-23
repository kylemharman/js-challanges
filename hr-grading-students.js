// const gradingStudents = grades => {
//     let results = [];

//     for (let i = 0; i < grades.length; i++) {
//         let gradeRoundedToFive = Math.ceil(grades[i] / 5) * 5;

//         if (grades[i] < 38) {
//             results.push(grades[i]);
//         }
//         if (grades[i] >= 38) {
//             if (gradeRoundedToFive - grades[i] < 3) {
//                 results.push(gradeRoundedToFive);
//             } else {
//                 results.push(grades[i]);
//             }
//         }
//     }

//     return results;
// };

// console.log(gradingStudents([73, 67, 38, 33]));

// refactor
const gradingStudents = grades => {
    const results = grades.map(grade => {
        let gradeRoundedToFive = Math.ceil(grade / 5) * 5;
        return grade >= 38 && gradeRoundedToFive - grade < 3
            ? gradeRoundedToFive
            : grade;
    });

    return results;
};

console.log(gradingStudents([73, 67, 38, 33]));

// figuring out how to round up to the nearest 5
// function round(num) {
//     return Math.ceil(num / 5) * 5;
// }
// console.log(round(33));
