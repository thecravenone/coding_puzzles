//Title: Project Euler problem - Double-base palindromes
//Source: https://projecteuler.net/problem=36

var is_palindrome = function(input) {
	//Generate the reversed string by turning it into a string*, splitting that
	//string at each character, adding those characters to an array, reversing
	//that array, then joining the array back into a string
	//*useful for problems requiring checking if an int is a palindrome
	var reversed_input = input.toString().split('').reverse().join('');
	if (input == reversed_input) {
		return true;
	}
	else {
		return false;
	}
};

var dec_to_bin = function(input) {
	return input.toString(2);
};

var sum = 0;
for(var i=1; i<1000000; i++) {
	if (is_palindrome(i) && is_palindrome(dec_to_bin(i))) {
		sum += i;
	}
}
console.log(sum);
