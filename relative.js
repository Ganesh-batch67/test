/*
 relative(d,v) takes a distance in light years and a velocity relative to Earth as a fraction of the speed of light.
 It should return the perceived duration of a round-trip journey for anyone on a spaceship travelling at that velocity.
 The duration should be presented as an array, in [years, days, hours] format, where each value is an integer.

 The duration should be shown to the nearest hour.
 For the purposes of this calculation, assume that 1 year is exactly 365 days of 24 hours each (the test cases below assume these values)
 If the input is invalid, the function should return null.

 For example (see wikipedia: https://en.wikipedia.org/wiki/Twin_paradox#Specific_example)

 Consider a space ship traveling from Earth to the nearest star system: a distance d = 4 light years away, 
 at a speed v = 0.8c (i.e., 80 percent of the speed of light).

 The Earth-based mission control reasons about the journey this way: the round
 trip will take t = 2d/v = 10 years in Earth time (i.e. everybody on Earth will
 be 10 years older when the ship returns). The amount of time as measured on
 the ship's clocks and the aging of the travelers during their trip will be
 reduced by the factor ε = sqrt((1-v^2)/c^2), the
 reciprocal of the Lorentz factor. In this case ε = 0.6 and the travelers will
 have aged only 0.6 × 10 = 6 years when they return. 

 In this example, relative(d, v) should return [6, 0, 0]

 You can test this file using Node.js or by pasting it into a browser JavaScript console.
 */ 

function relative(d, v) {
	// Complete your implementation here
}

function test_relative() {
	test(relative, [4, 0.8], [6, 0, 0]);
	test(relative, [4, 0.6], [10, 243, 8]);
	test(relative, [4, 0.58817], [11, 0, 0]);
}

function test(fn, args, expected) {
	var result = fn.apply(this, args);
	if (!arraysEqual(result, expected)) {
        console.error("Test failed for", args, ": expected", expected, " saw:", result);
    } else {
    	console.log("Test passed for", args, ": saw", result);
    }
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

test_relative();