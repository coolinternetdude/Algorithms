// We have to return the inner function in order for this to work
// We can either call the inner function right away by adding extra () or we can store the result of the function in a variable
// We do not have to give the inner function a name , we just do it for learning purposes
// Closures only exists when an inner function makes use of variable declared in outer function that has returned
// if the inner function does not make use of any external variables, all we have is a nested function
function outerFn() {
  var data = "Something from outerFn";
  var fact = "Remember me";
  return function innerFn() {
    return fact + data;
  };
}

function classRoom() {
  var instructors = ["Elie", "Colt"];
  return {
    getInstructor: function () {
      return instructors;
    },
    addInstructor: function (instructor) {
      instructors.push(instructor);
      return instructors;
    },
  };
}

var course1 = classRoom();

/* 
Write a function called guessingGame which takes in one parameter amount.
The function should return another function that takes in a parameter called guess.
In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

*/

function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 10);
  var guesses = 0;
  return function innerFn(guess) {
    if (guesses < amount) {
      guesses++;
      if (guess === answer) {
        return "You got it!";
      } else if (guess > answer) {
        return "You're too high!";
      } else {
        return "You're too low!";
      }
    } else if (guesses === amount) {
      return `No more guesses the answer was ${answer}`;
    } else {
      return "You are all done playing";
    }
  };
}

var game = guessingGame(5);
var game2 = guessingGame(3);
