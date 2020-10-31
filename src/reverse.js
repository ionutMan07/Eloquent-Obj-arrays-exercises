//ex.2 solution 1

let reverseArray = (array) => {
  let result = [];
  for (let i = 0; i <= array.length + 1; i++) {
    result.push(array.pop());
  }
  return result;
};
console.log(reverseArray(["A", "B", "C"]));

let reverseArrayinPlace = (arrayValue) => {
  let result = [];
  for (let i = arrayValue.length - 1; i >= 0; i--) {
    result.push(arrayValue[i]);
  }
  return result;
};
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayinPlace(arrayValue));

//ex.2 solution 2

// function reverseArray(array) {
//   let output = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     output.push(array[i]);
//   }
//   return output;
// }

// function reverseArrayInPlace(array) {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     let old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }
// console.log(reverseArray(['A', 'B', 'C']));
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
