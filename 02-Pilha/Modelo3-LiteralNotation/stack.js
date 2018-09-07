const stack = {
    items: [],
    push(element) {
        this.items.push(element);
    },
    pop() {
        return this.items.pop();
    },
    peek() {
        return this.items[this.items.length - 1];
    },
    isEmpty() {
        return this.items.length == 0;
    },
    size() {
        return this.items.length;
    },
    clear() {
        return this.items = [];
    },
    print() {
        console.log(this.items.join(' ~ '));
    }
}

module.exports = stack;

