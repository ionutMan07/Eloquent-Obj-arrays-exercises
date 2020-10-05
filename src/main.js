let range = function (first, second) {
  let result = [];
  for (let i = first; i <= second; i++) {
    result.push(i);
  }
  return result;
};

console.log(range(1, 10));

let sum = function (array) {
  let result = 0;
  for (let char of array) {
    result += char;
  }
  return result;
};
