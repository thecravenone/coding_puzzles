//Title: Project Euler - Multiples of 3 and 5
//Source: https://projecteuler.net/problem=1

var sum = 0;

for (var i=1; i<1000; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		sum += i;
	}
}

console.log(sum);