const PriorityQueue = require('./priorityQueue');

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Jhon', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('Camila', 1);
priorityQueue.print();