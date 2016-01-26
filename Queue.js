'use strict';

module.exports = class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.pop();
    }

    get lenght() {
        return this.items.length;
    }
}