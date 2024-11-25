# JavaScript Array Methods: `find()`, `findIndex()`, and Conditional Logic

## Description

This project demonstrates the usage of **`find()`**, **`findIndex()`**, and how to use these methods with conditions on arrays in JavaScript. These methods are useful when working with arrays and allow developers to search for elements based on specific criteria.

---

## Code Breakdown

### 1. **Using `find()` to Get the First Matching Value**

The `find()` method returns the **first element** in the array that satisfies the provided testing function.

```javascript
let numbers = [5, 55, 30, 40, 50];

const evenNumbers = (value, i
## How to Use

1. Copy the JavaScript code into a `<script>` tag in your HTML file or link to an external JavaScript file.
2. Open the HTML file in a browser to see the results.
ndex, array) => {
    if (value % 2 === 0) {
        return value;
    }
};

let newNumbers = numbers.find(evenNumbers);
document.write(newNumbers + "<br>"); // Output: 30
```

In this example:
- We define a function `evenNumbers` that checks if a number is even (`value % 2 === 0`).
- `numbers.find(evenNumbers)` returns the **first even number** in the `numbers` array, which is `30`.

### 2. **Using `findIndex()` to Get the Index of the First Matching Value**

The `findIndex()` method returns the **index** of the first element in the array that satisfies the provided testing function. If no match is found, it returns `-1`.

```javascript
document.write(numbers.findIndex(evenNumbers) + "<br>"); // Output: 2
```

In this case, the index of the first even number (`30`) is `2`.

### 3. **Using `find()` with Objects**

The `find()` method can also be used with arrays of objects. Here's an example where we use it to find a student with a `gpa` greater than 4.

```javascript
const students = [
    {
        id: 1,
        gpa: 3.5,
    },
    {
        id: 2,
        gpa: 2,
    },
    {
        id: 3,
        gpa: 4.5,
    },
    { 
        id: 4,
        gpa: 5,
    },
];

document.write(students.find((x) => x.gpa > 4) + "<br>");
```

In this case:
- The `find()` method searches through the `students` array to find the **first student** whose `gpa` is greater than 4.
- The student with `id: 3` and `gpa: 4.5` is returned.

### Output

The output of the code will be displayed in the browser using `document.write()`. Here are the expected results:

1. **First even number in the array (`find()`):**
   ```
   30
   ```

2. **Index of the first even number (`findIndex()`):**
   ```
   2
   ```

3. **First student with a GPA greater than 4 (`find()` with objects):**
   ```
   [object Object] {id: 3, gpa: 4.5}
   ```

(Note: When you print an object directly, it might not display in the expected format unless you extract specific properties.)

---

### Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Array Methods Example</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---

