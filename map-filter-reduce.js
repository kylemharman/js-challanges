const myArr = [1,2,3,4]

const reduce = myArr.reduce((acc, val) => acc + val, 10); // sum array and add 10. 
console.log(reduce)

const map = myArr.map(e => e * 2 ); // map - take each element in array and times by two, return new array
console.log(map)

const filter = myArr.filter(e => e >= 3); // filter - filter all elements grater than or equal to 3
console.log(filter)


// MANUAL METHOD OF REDUCE
const myFunction = () => {  
  let acc = 0
  for(let i = 0; i < myArr.length; i++) 
  acc += myArr[i]
  
  console.log(`Manual method of filter ${acc}`)
}

myFunction(); 


// MANUAL METHOD OF MAP
const myMap = () => {
  newArr = []
  
  for(let i = 0; i < myArr.length; i++)
    newArr.push(myArr[i] * 2);

  console.log(`Manual method of map ${newArr}`);
}
myMap();


// MANUAL METHOD OF FILTER
const myFilter = () => {
  newArr = []
  
  for(let i = 0; i < myArr.length; i++)
    if(myArr[i] >= 3)
      newArr.push(myArr[i]);

  console.log(`Manual method of filter ${newArr}`);
}
myFilter()