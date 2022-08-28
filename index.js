function isPalindrome(word) 
  // Write your algorithm here
//   make a functio  that returns true if a waord is a palindrome and false if not 
//   that seems if the word is the sam as the word in reverse i should return true
// }


//   Add your pseudocode here
// if the word is the same as the word in reverse i should return  true 
// reverse the input string 

// if the input is the same as the revresed input 
// return true
// else 
// return false


  // Add written explanation of your solution here
  function reverse(word){
    const wordArray =word.split("")
    const reversedWordArray = wordArray.reverse()
    const reversedWord = reversedWordArray.join("");
    return reversedWord;
  }
  
  function isPalindrome (word){
    
    const reversedWord =reverse(word);
  
    if (word === reversedWord){
      return true;
    }else {
      return false;
    }
  }
  





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
