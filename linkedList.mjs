import Node from "./node.mjs";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(key, value) {
    
    if (this.size === 0) {
      const newNode = new Node(key, value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.key !== key && currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      if (currentNode.key === key) {
        currentNode.value = value;
        return 0;
      }

      const newNode = new Node(key, value);
      currentNode.nextNode = newNode;
      this.tail = newNode;
    }

    this.size++;
    return 1;
  }

  find(key) {
    if (this.head === null) return null;

    let currentNode = this.head;
    while (currentNode.key !== key && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    if (currentNode.key === key) return currentNode.value;

    return null;
  }

  contains(key) {
    if (this.head === null) return false;

    let currentNode = this.head;
    while (currentNode.key !== key && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    if (currentNode.key === key) return true;

    return false;
  }

  delete(key) {
    if (this.head === null) return false;

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.key !== key && currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (currentNode.key === key) {
      if (previousNode === null) {
        this.head = currentNode.nextNode;
      } else {
        previousNode.nextNode = currentNode.nextNode;
      }

      if (currentNode.nextNode === null) {
        this.tail = previousNode;
      }

      if (this.head === null) {
        this.tail = null;
      }

      currentNode.nextNode = null;

      this.size--;
      return true;
    }

    return false;
  }

  keys() {
    const keysArray = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      keysArray.push(currentNode.key);
      currentNode = currentNode.nextNode;
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      valuesArray.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }

    return valuesArray;
  }

  listEntries() {
    const entriesArray = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      entriesArray.push([currentNode.key, currentNode.value]);
      currentNode = currentNode.nextNode;
    }

    return entriesArray;
  }
}
