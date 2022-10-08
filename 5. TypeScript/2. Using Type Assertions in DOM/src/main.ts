// const someElement = document.querySelector(".foo");
// console.log("someElement", someElement.value);
// this line of code will give error, as TS cannot read anything from our markup, it only knows what we tell it using the line 1.

// some solve it by doing this.
const someElement = document.querySelector('.foo');
console.log('someElement', (someElement as any).value);
// this will surely remove the error, but you have entirely wasted the utility of TS this way, as you just sidestpeed it.
// the correct way is so...
const someOtherElement = document.querySelector('.foo') as HTMLInputElement;
console.log('someOtherElement', someOtherElement.value);
// observe line 10. there are ways to tell TS what we mean by the .foo and what kind of vlaue it will be assigned. in this case it was an HTML Element which does the work of Input, hence HTMLInputElement.

// when using the DOM, the as operator, or assertion operator is very useful, and seperates the people who know TS from those who dont.
// even in case of event listeners, it will work the same way, it just needs to be defined its datatype correctly using "as".
