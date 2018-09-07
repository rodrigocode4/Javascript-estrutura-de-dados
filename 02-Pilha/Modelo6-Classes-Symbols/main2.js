const Stack = require('./stack');

const stack = new Stack();

stack.push(8);
stack.push(5);
console.log(stack.peek());
console.log(stack.size());
stack.print()

let objSymbol = Object.getOwnPropertySymbols(stack);

console.log(objSymbol.length);
console.log(objSymbol);
console.log(objSymbol[0]);

stack[objSymbol[0]].push(2);

stack.print();