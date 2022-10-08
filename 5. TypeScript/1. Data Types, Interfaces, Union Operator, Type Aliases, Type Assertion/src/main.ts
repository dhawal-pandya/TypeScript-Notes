//typescript transpiles everything into js, and the js can be read by the browser, as the TS cannot be read by the browser.
// Also to be remembered is that Typescript transpiles everything in Js in EC3, not the later versions, that is why it makes all consts and lets and turns them into var.

//Variables*********************

const hello = 'world';
// hello = "flower"; //is not possile because it is a const.

let colour = 'red';
colour = 'pink'; // is allowed
//colour = true; // is not allowed because even in let and var, it only allows change of data not data type.

//you can also specify the data type,even though just like JS it too understands the type, when you define it, but you can define it beforehand as well.
let num: number = 2;
let nomen: string = 'Dhawal';
//like so

//Union Operator********

// you can also tell the code that there can be two or more data types to the variable using the Union Operator
let fly: string | number = 'one';
fly = 1;
// this is now allowed.

let message: string | null = null;
// this is where it is mostly used:  so whenever data is not fetched, the data to be put in the variable, it will become an error, but just output null.

//Functions********************

const getFullName = (name: string, surname: string) => {
  return name + ' ' + surname;
};
console.log(getFullName('Dhawal', 'Pandya'));
// console.log(getFullName(true, [foo]); //does not work because now no one can pass boolean values in a string based variable.
// if you hover over the function name it will show the data type of the output as well, in this case "string"
const getFullNomen = (nomen: string, surnomen: string): string => {
  return nomen + ' ' + surnomen;
};
//here observe the end of the param in the function, there it is defining the datatype of the function using the :string flag. It is good practice to do it, even though TS is smart to  get that much from the return.

//Objects*************

// const user1 = {
//   name: 'Dhawal',
//   age: 24,
// };
//our object must have two key value pairs and we can define what the key value pairs will be.
const user1: { name: string; age: number } = {
  name: 'Dhawal',
  age: 24,
};
// so when we forget to agg the appropriate key value pair, it throws an error
// const user2: { name: string; age: number } = {
//   name: 'Viral',
// }; //this will show an error.

//but specifying it everywhere is is copying code, so there this thing called interface in TS, to be used like so.
interface User {
  name: string;
  age: number;
}
// remember to keep the name of the interface beginning with a capital.
const user3: User = {
  name: 'Harsh',
  age: 25,
};
const user4: User = {
  name: 'Krunal',
  age: 25,
};
// const user5: User = {
//   name: 'Harsiddh',
// }; //this will throw an error.

// all key value pairs in ts are mandatory by default, but if there is a key value pair you want to keep as optional, you can put a ? just after the name of the key, like so.
interface UserOptionalAge {
  name: string;
  age?: number;
}
const user5: UserOptionalAge = {
  name: 'Vidhya',
};
//this will not throw an error.
// basically it is not that it is very suffocating, but it forces a person to write better code, think ahead when writing, and hence making lesser bugs and also making the bugs easier to solve.

//Interfaces are also known under Entities*************************

// Also it makes a very good autocorrect.
console.log(user5.age);
// here when you press ctrl+space just after the user. it will suggest the keys along with showing you which ones are optional or not. it will tell you before hand that line 77 when run will give an undefined output.

interface IUserOptionalFunction {
  name: string;
  age?: number;
  getMessage(): string;
}
const user6: IUserOptionalFunction = {
  name: 'Krunal',
  age: 25,
  getMessage() {
    return 'hello' + name;
  },
};
// functions can also be put in interfaces, with their output defined.
// Also there is also something like class, that will come later, so best to name all Interfaces to begin with a Capital I. So do that henceforth.

//Combining Interface with Union Operator.

interface IBlah {
  name: string;
  age: number;
}
const swim: IBlah | null = null;
// so this is also a very good way to use these in combinations.

//Type ID / Aliases**********
type Type1 = string;
type Type2 = number;
type Type3 = boolean;
// these can be used in objects and interfaces directly.

interface ITypeCheck {
  name: Type1;
  age: Type2;
  speakerOf: Type3;
}
// so this is not extremely efficient in small cases of code, bu tin thousand lines or something, it will really make life easy.
// this is also called type aliases.

//Also remember that you can combine Type Ids and the Union Operator.

//Data types in TS**********************

//Void********************
const doSomething = (): void => {
  console.log('doSomething');
  //return;
};
//if this function would have returned something, then it would not be void, and would not work.
//or simply
let empty: void = null;
// null and undefined are subsets of void.
empty = undefined;
// so it can only take values of null and undefined.

//Any**********************
const bs: any = 'abracadabra';
//here any is the default of the JS and TS,
// it is the broadest possible superset, because it can literally be anything( any of the other data type), so it is best to never use it in TS unless absolutely necessary.
// also also if you cannot fix an error, use this in cases of emergency.

//Never********************
//never is a data type which means that the fucntion does not end.
const whyTho = (): never => {
  throw 'never';
};
// meaning the function is never going to end.

//Unknown*******************
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
//let s2:string = vUnknown;
// this will thrown an error because this means that this variable or value is unknown to TS. It could be anything, and since we cannot assign anything to anything, TS will not allow it.

console.log(vAny.foo());
//console.log(vUnknown.foo());
// same as above.

//Type Assertion************************
let s3: string = vUnknown as string;
// observe the syntax.
// as stands for assertion.
// it converts vUnknown to string first and then assigns it to s3.
// this can be done with any type to be asserted into any other type.
let pgNum: string = '24';
let numericPgNum: number = pgNum as unknown as number;
//let numericalPgNum: number = pgNum as number;
// uncomment the above code and observe the error message properly.
