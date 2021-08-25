//1. let const
let money = 6240;
money = 2357;

const name = 'Mehe';

//2. template string (2.a: use variable)
const aboutMyself = `hello, this is Sultana Mehe.
Student of MC College . 
Recently I'm learning full-stack web development .
`;

//2. template string (2.b: use object  property)

//3. arrow function
const add = (num1, num2) => num1 + num2;
const sum = add(12, 45);
console.log(sum);
//3.a. with one parameter. will return the number after dividing by 5

/*



3.b. with two parameters. will add two to each number and then multiply the result.
3.c. three parameters. will multiply all three parameters
3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
make sure you return the result
4. [home work]: javascript function declaration vs arrow function
5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
6. [challenging] numbers of array. get odd numbers by using filter with arrow function
7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
8. You have an object. Now use destructing to create a simple variable of any property of the object.
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters.
*/
