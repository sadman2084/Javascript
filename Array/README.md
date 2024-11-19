# JavaScript Array Operations Example

This project demonstrates basic array operations in JavaScript, including creating arrays, taking input, performing array manipulations, and outputting results using `document.write()`. It showcases different use cases like adding, removing, and concatenating elements.

---

## Features

1. **Taking Input into an Array**:  
   The program uses a loop to take 5 inputs from the user and stores them in an array.

2. **Displaying Array Elements**:  
   After taking input, it outputs the elements of the array in the browser.

3. **Array Operations**:  
   - **Adding an element to the end of an array**: Using the `push()` method.
   - **Removing the last element**: Using the `pop()` method.
   - **Concatenating arrays**: Using the `concat()` method.

---

## Code Breakdown

### 1. Input Array
The code first creates an array of size 5 and takes 5 user inputs to fill it. Each input is converted to an integer using `parseInt()`.

```javascript
var arr = new Array(5);
for (var i = 0; i < 5; i++) {
  arr[i] = parseInt(prompt());
}
```

### 2. Output Array (Case 1)
After the input, the program outputs the contents of the array.

```javascript
document.write("output  <br><br>");
document.write("case 1 <br>");
for (var i = 0; i < 5; i++) {
   document.write(arr[i] + "<br>");
}
```

### 3. Predefined Array (Case 2)
A predefined array `arr1` is displayed.

```javascript
document.write("case 2 <br>");
var arr1 = [1, 2, 3, 4, 5];
document.write(arr1 + "<br>");
```

### 4. Array Operation: Add an Element (Case 3)
The `push()` method is used to add an element (6) to the end of the array, and the updated array is displayed.

```javascript
document.write("case 3 <br>");
arr1.push(6);
document.write(arr1 + "<br>");
document.write("length of array is: " + arr1.length + "<br>");
```

### 5. Array Operation: Remove Last Element (Case 4)
The `pop()` method is used to remove the last element from the array.

```javascript
document.write("case 4 <br>");
arr1.pop();
document.write(arr1 + "<br>");
```

### 6. Array Operation: Concatenate Arrays (Case 5)
The `concat()` method is used to combine `arr` and `arr1`, creating a new array.

```javascript
document.write("case 5 <br>");
var arr2 = arr.concat(arr1);
document.write(arr2 + "<br>");
```

---

## Sample Output

### Case 1: Output of User Input
```
output  
case 1
5
2
8
4
9
```

### Case 2: Predefined Array Output
```
case 2
1,2,3,4,5
```

### Case 3: Add Element Using `push()`
```
case 3
1,2,3,4,5,6
length of array is: 6
```

### Case 4: Remove Last Element Using `pop()`
```
case 4
1,2,3,4,5
```

### Case 5: Concatenate Arrays
```
case 5
5,2,8,4,9,1,2,3,4,5
```

---

## Key Concepts Demonstrated

- **Array Creation**: Using `new Array()` and array literal notation `[]`.
- **Taking Input**: Using `prompt()` to get input from the user and `parseInt()` to convert it to integers.
- **Array Manipulation**:
  - `push()` to add an element to the end of an array.
  - `pop()` to remove the last element.
  - `concat()` to combine multiple arrays into one.

---

