class User {
  firstName: string;
  lastName: string;
  // readonly unchangeableName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

const user = new User('Dhawal', 'Pandya');
console.log(user.getFullName);
console.log(user.firstName);
console.log(user.lastName);
//console.log(user.); // uncomment this line and check emmet at user. and see what options you get for it, this is the cool thing about classes, it allows to acces individual elements inside it, as if methods.

//Private , Public and Protected.******************
class User2 {
  private firstName: string;
  private lastName: string;
  protected middleName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
const user2 = new User2('Dhawal', 'Pandya');
console.log(user2.getFullName);
// here if you emmet after user2. you will not get access to the firstName and lastName.
// everything is public by default, meaning it can be used everywhere in the code, wherever you can access it, private disallows that.
// middleName is protected, meaning it is very similar to private, but protected meaning it can be used by the class itself and its children.

// Important thing to remember is that, all this private and protected is only for TS, once it is transpiled into JS, it is just another variable, and can be access from everywhere.
// there is similar property called ' readonly' which only allows its value to be read and not be changed, or modified.

//Implementing Interfaces in Classes****************
interface IPop {
  word: string;
  ordinals: number;
}
// if we want a class to use the interface created elsewhere, it is applied using the word 'implements' like so.
class CPop implements IPop {
  word: string;
  ordinals: number;
  flaggon: boolean;
  static maxAge: 50;
}
// what this does is, it makes sure that the key value pairs in the interface are necessarily present in the class. it may or may not have other key value pairs.
// class CPopped implements IPop {
//  flaggon: boolean;
// }// this will throw an error.

const pop: CPop = {
  word: 'pop',
  ordinals: 12,
  flaggon: true,
};
console.log(CPop.maxAge);
//console.log(pop.maxAge);// does not exist
// observe line 54 with this.
// the static means it only has given access inside the class, but not even by the functions.

// Inheritance in Classes*******************
class CPop2 extends CPop {}
// using this syntax, we can take all the content of CPop and copy it essentially in CPop2
