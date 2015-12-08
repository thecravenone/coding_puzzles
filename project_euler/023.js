//Title: Project Euler problem - Non-abundant sums
//Source: https://projecteuler.net/problem=23

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
	//factors.push(x);
	//Removed because in this excercise, we only want factors <x
	return factors;
};

//Returns an array of all abundant numbers less than 28123
var abundant_numbers = [];
	for(var i=0;i<=28123;i++) {
		var my_factors = get_all_factors(i);
		var sum = 0;
		for(var j=0; j<my_factors.length; j++) {
			sum += my_factors[j];
		}
		if (sum > i) {
			abundant_numbers.push(i);
		}
	}

var abundant_sums = [];
	for(var i=0;i<abundant_numbers.length;i++) {
		for(var j=0; j<abundant_numbers.length;j++) {
			var my_sum = abundant_numbers[i] + abundant_numbers[j];
			if (my_sum > 28123) {
				j = abundant_numbers.length;	//Lazy Break
			}
			else  {
				abundant_sums.push(my_sum);
			}
		}
	}

var final_sum = 0;
	for (var i=1; i<=28123; i++) {
		if (abundant_sums.indexOf(i) == -1) {
			final_sum += i;
		}
	}

console.log(final_sum);
