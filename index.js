function isPalindrome(word) {
  const wordfromStart = word;
  const wordfromEnd = word.split('').reverse().join('');
  return wordfromStart === wordfromEnd;
}

/* 
  Add your pseudocode here
  function isPalindrome with Parameter word:
	 Set wordfromStart as word
	 Set wordfromEnd as word, splitting it to chars, reversing them, and joining them to string
	 if wordfromStart === wordfromEnd:
		return true
	otherwise:
		return false
*/

/*
  Add written explanation of your solution here
  We simply set two variables: wordfromStart and wordfromEnd.
  The first variable (wordfromStart) will be initialized to the word itself.
  The second variable (wordfromEnd) 
	will be initialized to the word but from end to start, split up to characters, reversing the characters
	and then joining them to a string.
  We compare both variables, and if their values are equal we return true.
  If the values aren't equal we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("php"));
}

module.exports = isPalindrome;
