//Title: Project Euler - Even Fibonacci numbers
//Source: https://projecteuler.net/problem=2

var a = 0;
var b = 1;
var c = 0;
var sum = 0;

while (c < 4000000) {
	c = a + b;
	a = b;
	b = c;

	if (c % 2 == 0) {
		sum += c;
	}
}

console.log(sum)