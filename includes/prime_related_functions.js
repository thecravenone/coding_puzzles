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
//Require get_all_factors.
var number_of_factors = function(x) {
	var factor_array = get_all_factors(x);
	return factor_array.length;
};