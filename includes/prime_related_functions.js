//variable functions related to prime numbers

//Returns an array of all prime factors of the input.
var get_prime_factors = function(x) {
	var factors = [];
	while (x % 2 == 0) {	//Divide by 2 for as long as possible, adding 2 to our array each time.
		factors.push(2);
		x/=2;
	}
	for (var i=3; i<Math.sqrt(x); i+=2) {
		while (x % i == 0) {
			factors.push(i);
			x/=i;
		}
	}
	//We now have the last factor remaining, unless it's 1.
	if (x != 1) {
		factors.push(x);
	}
	return factors;
};
//Returns an array of all factors of the input.
var get_all_factors = function(x) {
	var factors = [];
	if(x == 1) {
		factors.push(1);
		return factors;
	}
	for(var i=1; i<x/2+1; i++) {
		if (x % i == 0) {
			factors.push(i);
		}
	}
	factors.push(x);
	return factors;
};
//Returns the total number of factors of the input.
var number_of_factors = function(x) {
	var num_factors = 2;	//The number and 1. True for all natural numbers > 1
	if(x == 1) {
		num_factors = 1;
		return num_factors;
	}
	for(var i=1; i<Math.floor(Math.sqrt(x)); i++) {
		if (x % i == 0) {
			num_factors+=2;	//The factor found + the thing it gets multiplied by.
		}
	}
	num_factors++;	//to account for the number itself.
	return num_factors;
};
//Returns whether the input is prime.
var is_prime = function(x) {
	if(x <= 1) {
		return false;
	}
	for(var i=2; i<(Math.floor(Math.sqrt(x))+1); i++) {
		//The +1 there avoids i=2; i<sqrt(4) causing 4 to skip the check and return true.
		if (x % i == 0) {
			return false;
		}
	}
	return true;
};
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
