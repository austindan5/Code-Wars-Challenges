// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
  let conversion = 100000 / 3600;
  return Math.floor(s * conversion);
}

//PREP
//Parameters-speed (s)
//Returns-greater than 0, integer, use Math.floor
//Example 1.08->30
//km/hr cm/s
//60 minutes*60 seconds =3600 seconds in an hour
//100000 cm =1km
