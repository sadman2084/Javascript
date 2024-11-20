# JavaScript Operators: A Comprehensive Guide

This project demonstrates various types of operators in JavaScript with examples. Operators are symbols or keywords used to perform operations on variables and values.

---

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations.

### Examples:
```javascript
document.write("Sum of 5 and 2: " + (5 + 2) + "<br>");  // Addition
document.write("Minus of 5 and 2: " + (5 - 2) + "<br>"); // Subtraction
document.write("Multiply of 5 and 2: " + 5 * 2 + "<br>"); // Multiplication
document.write("Division of 5 and 2: " + 5 / 2 + "<br>"); // Division
document.write("Power of 5 and 2: " + 5 ** 2 + "<br><br>"); // Exponentiation
```

### Output:
```
Sum of 5 and 2: 7
Minus of 5 and 2: 3
Multiply of 5 and 2: 10
Division of 5 and 2: 2.5
Power of 5 and 2: 25
```

---

## Increment and Decrement Operators

Increment (`++`) and Decrement (`--`) operators are used to increase or decrease a variable's value by one.

### Examples:
```javascript
var a = 5; 
document.write("Postincrement(a++): " + a++ + "<br>"); // Uses then increments
document.write("Preincrement(++a): " + ++a + "<br>"); // Increments then uses
```

---

## Assignment Operators

Assignment operators are used to assign values to variables and perform operations at the same time.

### Examples:
```javascript
var x = 6;
x += 2;  // Add and assign
x -= 2;  // Subtract and assign
x *= 2;  // Multiply and assign
x /= 2;  // Divide and assign
```

### Output:
```
Using (+=): 8
Using (-=): 6
Using (*=): 12
Using (/=): 6
```

---

## Relational (Comparison) Operators

Relational operators compare two values and return a boolean (`true` or `false`).

### Examples:
```javascript
document.write((n > m));  // Greater than
document.write((n == m)); // Equal to (value only)
document.write((n === m)); // Strict equality (value and type)
document.write((n != m));  // Not equal
```

---

## Logical Operators

Logical operators are used to combine or modify boolean expressions.

### Examples:
```javascript
document.write((n > m && n < m)); // Logical AND
document.write((n > m || n < m)); // Logical OR
document.write((!true));          // Logical NOT
```

---


## Concepts Covered

- **Arithmetic Operators**: Perform mathematical operations.
- **Increment/Decrement Operators**: Increase or decrease values by one.
- **Assignment Operators**: Assign and operate values.
- **Relational Operators**: Compare values.
- **Logical Operators**: Combine boolean expressions.

---

