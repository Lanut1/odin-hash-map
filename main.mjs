import HashMap from "./hashMap.mjs";

const test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.map);

test.set('dog', 'white');

console.log(test.get('dog'));
console.log(test.has('kite'));
console.log(test.has('John'));
console.log(test.length());
console.log(test.remove('banana'));
console.log(test.keys());
console.log(test.values());
console.log(test.mapEntries());

test.set('moon', 'silver');
test.set('banana', 'red');

console.log(test.map);
console.log(test.capacity);
console.log(test.entries);

