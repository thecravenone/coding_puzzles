//Title: Project Euler problem - Amicable numbers
//Source: https://projecteuler.net/problem=21

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

var d = function (n) {
	var factors = get_all_factors(n);
	factors.pop();	//Remove n
	//console.log(factors);
	var sum = 0;
	for(var i=0; i<factors.length; i++) {
		sum += factors[i];
	}
	//console.log(sum);
	return sum;
}

var is_amicable = function (x) {
	var a = d(x);
	var b = d(a);
	if (x == b && a != b) {
		console.log(x + " is Amicable!")
		return true;
	}
	return false;
}

var sum = 0;
for(var i=2; i<10000; i++) {
	if (is_amicable(i)) {
		sum += i;
	}
}
console.log(sum);
