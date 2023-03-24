// ====================== First rule : Gloabl context ======================================

// Global context
console.log(this); // this refers to window

function whatisthis() {
  return this;
}

//person = "colt"; // global variable
function makePerson() {
  this.person = "Ellie"; // this still refers to window because it's not declared inside object
}
makePerson(); // this refers to the window object

//"stric mode" // it makes the keyword this undefined in the function scope

//=============================== second rule: implicit/object =============================
var person1 = {
  firstName: "Ellie",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  returnContext: function () {
    return person === this;
  },
};

let person0 = {
  firstName: "Elie",
  determineContexte: this, // this refers to window
};

// keyword this is defined when a function is run

let person = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  determineContext: function () {
    return this === person;
  },
  dog: {
    sayHi: function () {
      return "Hi " + this.firstName;
    },
    determineContext: function () {
      return this === person.dog;
    },
  },
};
