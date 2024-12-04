# DAY 3

## Input

Example string: `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`


## Task 1

Process string to extract all substrings like `mul(num1, num2)`. Each `mul` is an instruction that should return product of `num1 * num2`. Sum all products (eg for above example `2*4 + 5*5 + 11*8 + 8*5`)

## Task 2

Consider additional instructions in the string like `do()` and `don't()`. `mul` instructions after `don't()` are not to be taken under consideration. Every `do()` instruction re-enables counting (eg for above example `2*4 + 8*5`)