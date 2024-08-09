import LinkedList from "./linkedList.mjs";

export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.map = new Array(this.capacity).fill(null);
    this.entries = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    let isAppend = 0;

    if (!this.map[hashCode]) {
      const newLinkedList = new LinkedList;
      isAppend = newLinkedList.append(key, value);
      this.map[hashCode] = newLinkedList;
    } else {
      isAppend = this.map[hashCode].append(key, value);
    }

    if (isAppend === 1) this.entries++;

    if (this.entries / this.capacity > 0.75) {
      this.resize(this.capacity * 2);
    }
  }

  get(key) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    if (!this.map[hashCode]) return null;
    else return this.map[hashCode].find(key);
  }

  has(key) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    if (!this.map[hashCode]) return false;
    else return this.map[hashCode].contains(key);
  }

  remove(key) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    if (!this.map[hashCode]) return false;
    else {
      let isDeleted = this.map[hashCode].delete(key);

      if (isDeleted) {
        this.entries--;

        if (this.map[hashCode].size === 0) {
          this.map[hashCode] = null;
        }
      }

      return isDeleted;
    }
  }

  length() {
    return this.entries;
  }

  clear() {
    this.map = new Array(this.capacity).fill(null);
    this.entries = 0;
  }

  keys() {
    return this.map
      .filter(list => list !== null)
      .map(list => list.keys())
      .flat();
  }

  values() {
    return this.map
      .filter(list => list !== null)
      .map(list => list.values())
      .flat();
  }

  mapEntries() {
    return this.map
      .filter(list => list !== null)
      .map(list => list.listEntries())
      .flat();
  }

  resize(newCapacity) {
    const oldMap = this.map;
    this.capacity = newCapacity;

    this.map = new Array(this.capacity).fill(null);
    this.entries = 0;

    oldMap.forEach(list => {
      if (list !== null) {
        list.listEntries().forEach(([key, value]) => this.set(key, value))
      }
    });
  }
}