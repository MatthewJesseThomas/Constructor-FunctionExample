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
function creator(firstName, lastName, _class,  type) {
    return {
      firstName: firstName,
      lastName: lastName,
      class: _class,
      type: type,
      getFullName() {
          return firstName + ' ' + lastName;
      }
    }
}
let classes = ["A-ThreatLevel", "B-ThreatLevel", "C-ThreatLevel", "D-ThreatLevel", "E-ThreatLevel", "F-ThreatLevel", "S-ThreatLevel"]
let type = ["AGodLevel", "BDragonLevel", "CDemonLevel", "DTigerLevel", "EWolfLevel", "FNormalLevel", "SCreationLevel"]
let precursor = creator('Zenku', 'Dono', classes, type)

console.table(precursor);
console.log(precursor.getFullName());

// What is a Constructor-Function~

// •A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.
// #Eg.
/* A constructor in Javascript is used to create a new object and set values
for any existing object properties*/



function Animal(name, height, weight) {
  this.name = name,
  this.height = height,
  this.weight = weight
}
Animal.prototype.nameLength = () => {
  return this.name.length
}


class Kaiju {
  constructor(name, height, weight) {
    this.name = name,
    this.height = height,
    this.weight = weight;
  }
  nameLength() {
    return this.name.length;
  }
}

console.table("created the Kaiju named", name)


let kingKaiju1 = new Kaiju(
  prompt('Enter Desired Kaiju:'),
  prompt('Enter their Height:'),
  prompt('Enter their Weight:'),
  prompt('Enter their Class:'),
  prompt('Enter their Threat-Level:')
)

let kingGamera = new Kaiju("Gamera", 78+'Metres', 10000+'Tons');

console.table(kingKaiju1);
console.table(kingGamera);
// What is the Difference Between Factory-Function and Constructor-Functions~
class InterDimensional {
  constructor() {
    this.dimension = 'Overworld'
  }
  who() {
    return 'Sunpō no rokku'
  }
}
let dimensionalLock = new InterDimensional()
console.table(dimensionalLock);
// •If a Factory-Function can be defined as a function that creates an object and returns it. It is similar to constructor functions/class functions. The factory function is a very useful tool in JavaScript since it returns the object of any class directly, then the Constructor-Function is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.