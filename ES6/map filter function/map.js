// Example Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Using map() to double each number in the array
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
document.write("Doubled Numbers:", doubledNumbers  +"<br>" );

// 2. Using filter() to keep only the even numbers in the array
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
document.write("Even Numbers:", evenNumbers);
