#!/usr/bin/perl
#Generate the factorial of the 
use bigint;
sub factorial {
	if ($_[0] == 1) {
		return 1;
	}
	#printf "ON" . $_[0];
	return ($_[0] * &factorial($_[0]-1));
}

printf factorial(shift(@ARGV)) . "\n";