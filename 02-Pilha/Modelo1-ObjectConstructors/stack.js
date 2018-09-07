function Stack () {
    let items = [];

    this.push = function(element) {//
        items.push(element);
    }

    this.pop = function() {//
        return items.pop();
    }

    this.peek = function() {//
        return items[items.length - 1];
    }

    this.isEmpty = function() {//
        return items.length == 0;
    }

    this.size = function() {//
        return items.length;
    }

    this.clear = function() {
        return items = [];
    }

    this.print = () => { //
        console.log(items.join(' - '));
    }
}

module.exports = Stack;