# JavaScript Array and Object Destructuring Example

## Description

This project demonstrates **array destructuring**, **object destructuring**, and **variable swapping** in JavaScript. These features are part of ES6 and allow developers to extract values from arrays and objects more concisely.

### Topics Covered:

- **Array Destructuring**
- **Object Destructuring**
- **Variable Swapping**

---

## Code Breakdown

### 1. **Array Destructuring**

Array destructuring allows us to unpack values from arrays into individual variables. 

```javascript
let numbers = [10, 20, 30, 40, 50];
let [num1, num2, num3, num4, num5] = numbers;
document.write(numbers[0] +"<br>"); // Accessing the first element of the array
document.write(num1 +"<br>"); // Unpacked value of num1 (10)
document.write(num2  +"<br>"); // Unpacked value of num2 (20)

let [x, y, ...z] = numbers; 
document.write(z); // z will contain the rest of the array [30, 40, 50]
```

In the above code:
- The first three elements of the `numbers` array are assigned to the variables `num1`, `num2`, and `num3`.
- The rest of the elements are gathered into an array `z` using the spread operator (`...`).

### 2. **Swapping Variables**

JavaScript allows for easy swapping of two variables using destructuring.

```javascript
let m = 10, n = 5;
[m, n] = [n, m]; // Swap values of m and n
document.write(m  +"<br>"); // 5
document.write(n +"<br>"); // 10
```

In this example, the values of `m` and `n` are swapped using array destructuring. After the swap, `m` is 5, and `n` is 10.

### 3. **Object Destructuring**

Object destructuring allows you to extract multiple properties from an object and assign them to variables.

```javascript
const student2 = {
    id: 101,
    fullName: 'sadman',
    gpa: 3.92,
    languages: {
        native: 'Bangla',
        beginner: 'cat language'
    }
}
let { fullName, gpa, languages } = student2;
document.write(fullName+"<br>"); // sadman
document.write(languages.native+"<br>"); // Bangla
```

Here:
- `fullName`, `gpa`, and `languages` are extracted from the `student2` object using destructuring. 
- `languages.native` extracts the `native` language from the nested `languages` object.

### 4. **Function Parameter Destructuring**

You can also use destructuring in function parameters to directly extract values from objects.

```javascript
const studentDetails = ({ firstName, roll, dob }) => {
    document.write(`${firstName} ${roll} ${dob}` +"<br>");
}

const studentInfo = {
    dob: '15/05/02',
    roll: 20,
    firstName: 'sadman'
}

studentDetails(studentInfo); // sadman 20 15/05/02
```

In this example:
- The `studentDetails` function uses parameter destructuring to extract `firstName`, `roll`, and `dob` directly from the `studentInfo` object.

---

## Output

The output of this code will be displayed in the browser using `document.write()`. Below are the results:

1. **Array Destructuring:**
   ```
   10
   10
   20
   [30, 40, 50]
   ```

2. **Variable Swapping:**
   ```
   5
   10
   ```

3. **Object Destructuring:**
   ```
   sadman
   Bangla
   ```

4. **Function Parameter Destructuring:**
   ```
   sadman 20 15/05/02
   ```

---

### Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Destructuring Example</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---

