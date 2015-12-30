//Title: Project Euler problem - 10001st prime
//Source: https://projecteuler.net/problem=7

var xth_prime = function(x) {
	var count = 2;
	var primes = [2,3];
	var to_test = 5;
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