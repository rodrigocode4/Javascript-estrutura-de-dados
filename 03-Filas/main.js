const Queue = require('./Queue');

let queue = new Queue();
queue.enqueue('Jhon');
queue.enqueue('Jack');
queue.enqueue('Camila');
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.front());
queue.dequeue();
queue.dequeue();
queue.print()