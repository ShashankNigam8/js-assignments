/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  const lowerCaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters from the string
  const alphanumericStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');

  // Compare the original and reversed strings
  return alphanumericStr === alphanumericStr.split('').reverse().join('');

}
 
module.exports = isPalindrome;
