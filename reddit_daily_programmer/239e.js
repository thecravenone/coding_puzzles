//Title: Challenge 239 [Easy] A Game of Threes
//Source: https://redd.it/3r7wxz

var input = 31337357;			//Problem input
var num = input;

while (num != 1) {
	if (num % 3 == 0) {
		console.log(num + " 0");
		num /= 3;
	}
	else if ((num + 1) % 3 == 0) {
		console.log (num + " 1");
		num++;;
		num /= 3;
	}
	else if ((num - 1) % 3 == 0) {
		console.log (num + " -1");
		num--;
		num /= 3;
	}
}
console.log("1");