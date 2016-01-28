'use strict';

/**
 * ToDo: Add parameter to set if heap sorted ASC or DESC
 */
class BinaryHeap {
    /**
     * @param  {Array} list - an array from which binary heap will be built
     */
    constructor(list) {
        this.length = 0;

        if (Array.isArray(list)) {
            this.buildFromArray(list);
        } else {
            this._initList();
        }
    }

    _initList() {
        this.list = [0];
    }

    /**
     * Percolate the element with given index upon binary tree
     * @param  {Number} index - index of current element
     */
    _percolateUp(index) {
        while (Math.floor(index / 2) > 0) {
            var parentIndex = Math.floor(index / 2);

            // if parent node is less then current node
            if (this.list[index] < this.list[parentIndex]) {
                var tmp = this.list[parentIndex];

                // then swap current node this its parent
                this.list[parentIndex] = this.list[index];
                this.list[index] = tmp;
            }

            index = parentIndex;
        }
    }

    /**
     * Percolate the element with given index down binary tree
     * @param  {Number} index - index of current element
     */
    _percolateDown(index) {
        while (index * 2 <= this.length) {
            var minChildIndex = this._minChildIndex(index);

            // If parent node greater then min of children
            // then swap parent with that child
            if (this.list[index] >  this.list[minChildIndex]) {
                var tmp = this.list[index];

                this.list[index] = this.list[minChildIndex];
                this.list[minChildIndex] = tmp;
            }

            index = minChildIndex;
        }
    }

    /**
     * Get index of the smallest children for given parent index
     * @param  {Number} parentIndex 
     * @return {Number}
     */
    _minChildIndex(parentIndex) {
        if (parentIndex * 2 + 1 > this.length) {
            // there is no right child
            // so return index if left child
            return parentIndex * 2;
        } else {
            if (this.list[parentIndex * 2] < this.list[parentIndex * 2 + 1]) {
                // left child is less then right one
                // return index of left child
                return parentIndex * 2
            } else {
                // right child is less then left one
                // return index of right child
                return parentIndex * 2 + 1;
            }
        }
    }

    /**
     * Add new item to the heap
     * @param  {Number} item
     */
    push(item) {
        this.list.push(item);
        this.length++;
        this._percolateUp(this.length);
    }

    /**
     * Return last (the smallest of the largest) item of the heap
     * @return {Number}
     */
    pop() {
        var result = this.list[1];

        this.list[1] = this.list[this.length]
        this.length--;
        this.list.pop();
        this._percolateDown(1)

        return result;
    }

    /**
     * Build binary heap from given array of numbers
     * @param  {Array} list
     */
    buildFromArray(list) {
        var length = list.length,
            middleIndex = Math.floor(length / 2);

        this._initList();

        this.length = length;
        this.list = this.list.concat(list);

        while (middleIndex > 0) {
            this._percolateDown(middleIndex);
            middleIndex--;
        }
    }
}

/**
  * Also known as Priority Queue
  * This data type impements behavior of binary heap
  * but can store not only numbers but also objects.
  * Only requirement is that item must be an array where:
  *  - first element is key {Number}
  *  - second element could be anythin so generaly it is {Object} 
  */
class BinaryHeapStore extends BinaryHeap {
    _initList() {
        this.list = [[0, 0]];
    }

    /**
     * Percolate the element with given index upon binary tree
     * @param  {Number} index - index of current element
     */
    _percolateUp(index) {
        while (Math.floor(index / 2) > 0) {
            var parentIndex = Math.floor(index / 2);

            // if parent node is less then current node
            if (this.list[index][0] < this.list[parentIndex][0]) {
                var tmp = this.list[parentIndex];

                // then swap current node this its parent
                this.list[parentIndex] = this.list[index];
                this.list[index] = tmp;
            }

            index = parentIndex;
        }
    }

    /**
     * Percolate the element with given index down binary tree
     * @param  {Number} index - index of current element
     */
    _percolateDown(index) {
        while (index * 2 <= this.length) {
            var minChildIndex = this._minChildIndex(index);

            // If parent node greater then min of children
            // then swap parent with that child
            if (this.list[index][0] >  this.list[minChildIndex][0]) {
                var tmp = this.list[index];

                this.list[index] = this.list[minChildIndex];
                this.list[minChildIndex] = tmp;
            }

            index = minChildIndex;
        }
    }

    /**
     * Get index of the smallest children for given parent index
     * @param  {Number} parentIndex 
     * @return {Number}
     */
    _minChildIndex(parentIndex) {
        if (parentIndex * 2 + 1 > this.length) {
            // there is no right child
            // so return index if left child
            return parentIndex * 2;
        } else {
            if (this.list[parentIndex * 2][0] < this.list[parentIndex * 2 + 1][0]) {
                // left child is less then right one
                // return index of left child
                return parentIndex * 2
            } else {
                // right child is less then left one
                // return index of right child
                return parentIndex * 2 + 1;
            }
        }
    }

    /**
     *
     */
    decreaseItemValue(item, value) {
        var found = false,
            index = 1,
            indexOfItem = 0;

        // search the index of given item
        while (!found && index <= this.length) {
            if (this.list[index][1] == item) {
                indexOfItem = index;
                found = true;
            } else {
                index++;
            }
        }

        // in case it has been found
        if (indexOfItem > 0) {
            this.list[indexOfItem] = [value, this.list[index][1]];
            this._percolateUp(indexOfItem);
        }
    }
}

module.exports = {BinaryHeap, BinaryHeapStore};