//Title: Project Euler problem - Sum square difference
//Source: https://projecteuler.net/problem=6

var min_to_test = 1;
var max_to_test = 100;

var sum_of_squares = function(min, max) {
	var total = 0;
	for (var i=min; i<=max; i++) {
		total += Math.pow(i, 2);
	}
	return total;
};

var square_of_sums = function(min, max) {
	var sum = 0;
	for (var i=min; i<=max; i++) {
		sum += i;
	}
	return Math.pow(sum, 2);
};

var difference = square_of_sums(min_to_test, max_to_test) - sum_of_squares(min_to_test, max_to_test);
console.log(difference);