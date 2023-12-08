const obj = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    "key4": "value4",
    print() {
        console.log("Hello") // defining function inside an object

    }
}

let K = Object.keys(obj); //pass the object to get the keys
console.log(K);

let V = Object.values(obj); //pass the object to get the values
console.log(V);
console.log(typeof(V));

obj.print(); //  calling function inside an object

 let m = console.log(Object.entries(obj)[0][1]); //gives the array of object inside an array.

//hasOwnProperty: gives true of false if key exists in that object.

console.log(obj.hasOwnProperty("key4"));

//obj.assign

//assigns new property and values in the top of an object.

let newObj =Object.assign({}, obj, {"job": "No"});
console.log(newObj);
console.log(obj);


