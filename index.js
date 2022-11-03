/*
I need to write a function to take in a string and determine if it is a palindrome
I return true if it is a palindrome, and false otherwise
*/

function isPalindrome(word) {
  // Write your algorithm here
  console.log("word: " + word)
  for (let i = 0; i <= word.length / 2; i++) { // I did word.length / 2 so that once we get to the middle letter (or half way) we stop checking
    const length = word.length
    if (word[i] === word[length - 1 - i]) { // - 1 because arrays index starting at 0
      // console.log("letter1: " + word[i])
      // console.log("letter2: " + word[length - 1 - i])
      // console.log("letter number:" + i)
      // console.log("true")
    } else {
      // console.log(word[i])
      // console.log("letter1: " + word[i])
      // console.log("letter2: " + word[length - 1 - i])
      // console.log("letter number:" + i)
      // console.log("false")
      return false; // if you reach a false, return false and exit the loop
    }
    return true; // if you never hit a false, return true 
  }
}

/* 
  Add your pseudocode here

Function with string input
Create 2 options: odd or even word length
For {
  using arrays, check the final and first letter
  then the second to final and second letter, etc
  If (letters match) {
    keep running through the function
    once you've run through each iteration successfully, return true
  } else {
    return false
  }
}

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
