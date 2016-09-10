/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

function plusOneSum(arr) {
  var theSum = 0;
  for (var i = 0; i < arr.length; i++) {
    theSum+= arr[i] + 1;
  }
  return theSum;
}

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/


function flatten(array) {
  if (array.length == 0) {
    return [];
  }

  if (Array.isArray(array[0])) {
    return []
      .concat(flatten(array[0]))
      .concat(flatten(array.slice(1)));
  }

  if (!Array.isArray(array[0])) {
    return []
      .concat(array[0])
      .concat(flatten(array.slice(1)));
  }
}

flatten([1, 2, [3, [4], 5, 6], 7]);

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

function sortArray(arr) {
  return arr.sort();
}

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

function longest(str) {
  var strArr = str.split(" ");
  var longestWord = strArr[0];
  for (var i = 1; i < strArr.length; i++){
    if (strArr[i].length > longestWord.length) {
      longestWord = strArr[i];
    }
  }
  return longestWord;
}

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function multiplesOfThreeAndFive (num) {
  var multiples = [];
  var sum = 0;
  for (var i = 0; i < num; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      multiples.push(i);
    }
  }
  for (var j = 0; j < multiples.length; j++) {
    sum+= multiples[j];
  }
  return sum;
}

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function remDup(string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (newString.indexOf(string[i]) === -1) {
      newString+= string[i];
    }
  }
  return newString;
}

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum() {
  var total = 0;
  for (p in arguments) {
    total+= arguments[p];
  }
  if (arguments.length > 1) {
    return total;
  }
  return function() {
    for (p in arguments) {
      total+= arguments[p];
    }
    return total;
  }
}
