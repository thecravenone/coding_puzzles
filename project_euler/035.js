//Title: Project Euler - Circular primes
//Source: https://projecteuler.net/problem=35

var max_to_test = 1000000;

var primes_below = function(max) {
	var count = 2;
	var primes = [2,3];
	var to_test = 3;
	while (to_test < max) {
		var is_prime = false;
		for(i=0; i<primes.length; i++) {
			is_prime = true;
			if (to_test % primes[i] == 0) {
				is_prime = false;
				i = primes.length;	//Lazy break
			}
		}
		if (is_prime) {
			primes.push(to_test);
			count++;	
		}
		//Generate the next prime
		to_test += 2;
	}
	return primes;
};
var get_rotations = function(input) {
	input = input.toString();
	rotations = [];
	for(var i=1; i<input.length; i++) {
		input = input.slice(1) + input.charAt(0)
		rotations.push(parseInt(input));
	}
	return rotations;
};
var is_circular = function(input) {
	var rotations = get_rotations(input);
	for(var i=0; i<rotations.length; i++) {
		if(primes_below_max.indexOf(rotations[i]) < 0) {
			//As soon as we find a non-prime permutation, stop testing this number
			return false;
		}
	}
	return true;
};

//Rather than testing every number up to a million for primeness
//and /then/ testing their rotations, just get all primes and check
//If the number and its rotations are in that list of primes.

var primes_below_max = primes_below(max_to_test);
var circular_prime_count = 0;

for(var i=0; i<primes_below_max.length; i++) {
	var to_test = primes_below_max[i];
	if(is_circular(to_test)) {
		circular_prime_count++;
	}
}

console.log(circular_prime_count);
