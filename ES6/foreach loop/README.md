# JavaScript: `forEach()` Loop Example

## Description

This project demonstrates the usage of the `forEach()` loop in JavaScript, which is a method used to iterate over arrays. The `forEach()` method executes a provided function once for each element in the array.

---

## Code Breakdown

### Example Code

```javascript
const fruits = ["apple", "banana", "cherry", "date"];

fruits.forEach(function(fruit) {
  document.write(fruit + "<br>");
});
```

- **Explanation**:
  - The `forEach()` method is used to iterate over the `fruits` array.
  - For each element in the array (`"apple"`, `"banana"`, `"cherry"`, `"date"`), the provided function is executed, and the element is written to the document using `document.write()`.

---

## How the Code Works

1. **Array Definition**: 
   - The array `fruits` contains four string elements: `["apple", "banana", "cherry", "date"]`.

2. **`forEach()` Method**:
   - The `forEach()` method is called on the `fruits` array.
   - It takes a callback function that gets executed for each item in the array.
   - In this case, the callback function takes the current element (`fruit`) and writes it to the document followed by a line break (`<br>`).

3. **Output**:
   - The loop iterates through each item in the array and prints each fruit on a new line in the document:
     ```
     apple
     banana
     cherry
     date
     ```

---


### Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript forEach Loop Example</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---



## Example Output

- **Output**: 
  ```
  apple
  banana
  cherry
  date
  ```

Each fruit in the array is printed on a new line using `document.write()`.

---

