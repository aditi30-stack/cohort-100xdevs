/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").trim();
  let j = (newStr.length) - 1;
  let i =0
  
  if (newStr[i] != newStr[j]) {
    return false;
  }

  while (i<j) {
    for (let i=1; i<newStr.length; i++) {
      if (newStr[i] == newStr[j]) {
        j -= 1;
      }
    }
  }

  return true;


}

module.exports = isPalindrome;
