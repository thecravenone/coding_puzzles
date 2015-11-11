//Title: Project Euler problem - Special Pythagorean triplet
//Source: https://projecteuler.net/problem=9

var a = 0;
var b = 1;

var get_c = function(i_a, i_b) {
	return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
};

//console.log(c(3,4));

var completed = false;
while (a < b && completed == false) {
	while (a < b && completed == false) {
		var c = get_c(a,b);
		if (a + b + c == 1000) {
			console.log(a*b*c);
			completed = true;
		}
		a++;
	}
	b++
	a = 1;
}