/*
Define constructor function
===========================
Allow us to create and initialize an instance of a class.
A constructor will be called when we create an object by using a new keyword.
NB: this keyword should be used. 
Make use of the prototype to add a new property.
*/
//Example1//
// class Details {
//     constructor(firstName, surname, email) {
//         this.firstName = firstName;
//         this.surname = surname;
//         this.email = email;
//         this.coding = () => {
//             console.log("Busy Coding SpyWare");

//         };
//     }
//     display() {
//         console.log("Hello There");
//     }
// }
// let person1 = new Details('Joel', 'Mukanya', 'joel@gmail.com');
// console.table(person1);
// person1.display();
// person1.coding();
// =======================================================================
// What is a Factory-Function~

// •A factory function can be defined as a function that creates an object and returns it. It is similar to constructor functions/class functions. The factory function is a very useful tool in JavaScript since it returns the object of any class directly.
// #Eg.
let john = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(john.getFullName());

// What is a Constructor-Function~

// •A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.
// #Eg.
/* A constructor in Javascript is used to create a new object and set values
for any existing object properties*/

class Animal{
  
  constructor (name, height, weight){
    console.log("created animal named", name)
  }
  nameLength() {
    return name.length;
    
  }
  
}
 var dog = new Animal("Fido", 25, 90);
 var fish = new Animal("Goldie", 2, .02);

	console.log(dog.nameLength);
// What is the Difference Between Factory-Function and Constructor-Functions~

// •If a Factory-Function can be defined as a function that creates an object and returns it. It is similar to constructor functions/class functions. The factory function is a very useful tool in JavaScript since it returns the object of any class directly, then the Constructor-Function is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.