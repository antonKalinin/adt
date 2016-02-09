'use strict'

class TreeNode {
    constructor(key, value, leftChild, rightChild, parent) {
        this.key = key;
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.parent = parent;
    }

    hasLeftChild() {
        return Boolean(this.leftChild);
    }

    hasRightChild() {
        return Boolean(this.rightChild);
    }

    isLeftChild() {
        return this.parent && this.parent.leftChild === this;
    }

    isRightChild() {
        return this.parent && this.parent.rightChild === this;
    }

    isRoot() {
        return !this.parent;
    }

    isLeaf() {
        return !(this.leftChild || this.rightChild);
    }

    hasAnyChildren() {
        return Boolean(this.leftChild || this.rightChild);
    }

    hasBothCildren() {
        return Boolean(this.leftChild && this.rightChild);
    }

    replaceNode(key, value, leftChild, rightChild) {
        this.key = key;
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;

        if (this.leftChild) {
            this.leftChild.parent = this;
        }

        if (this.rightChild) {
            this.rightChild.parent = this;
        }
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    get() {

    }

    set() {

    }
}