//Title: Project Euler problem - Smallest multiple
//Source: https://projecteuler.net/problem=5

var max_divisor = 20;
var to_test = max_divisor;	//No point in starting lower than the lowest divisor.
var found = false;

while (!found)	{
	found = true;
	for(var i=2; i<=max_divisor; i++) {
		if (to_test % i != 0) {
			found = false;
			i = max_divisor + 1;	//Lazy loop break.
			to_test += max_divisor;
		}
	}
}

console.log(to_test);