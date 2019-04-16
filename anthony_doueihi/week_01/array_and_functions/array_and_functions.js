// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise.

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
// and multiplyArray([1,2,3,4]) should return 24.

// Bonus
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// Write a function filterLongWords that takes an array of words and an number i and
// returns the array of words that are longer than i.

const maxOfTwoNumbers = function(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

const maxOfThree = function(num1, num2, num3) {
  let max;
  if (num1 < num2) {
    max = num2;
  } else {
    max = num1;
  }

  if (max < num3) {
    return num3;
  } else {
    return max;
  }
}

const isVowel = function(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (vowels.indexOf(char) === -1) {
    return false;
  } else {
    return true;
  }
}

const sumArray = function(thisArray) {
    return thisArray.reduce(function(sum, value) {
        return sum += value;
    })
  }

const multiplyArray = function(thisArray) {
    return thisArray.reduce(function(multiply, value) {
        return multiply *= value;
    })
}

const reverseString = function(thisString) {
  let revString = "";
  for (let i = thisString.length - 1; i >= 0; i--) {
    revString += thisString[i];
  }
  return revString;
}

const findLongestWord = function(thisArray) {
  let longest = "";
  thisArray.forEach(function(word) {
    if (word.length > longest.length) {
      longest = word;
    }
  })
  return longest;
}

const filterLongWords = function(thisArray, l) {
  return thisArray.filter(function(word) {
    return word.length > l;
  })
}