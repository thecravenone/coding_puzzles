//Title: Project Euler problem - Largest palindrome product
//Source: https://projecteuler.net/problem=4

var is_palindrome = function(input) {
	//Generate the reversed number by turning it into a string, splitting that
	//string at each character, adding those characters to an array, reversing
	//that array, then joining the array back into a string
	var reversed_input = input.toString().split('').reverse().join('');
	if (input == reversed_input) {
		return true;
	}
	else {
		return false;
	}
};

var maximum = 0;

//There's gotta be a better way to do this, possibly starting at 999, working
//down and eventually determining that no lower answer will do
for(var a=1; a<=999; a++) {
	for(var b=1; b<=999; b++) {
		var sum = a*b;
		if (is_palindrome(sum) && sum > maximum) {
			maximum = sum;
		}
	}
}

console.log(maximum);