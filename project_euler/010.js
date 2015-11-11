//Title: Project Euler problem - Summation of primes
//Source: https://projecteuler.net/problem=10

//This puzzle demonstrates the need for a more efficient prime-generation algorithm.
//There are 148,933 primes below 2 million.
//$ time node /path/to/coding_puzzles/project_euler/010.js 
//142913828922
//
//real	0m52.334s
//user	0m51.828s
//sys	0m0.216s
//$ 


var primes_below = function(max) {
	var count = 2;
	var primes = [2,3];
	var to_test = 3;
	while (to_test < max) {
		//Generate the next prime
		to_test += 2;
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
		}
		else {

		}

	}
	return primes;
};

var primes_below_2M = primes_below(2000000);

var sum_of_primes = 0;
for(var i=0; i<primes_below_2M.length; i++) {
	sum_of_primes += primes_below_2M[i];
}

console.log(sum_of_primes);