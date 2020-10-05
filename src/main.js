// ex.1 solution 1.

// let range = (first, second, step = 1) => {
//   let result = [];
//   if (step > 0) {
//     for (let i = 1; i <= second; i += step) {
//       result.push(i);
//     }
//   } else {
//     for (let i = first; i >= second; i += step) {
//       result.push(i);
//     }
//   }
//   return result;
// };
// console.log(range(1, 10));
// console.log(range(1, 10, 2));
// console.log(range(5, 2, -1));

// let sum = (array) => {
//   let result = 0;
//   for (let char of array) {
//     result += char;
//   }
//   return result;
// };

// console.log(sum(range(1, 10)));

//ex.1 solution 2

// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];

//   if (step > 0) {
//     for (let i = start; i <= end; i += step) array.push(i);
//   } else {
//     for (let i = start; i >= end; i += step) array.push(i);
//   }
//   return array;
// }

// function sum(array) {
//   let total = 0;
//   for (let value of array) {
//     total += value;
//   }
//   return total;
// }
// console.log(range(1, 10));
// console.log(range(1, 10, 2));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));
