console.log("Hello FSD58WE2-TAMIL");

const obj = { age: 28, role: "Developer", qualification: "BE/B.Tech" };

// need age value in separate variable 'personAge'

// use destructuring
// const { age: personAge } = obj;

// console.log("AGE: " + personAge);

// Rest Operation - left hand side of the assignment

// Object - Rest Operation
// get the rest all property values from obj except the age( should be in var personAge )

// rest operation done on the left hand side of the assignment
const {
  age: personAge,
  role,
  ...restObj // rest statement can only be put in last in the destructure
} = {
  age: 28,
  role: "Developer",
  qualification: "BE/B.Tech",
};

console.log("Line 27", personAge);
console.log("Line 28", role);
console.log("Line 29", restObj);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [, a, b, , d, ...restArr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a);
console.log(b);
console.log(d);
console.log(restArr);

// a=2,b=3, restarr=[6,7,8,9,10]

// const sumOfNumbers = (a, b) => {
//   return a + b;
// };

// make above function any number of arguments( numbers ), then add all those and return the sum value
const sumOfNumbers = (a, b, ...arr) => {
  console.log(arr);
  let count = 0;
  for (let val of arr) {
    count += val;
  }

  return count + a + b;
};

console.log(sumOfNumbers(1, 2));

console.log(sumOfNumbers(1, 2, 3, 4, 5, 6)); // 21
