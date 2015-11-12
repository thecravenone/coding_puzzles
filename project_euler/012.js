//Title: Project Euler problem - Highly divisible triangular number
//Source: https://projecteuler.net/problem=12

//Generate the xth triangle number
/*
var triangle_number = function(x) {
	var sum =0;
	for(var i=0; i<=x; i++) {
		sum += i;
	}
	return sum
};
*/
//That's great and all but I don't want to start from scratch on each triangle number
var next_triangle_number = function(previous_triangle_number, previous_position) {
	return previous_triangle_number + previous_position + 1;
};
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
var number_of_factors = function(x) {
	var factor_array = get_all_factors(x);
	return factor_array.length;
};

var tri_pos = 0;
var current_triangle_number = 0;
var num_factors = 0;

while (num_factors < 500) {
	current_triangle_number = next_triangle_number(current_triangle_number, tri_pos);
	num_factors = number_of_factors(current_triangle_number);
	//DEBUG
	//console.log("Testing triangle number " + tri_pos + " which is " + current_triangle_number + "and has " + num_factors + " factors.");
	tri_pos++;
}
console.log(current_triangle_number);
