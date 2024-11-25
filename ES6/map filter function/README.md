# JavaScript: `map()` and `filter()` Functions Example

## Description

This project demonstrates the use of two powerful array methods in JavaScript: **`map()`** and **`filter()`**. These methods are used for transforming and filtering arrays, respectively.

- **`map()`**: Creates a new array by applying a provided function to each element of the array.
- **`filter()`**: Creates a new array with all elements that pass a condition specified in the provided function.

---

## Code Breakdown

### Example Code

```javascript
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
```

### Explanation:

#### 1. **Using `map()`**:
   - **Purpose**: The `map()` function creates a new array where each number is doubled.
   - **How it works**: The `map()` function takes a callback that multiplies each element (`number`) by 2.
   - **Result**: The output is a new array with the doubled values of the original array.

#### 2. **Using `filter()`**:
   - **Purpose**: The `filter()` function creates a new array that contains only the even numbers from the original array.
   - **How it works**: The `filter()` function takes a callback that checks if each number is divisible by 2 (i.e., an even number).
   - **Result**: The output is a new array containing only the even numbers from the original array.

---

## How the Code Works

1. **Original Array**:
   - The array `numbers` contains the values `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

2. **`map()` Method**:
   - The `map()` function is applied to each element of the array, doubling the value of each number.
   - The resulting array is displayed as:
     ```
     Doubled Numbers:  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
     ```

3. **`filter()` Method**:
   - The `filter()` function is used to select only the even numbers from the original array.
   - The resulting array of even numbers is displayed as:
     ```
     Even Numbers:  [2, 4, 6, 8, 10]
     ```

---

## Output

The output is displayed on the webpage using `document.write()`:

```
Doubled Numbers:  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Even Numbers:  [2, 4, 6, 8, 10]
```

---

### Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript map() and filter() Example</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---
