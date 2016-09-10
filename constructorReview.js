//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here

function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here

function createPerson(name, age, height, gender) {
  return {
    name: name,
    age: age,
    height: height,
    gender: gender
  }
}


//Create a animal array and a person array.

  //code here

animals = [];
people = [];


//Create two instances of Animal and push those into your animal array

  //code here

var monkey = new Animal('monkey', 'Harold', 2, 'brown', ['bananas', 'bugs']);
var rat = new Animal('rat', 'Witherford', 4, 'black', ['cheese', 'nuts']);

animals.push(monkey, rat);


//Create two instances of person and push those into your person array.

  //code here

var jake = createPerson('Jake', 26, '70in', 'male');
var lynsey = createPerson('Lynsey', 28, '62in', 'female');

people.push(jake, lynsey);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Animal.prototype.eat = function() {
  var eatThis = getRandomIntInclusive(0, this.food.length -1);
  alert(this.name + ' ate ' + this.food[eatThis]);
}


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?

//NO, we would have to add it to the original createPerson function, which would create that function again each time we called the function to create a new person object. No fun.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
