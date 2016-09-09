var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here

function last(arr) {
  return arr[arr.length - 1];
}

alert(last(threeItems));



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

function returnOdds(arr) {
  var oddsArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddsArray.push(arr[i]);
    }
  }
  return oddsArray;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

function checkRandom(arr) {
  var rando = getRandomArbitrary();
  if (arr.indexOf(rando) !== -1) {
    return true;
  }
  return false;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here

second = [1,2,3,4,5];

second.push(6);
second.push(7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here

function longest(str) {
  var strArr = str.split(" ");
  longestWord = strArr[0];
  for (var i = 1; i < strArr.length; i++){
    if (strArr[i].length > longestWord.length) {
      longestWord = strArr[i];
    }
  }
  return longestWord;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here

function capitalize(string) {
  var capitalizedString = "";
  var stringArray = string.split(" ");
  for (var i = 0; i < stringArray.length; i++) {
    capitalizedString += (stringArray[i][0].toUpperCase() + stringArray[i].slice(1) + " ");
  }
  return capitalizedString.slice(0, capitalizedString.length - 1);
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowels = "aeiou";

function vowelCounter(string) {
  var vowelString = "";
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        vowelString += string[i];
      }
    }
  }
  return vowelString.length;
}
