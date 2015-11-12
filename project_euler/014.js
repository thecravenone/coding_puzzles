//Title: Project Euler problem - Longest Collatz sequence
//Source: https://projecteuler.net/problem=14

//This gets the length of n's chain
var get_chain_length = function (x) {
	//console.log("TESTING CHAIN LENGTH OF " + x)
	var this_chain_length = 0;
	while (x!= 1) {
		//console.log(x);
		if (x % 2 == 0) {
			x/=2;
		}
		else {
			x = 3 * x + 1;
		}
		this_chain_length++;
	}
	this_chain_length += 1;	//Accounting for 1
	//console.log("==========")
	return this_chain_length;
};

var winning_number;
var winning_numbers_chain_length = 0;

for(var i=2; i<1000000; i++) {
	my_chain_length = get_chain_length(i);
	if (my_chain_length > winning_numbers_chain_length) {
		winning_number = i;
		winning_numbers_chain_length = my_chain_length;
	}
}

console.log(winning_number);