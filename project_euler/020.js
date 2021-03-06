//Title: Project Euler problem - Factorial digit sum
//Source: https://projecteuler.net/problem=20

/******************************************************************************
JS won't store a number this large properly but if it did, it would be
generated by the following:
var factorial = function (x) {
	if (x==1) {
		return 1;
	}
	return(x * factorial(x-1))
}
After generating this number, this code is indeitical to problem 16
******************************************************************************/

var big_num = "93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000";

var num_arry = big_num.split('');
var sum = 0;
for(var i=0; i<big_num.length; i++) {
	sum += parseInt(big_num[i]);
}
console.log(sum);