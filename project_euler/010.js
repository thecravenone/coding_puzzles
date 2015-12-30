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

var primes_below_2M = primes_below(2000000);

var sum_of_primes = 0;
for(var i=0; i<primes_below_2M.length; i++) {
	sum_of_primes += primes_below_2M[i];
}

console.log(sum_of_primes);