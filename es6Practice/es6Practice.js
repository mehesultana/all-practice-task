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
const dividing = (num) => {
    const result = num / 5;
    return result;
};
const dividing5 = dividing(15);
console.log(dividing5);

//3.b. with two parameters. will add two to each number and then multiply the result.
const doMath = (a, b) => {
    const sum = a + b;
    const result = sum;
    const output = sum * result;
    return output;
};
const total = doMath(2, 5);
console.log(total);

//3.c. three parameters. will multiply all three parameters
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyResult = multiply(5, 10, 20);
console.log(multiplyResult);

//3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.(make sure you return the result)

//4. [home work]: javascript function declaration vs arrow function

//5. array of numbers. and then map to get each elements multiplied by 5 ( must use arrow function)

const numbers = [2, 5, 8, 15, 67, 10, 20, 45, 76];

//6. [challenging] numbers of array. get odd numbers by using filter with arrow function
const findOdd = [4, 7, 13, 42, 64, 75, 97, 54, 79, 23, 62];

const oddNumbers = findOdd.filter((n) => n % 2);

console.log(oddNumbers);

//7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];

const expensive = products.filter((product) => product.price > 100);
// console.log(expensive);

/*

8. You have an object. Now use destructing to create a simple variable of any property of the object.
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters.
*/
