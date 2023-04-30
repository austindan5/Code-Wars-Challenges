// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

function isPalindrome(x) {
  let y = x.split("").reverse().join("").toLowerCase();

  if (y == x.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

//PREP
//Parameters-a string
//Returns-true or false
//Example- racecar, madam, 12/21/33 12:21
//PseudoCode
// split reverse join a string
//if that new string equals x
//test cases for uppercase letters
//true
