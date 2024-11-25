# JavaScript Basics: Variable Declaration, Concatenation, and Function Declaration

## Description

This project demonstrates the use of basic JavaScript features, including variable declaration with `let`, string concatenation with template literals, and defining functions using arrow syntax. The code covers three main concepts:

1. **Variable Declaration with `let`**: Demonstrates how `let` works with block scope.
2. **String Concatenation**: Shows how to use template literals for easier string concatenation.
3. **Function Declaration**: Provides an example of declaring and using an arrow function to sum two numbers.

---

## Code Breakdown

### 1. **Variable Declaration with `let`**

```javascript
let x = 6;
if(true)
{
    let x = 5;
}
document.write(x + "<br>");
```

- **Explanation**:
  - A variable `x` is first declared and initialized with the value `6`.
  - Inside an `if` block, another variable `x` is declared with `let` and initialized with `5`. This `x` is scoped to the `if` block and does not affect the outer `x` declared outside the block.
  - **Output**: The `document.write(x)` will output `6` because the `x` inside the `if` block is scoped locally, and the outer `x` with value `6` remains unaffected.

### 2. **String Concatenation with Template Literals**

```javascript
let name = "sadman";
let m = `my name is ${name} .`;
document.write(m + "<br>");
```

- **Explanation**:
  - Here, we use template literals (denoted by backticks `` ` ``) to concatenate a string with a variable `name`.
  - `${name}` is used to insert the value of `name` into the string, making it easier to format strings with variables.
  - **Output**: The `document.write(m)` will output:  
    `"my name is sadman ."`

### 3. **Function Declaration with Arrow Function**

```javascript
const add = (x, y) => {
    document.write(x + y);
}
add(12, 12);
```

- **Explanation**:
  - An arrow function `add` is defined, which takes two parameters `x` and `y` and writes their sum to the document.
  - Arrow functions are a concise way to write functions in JavaScript, especially when they involve a simple expression.
  - **Output**: The `document.write(x + y)` will output `24` because `12 + 12` is calculated and written to the page.

---


- When the HTML page loads, the following will happen:
  - The `x` variable will print `6` to the screen because the inner `x` in the `if` block does not affect the outer `x`.
  - A message `"my name is sadman ."` will be printed using string interpolation.
  - The result of adding `12 + 12`, which is `24`, will be printed.

---


## Example Output

1. **First Output (Variable Declaration)**:  
   - `"6"` is displayed because the variable `x` outside the `if` block is unaffected by the `x` inside the block.
   
2. **Second Output (String Concatenation)**:  
   - `"my name is sadman ."` is displayed due to the use of template literals.

3. **Third Output (Function Output)**:  
   - `24` is displayed as the sum of `12 + 12` calculated by the `add` function.

---
