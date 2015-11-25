//Title: Challenge 239 [Easy] A Game of Threes
//Source: https://redd.it/3r7wxz
//Alternative solution - recursive

var input = 31337357;	

var num = input;

var GoT = function (num) {
	if (num == 1) {
		console.log(num);
	}
	else if (num % 3 == 0) {
		console.log (num + " 0");
		GoT(num/3);
	}
	else if ((num + 1) % 3 == 0) {
		console.log (num + " 1");
		GoT((num+1)/3);
	}
	else if ((num - 1) % 3 == 0) {
		console.log (num + " -1");
		GoT((num-1)/3);
	}
	else {
		console.log("WTF: " + num)
	}
};

GoT(input);