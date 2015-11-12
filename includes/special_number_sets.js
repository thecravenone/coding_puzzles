//Variable numbers related to special number sets

var triangle_number = function(x) {
	var sum =0;
	for(var i=0; i<=x; i++) {
		sum += i;
	}
	return sum
};
//That's great and all but I don't want to start from scratch on each triangle number
var next_triangle_number = function(previous_triangle_number, previous_position) {
	return previous_triangle_number + previous_position + 1;
};