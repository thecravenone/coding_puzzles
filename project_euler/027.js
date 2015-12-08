//Title: Project Euler problem - Quadratic primes
//Source: https://projecteuler.net/problem=27

//find primes with:
//n^2 + an +b WHERE |a| < 1000 AND |b| < 1000

var max_a = 0;
var max_b = 0;
var max_primes = 0;

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
	console.log(x + " is prime!")
	return true;
};

for (var a = -999; a < 1000; a++) {
	for (var b = -999; b < 1000; b++) {
		var generating_primes = true;
		var n = 0;
		var count = 0;
		while(generating_primes) {
			var my_quad = ((n*n) + (a*n) + b);
			if (is_prime(my_quad)) {
				count++;
				n++;
			}
			else generating_primes = false;
		}
		if (count > max_primes) {
			max_primes = count;
			max_a = a;
			max_b = b;
		}
	}
}

//console.log("n2 + " + max_a + "n + " + max_b + " genrates " + max_primes + " consecutive primes!")
console.log(max_a * max_b);
