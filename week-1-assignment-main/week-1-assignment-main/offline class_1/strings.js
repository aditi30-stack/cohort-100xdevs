// Lenght function //
let str = "Everythin's going fine";
console.log(str.length) // gives the lenght of the string

//indexof
str = "Hi WWrld!";
console.log(str.indexOf("W")); // gives the index position from where the string starts or is starting from the first time.

//lastindex
//gives the index of last word.
str = "Hi WWrld!";
console.log(str.lastIndexOf("W"));

//*slice
//slices thr string from starting index till end-1;
str = "Hi WWrld!";
console.log(str.slice(1,5));

//replace: replace the string with given string, regex used with global will replace all letters.
const str1 = "Hi";
console.log(str1.replace(/[Hi]/g, " what "));

// split: converts the string to an array based on the delimiter given
const value = "Hi My name is Zoozoo!";
console.log(value.split("y"));

// trim: removes the space from beginning and ending.

const n = "   hi bye ";
console.log(n.trim());

