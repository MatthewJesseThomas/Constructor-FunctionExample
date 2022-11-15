/*
Define constructor function
===========================
Allow us to create and initialize an instance of a class.
A constructor will be called when we create an object by using a new keyword.
NB: this keyword should be used. 
Make use of the prototype to add a new property.
*/
//Example1//
class Details {
    constructor(firstName, surname, email) {
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.coding = () => {
            console.log("Busy Coding SpyWare");
        };
    }
    display() {
        console.log("Hello There");
    }
}
let person1 = new Details('Joel', 'Mukanya', 'joel@gmail.com');
console.table(person1);
person1.display();
person1.coding();






