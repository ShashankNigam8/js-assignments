/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let input1 = getSortedString(str1.toLowerCase())
  let input2 = getSortedString(str2.toLowerCase())

  return input1 === input2
}

function getSortedString(str) {
  let charArray = str.split("");
  charArray.sort();

  return charArray.join('');

}

module.exports = isAnagram;
