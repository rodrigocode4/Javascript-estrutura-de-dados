const Stack = require('./stack')

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(4);
stack.push(8);
stack.push(20);
stack.push(33);

console.log(stack.isEmpty());

console.log(stack.peek());

console.log(stack.size());

stack.pop();

console.log(stack.peek());

stack.print();

stack.clear();

stack.print(); 

console.log(stack.isEmpty());
stack.push(220);
stack.push(335);
stack.print(); 