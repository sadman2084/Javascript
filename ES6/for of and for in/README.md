

# JavaScript: `for..of` and `for..in` Loops

## Description

This project demonstrates the usage of two different types of loops in JavaScript:

1. **`for..of` loop**: Used to iterate over iterable objects like arrays, strings, sets, and maps.
2. **`for..in` loop**: Used to iterate over the properties of an object.

Both loops help in accessing and manipulating the elements of arrays and properties of objects in JavaScript.

---

## Code Breakdown

### 1. **`for..of` Loop for Arrays**

```javascript
const students1 = ["ab", "bc", "cd", "da"];
for (let name of students1) {
   document.write(name + "<br>");
}
```

- **Explanation**:
  - The `for..of` loop is used to iterate over an array `students1`. It accesses each element of the array one by one.
  - This loop is particularly useful for arrays, strings, and other iterable objects.
  - **Output**:
    ```
    ab
    bc
    cd
    da
    ```

---

### 2. **`for..in` Loop for Objects**

```javascript
const students2 = {
    name: "sadman",
    age: 20, 
    cgpa: 2.01
}
for (let x in students2) {
    document.write(x + "<br>");
    document.write(students2[x] + "<br>");
}
```

- **Explanation**:
  - The `for..in` loop is used to iterate over the properties of an object (`students2`).
  - It accesses the keys (property names) of the object, and you can use those keys to access the corresponding values.
  - **Output**:
    ```
    name
    sadman
    age
    20
    cgpa
    2.01
    ```

---

### 3. **Using `for..in` Loop with an Object**

```javascript
let students = {
    ID: 20,
    name: 'sadman',
    cgpa: 2.01
}
for (let x in students) {
    document.write(`${x}: ${students[x]}` + "<br>");
}
```

- **Explanation**:
  - Here, the `for..in` loop iterates over the `students` object.
  - It prints both the key (`x`) and the value (`students[x]`) for each property of the object.
  - **Output**:
    ```
    ID: 20
    name: sadman
    cgpa: 2.01
    ```

---

### Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Loops: for..of and for..in</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---

## Requirements

- A modern web browser that supports JavaScript ES6 features.
- Basic understanding of JavaScript loops and objects.

---

## Example Output

1. **`for..of` Loop with Array**:
   - Iterates through each element of the `students1` array and prints:
     ```
     ab
     bc
     cd
     da
     ```

2. **`for..in` Loop with Object**:
   - Iterates through each property of the `students2` object and prints:
     ```
     name
     sadman
     age
     20
     cgpa
     2.01
     ```

3. **`for..in` Loop with Object**:
   - Iterates through the properties of the `students` object and prints:
     ```
     ID: 20
     name: sadman
     cgpa: 2.01
     ```

---

