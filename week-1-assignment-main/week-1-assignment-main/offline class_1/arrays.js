//push: adds the elements in the end of end of an array

 const a = [1,2,3,5];
a.push(4);
console.log(a);

//pop: pops the elements from the end of an array.

a.pop();
console.log(a);

//shift: removes the element from the beginning of an array.

a.shift();
console.log(a);

//unshift: adds the element in the beginning of an array.

a.unshift(1);
console.log(a);

//concats: adds/merges one array with another.

const b = [7,8,9];
let c = b.concat(a);
console.log(c);

//forEach: for each method calls the function for each element of an array.

function print(n) {
    +console.log(n);
}

const ex = [1,2,3,4,5];

ex.forEach(print);

//splice: use to remove elements from given index in an array.

const sp = [4,5,6,7,9];
sp.splice(0,2) // first argument is position, second is the number of elements we want to remove.
console.log(sp);