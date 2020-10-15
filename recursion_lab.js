/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) { //*******
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return null
   }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21


function sum(array) { //****
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
}

// 3. Sum all numbers in an array containing nested arrays. //*****
// arraySum([1,[2,3],[[4]],5]); // 15
// var arraySum = function (array) {

var arraySum = function (array) {
  if (array.length === 0) return 0;
  let sum = 0;
  
  for (let i=0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      sum += arraySum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function (n) {
  // acount for negative integers
  if (n < 0) {
    n = Math.abs(n)
  }
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function (n) {
  if (n === 0) return 0;
  return n > 0 ? n-1 + sumBelow(n-1) : n+1 + sumBelow(n+1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [2,3,4,5,6,7,8,9]
var range = function (x, y) {

  let  inter = true;
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
    inter = false;
  }
  if (x === y) return [];
  if (x+1 === y) return [];
  let array = range(x, y-1);
  array.push(y-1);
  return inter ? array : array.reverse();
};
