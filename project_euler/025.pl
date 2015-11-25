#!/usr/bin/perl
#Title: Project Euler - Even Fibonacci numbers
#Source: https://projecteuler.net/problem=25
use bigint;

$a = 0;
$b = 1;
$c = 0;
$index = 1;

while (length($c) < 1000) {
	$c = $a + $b;
	$a = $b;
	$b = $c;

	$index++;
}

printf $index . "\n";