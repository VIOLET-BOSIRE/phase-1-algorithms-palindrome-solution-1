function isPalindrome(word) {
  if(word.length <=1) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  1.loop through the string
  2.check if last element != element at beginning
  3.if elements do not match return false
  4.else return true
  5.increment start
  6.decrement end
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
