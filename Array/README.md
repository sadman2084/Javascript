# JavaScript Array Operations Example

This project demonstrates a series of JavaScript array operations including creation, input, and various methods to manipulate and sort arrays. It showcases a variety of cases that perform different tasks, from basic array creation to complex sorting and modifying of arrays.

---

## Features

1. **Input Array**:  
   The user is prompted to input 5 numbers which are then stored in an array.

2. **Predefined Array**:  
   A predefined array is created and displayed.

3. **Array Operations**:
   - **Adding elements** to the end or beginning of an array (`push()`, `unshift()`).
   - **Removing elements** from the beginning or end of an array (`pop()`, `shift()`).
   - **Modifying arrays** using `splice()` and `slice()`.
   - **Sorting arrays** in ascending or descending order using `sort()` and `reverse()`.

---

## Code Breakdown

### 1. **Input Array**  
The code starts by prompting the user to input 5 numbers, which are stored in an array.

```javascript
var arr = new Array(5);
for (var i = 0; i < 5; i++) {
  arr[i] = parseInt(prompt());
}
```

### 2. **Displaying Array Elements (Case 1)**  
The elements of the user-created array are displayed.

```javascript
document.write("output  <br><br>");
document.write("case 1 <br>");
for (var i = 0; i < 5; i++) {
  document.write(arr[i] + "<br>");
}
```

### 3. **Predefined Array and Operations (Case 2)**  
A predefined array `[1, 2, 3, 4, 5]` is displayed.

```javascript
document.write("case 2 <br>");
var arr1 = [1, 2, 3, 4, 5];
document.write(arr1 + "<br>");
```

### 4. **Adding an Element Using `push()` (Case 3)**  
The `push()` method is used to add an element (6) to the end of the array, and the length of the array is displayed.

```javascript
document.write("case 3 <br>");
arr1.push(6);
document.write(arr1 + "<br>");
document.write("length of array is: " + arr1.length + "<br>");
```

### 5. **Removing the Last Element Using `pop()` (Case 4)**  
The `pop()` method is used to remove the last element from the array.

```javascript
document.write("case 4 <br>");
arr1.pop();
document.write(arr1 + "<br>");
```

### 6. **Concatenating Arrays Using `concat()` (Case 5)**  
The `concat()` method is used to merge two arrays.

```javascript
document.write("case 5 <br>");
var arr2 = arr.concat(arr1);
document.write(arr2 + "<br>");
```

### 7. **Removing the First Element Using `shift()` (Case 6)**  
The `shift()` method is used to remove the first element from the array.

```javascript
document.write("case 6 <br>");
arr1.shift();
document.write(arr1 + "<br>");
```

### 8. **Adding an Element to the Beginning Using `unshift()` (Case 7)**  
The `unshift()` method is used to add an element to the beginning of the array.

```javascript
document.write("case 7 <br>");
arr1.unshift(8);
document.write(arr1 + "<br>");
```

### 9. **Adding/Removing Elements Using `splice()` (Case 8 and Case 9)**  
The `splice()` method is used to modify the array by adding or removing elements.

- **Adding** elements at a specific index (Case 8):
  ```javascript
  arr1.splice(2, 0, 7, 9);
  document.write(arr1 + "<br>");
  ```
- **Removing** elements from a specific index (Case 9):
  ```javascript
  arr1.splice(1, 2);
  document.write(arr1 + "<br>");
  ```

### 10. **Extracting a Portion of the Array Using `slice()` (Case 10)**  
The `slice()` method is used to create a new array from a portion of an existing array.

```javascript
document.write("case 10 <br>");
var arr3 = arr1.slice(1);
document.write(arr3 + "<br>");
```

### 11. **Sorting Numbers in Ascending Order Using `sort()` (Case 11)**  
The `sort()` method is used to sort the elements of the array in ascending order.

```javascript
document.write("case 11 <br>");
arr.sort(function (a, b) {
  return a - b;
});
document.write(arr + "<br>");
```

### 12. **Sorting Strings in Ascending Order (Case 12)**  
The `sort()` method is used to sort strings in ascending order.

```javascript
document.write("case 12 <br>");
var name = ["sadman", "taher", "mehedi"];
name.sort();
document.write(name + "<br>");
```

### 13. **Sorting Strings in Descending Order Using `reverse()` (Case 13)**  
The `reverse()` method is used to reverse the order of the array (i.e., sorting in descending order).

```javascript
document.write("case 13 <br>");
var name = ["sadman", "taher", "mehedi"];
name.reverse();
document.write(name + "<br>");
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

### Case 5: Concatenate Arrays Using `concat()`
```
case 5
5,2,8,4,9,1,2,3,4,5
```

### Case 6: Remove First Element Using `shift()`
```
case 6
2,3,4,5,6
```

### Case 7: Add Element to Beginning Using `unshift()`
```
case 7
8,2,3,4,5,6
```

### Case 8: Add Elements Using `splice()`
```
case 8
8,7,9,2,3,4,5,6
```

### Case 9: Remove Elements Using `splice()`
```
case 9
8,2,5,6
```

### Case 10: Extract Portion Using `slice()`
```
case 10
2,5,6
```

### Case 11: Sort Numbers Using `sort()`
```
case 11
2,5,6
```

### Case 12: Sort Strings Using `sort()`
```
case 12
mehedi,sadman,taher
```

### Case 13: Reverse Strings Using `reverse()`
```
case 13
taher,sadman,mehedi
```

---

## Key Concepts Demonstrated

- **Array Creation**: Using `new Array()` and array literal notation `[]`.
- **Input Handling**: Using `prompt()` to gather input and `parseInt()` to convert it into an integer.
- **Array Manipulation**: 
  - `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, and `slice()` for modifying arrays.
  - Sorting with `sort()` and reversing with `reverse()`.
- **Array Concatenation**: Using `concat()` to combine arrays.

---

