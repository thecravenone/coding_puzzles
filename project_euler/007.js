//Title: Project Euler problem - 10001st prime
//Source: https://projecteuler.net/problem=7

//Returns an array of all primes below the input
var primes_below = function(max) {
	var sieve = [];
	var primes = [];
	for(var i=2; i<=max; i++) {
		if(!sieve[i]) {
			//i has not been marked and is therefore prime
			primes.push(i);
			for (var j=i*2; j<=max; j+=i) {
				sieve[j] = true;
			}
		}
	}
	return primes;
};
//Returns the xth prime
//REQUIRES  primes_below
var xth_prime = function(x) {
	//The xth prime is appox n log n
	//So find that number, calculate primes using a seive then go from there
	var approx = x * Math.floor(Math.log(x));
	var primes = primes_below(approx);
	if (primes.length > x) {
		//If we over shot it...
		return primes[x-1];
	}
	//if not, continue in the inefficient way we were doing before...
	var count = primes.length;
	var to_test = primes[primes.length-1] + 2;
	while (count < x) {
		var is_prime = false;
		//DEBUG:
		//console.log("Testing if " + to_test + " is prime.");
		for(i=0; i<primes.length; i++) {
			is_prime = true;
			//DEBUG:
			//console.log("Testing " + to_test + " / " + primes[i]);
			if (to_test % primes[i] == 0) {
				is_prime = false;
				i = primes.length;	//Lazy break
			}
		}
		if (is_prime) {
			primes.push(to_test);
			count++;
			//DEBUG:
			//console.log("Added " + to_test + " to the array of primes!");
			//console.log("...and it is the " + count + "th prime!");
		}
		//Generate the next prime
		to_test += 2;
	}
	return primes[primes.length-1];
};

console.log(xth_prime(10001));
