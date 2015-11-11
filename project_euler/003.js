//Title: Project Euler problem - Largest prime factor
//Source: https://projecteuler.net/problem=3

var largest_prime_factor_of = function(input) {
	var target = input;
	var next_to_test = 2;
	while (target > 1) {
		if (target % next_to_test == 0) {
			target /= next_to_test;
		}
		else {
			next_to_test++;
		}
	}
	return next_to_test;
};

console.log(largest_prime_factor_of(600851475143));