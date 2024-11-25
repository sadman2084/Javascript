Here’s a `README.md` file for the provided JavaScript code:

---

# JavaScript: Default Parameters, Rest and Spread Operators

## Description

This project demonstrates the usage of **default parameters**, **rest parameters**, and **spread operators** in JavaScript functions. These features make functions more flexible and enable cleaner, more concise code. The following concepts are covered in this example:

1. **Default Parameters**: Sets default values for function parameters if no arguments are passed.
2. **Rest Parameters**: Collects all remaining arguments into an array.
3. **Spread Operator**: Expands arrays or objects into individual elements.

---

## Code Breakdown

### 1. **Default Parameters**

```javascript
function display(text = "no value found") {
    document.write(text)
}
display();
```

- **Explanation**:
  - This function `display()` takes one parameter `text`. If no argument is passed when calling the function, the default value `"no value found"` will be used.
  - The default parameter is assigned using `=`, and it ensures that the function behaves correctly even when no argument is passed.
  - **Output**: `"no value found"` will be displayed because no value is passed.

---

### 2. **Rest Parameters**

```javascript
function printNumbers(x, y, ...z) {
    document.write(`x = ${x}, y = ${y}, z= ${z}`)
}
printNumbers(10, 20, 30, 40, 50);
```

- **Explanation**:
  - The `...z` syntax is the rest parameter, which allows you to collect all remaining arguments into an array.
  - This allows functions to handle an indefinite number of arguments without explicitly declaring them.
  - **Output**: 
    ```
    x = 10, y = 20, z= 30,40,50
    ```

---

### 3. **Spread Operator**

#### **Spread in Function Call**

```javascript
function add(x, y, z) {
    return x + y + z;
}
let arr = [1, 2, 3];
sum = add(...arr);
document.write("<br>" + sum + "<br>");
```

- **Explanation**:
  - The spread operator `...` is used to unpack an array (`arr`) into individual elements, which are then passed as arguments to the `add()` function.
  - **Output**: 
    ```
    6
    ```

#### **Combining Arrays Using Spread**

```javascript
let arr1 = [4, 5, ...arr]
sum = add(...arr1);
document.write("<br>" + sum + "<br>");
```

- **Explanation**:
  - This example demonstrates combining arrays using the spread operator. The array `arr` is expanded and included in `arr1`, followed by calculating the sum using the `add()` function.
  - **Output**:
    ```
    12
    ```

#### **Combining Arrays and Objects Using Spread**

```javascript
let oddNumbers = [1, 3, 5, 9]
let evenNumbers = [2, 4, 6, 8, 10]

let totalNumbers = [...oddNumbers, ...evenNumbers]
// document.write(`Total Numbers = ${totalNumbers}`)
```

- **Explanation**:
  - The spread operator can be used to combine arrays. Here, `oddNumbers` and `evenNumbers` are combined into a new array `totalNumbers`.
  - **Output**:
    ```
    [1, 3, 5, 9, 2, 4, 6, 8, 10]
    ```

#### **Copying Arrays with Spread**

```javascript
let copyArray = [...totalNumbers]
// document.write(`copyArray = ${copyArray}`)
```

- **Explanation**:
  - The spread operator can also be used to create a shallow copy of an array. The array `totalNumbers` is copied into `copyArray`.
  - **Output**: 
    ```
    [1, 3, 5, 9, 2, 4, 6, 8, 10]
    ```

#### **Spread with Strings**

```javascript
let chars = ['A', 'B', ...'anisul', 'z'];
// document.write(`${chars}`)
```

- **Explanation**:
  - The spread operator can also be applied to strings, where each character in the string is unpacked as individual elements.
  - **Output**: 
    ```
    A B a n i s u l z
    ```

#### **Spread Operator with Object Concatenation**

```javascript
let personInfo1 = { name: 'Anisul Islam', age: 30 };
let personInfo2 = { id: '101', nationality: "bd" };

let p1 = { ...personInfo1 };
// document.write(p1)

let p2 = { ...personInfo1, ...personInfo2 };
document.write(p2)
```

- **Explanation**:
  - The spread operator can also be used to merge objects. Here, `personInfo1` and `personInfo2` are merged into a new object `p2`.
  - **Output**: 
    ```
    { name: 'Anisul Islam', age: 30, id: '101', nationality: 'bd' }
    ```

---

## How to Use

1. Copy the JavaScript code into a `<script>` tag in your HTML file or link to an external JavaScript file.
2. Include the code inside an HTML file to execute the script.

### Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript: Default Parameters, Rest & Spread Operators</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---

## Requirements

- A modern web browser that supports JavaScript ES6 features like default parameters, rest, and spread operators.
- Basic understanding of JavaScript functions and array manipulation.

---

## Example Output

1. **Default Parameter**:  
   - `"no value found"` will be displayed if no argument is passed to the `display()` function.

2. **Rest Parameters**:  
   - `x = 10, y = 20, z= 30,40,50` will be displayed, showing how the rest parameter collects all remaining arguments.

3. **Spread Operator in Function Call**:  
   - The sum of the values `1 + 2 + 3` is calculated, and `6` is displayed.

4. **Combining Arrays with Spread**:  
   - The combined array `[1, 3, 5, 9, 2, 4, 6, 8, 10]` will be displayed.

5. **Copying Arrays**:  
   - A copy of the array will be displayed: `[1, 3, 5, 9, 2, 4, 6, 8, 10]`.

6. **Spread with Strings**:  
   - The individual characters from the string `'anisul'` will be displayed along with `'A'` and `'z'`.

7. **Object Concatenation with Spread**:  
   - A merged object will be displayed: `{ name: 'SADMAN', age: 10, id: '101', nationality: 'bd' }`.

---

## License

This project is in the public domain and can be freely used, modified, and distributed.

---

### Notes

- The **default parameters** feature simplifies function declarations by allowing parameters to have default values if no value is passed.
- The **rest parameter** (`...z`) collects remaining arguments into an array, providing flexibility when the number of arguments is unknown.
- The **spread operator** (`...`) allows unpacking elements from arrays or objects, making it easy to combine, copy, or expand them.

