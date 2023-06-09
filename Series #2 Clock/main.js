function past(h, m, s){
  let h2 = h*3600000
  let m2= m*60000
  let s2= s*1000
  return h2+m2+s2
}

//Prep
//Parameters-hour,minute, second
//Returns whole integer positive in milliseconds
//Examples-1 hour =3600000, 1 minute =60000 milliseconds,1 second=1000 milliseconds
//Psuedo Code
//start off at zero which is midnight
//convert parameters to milliseconds
//return total of new parameters





// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59