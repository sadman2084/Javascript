Here’s a GitHub README in Markdown format for your code:

```markdown
# **JavaScript Loop Examples: `for`, `while`, and `do-while`**

This code demonstrates the usage of three different looping structures in JavaScript to display a message multiple times: **`for` loop**, **`while` loop**, and **`do-while` loop**. Each loop prints the message "Hardware geeks" five times to the document.

---

### **Code Overview**

1. **Using `for` loop**:
   - The `for` loop runs a fixed number of times (in this case, 5 times).
   - It prints the message "Hardware geeks" on each iteration.

2. **Using `while` loop**:
   - The `while` loop runs as long as the condition (`i < 5`) is `true`.
   - Similar to the `for` loop, it prints the message "Hardware geeks" 5 times.

3. **Using `do-while` loop**:
   - The `do-while` loop ensures the code block is executed at least once before checking the condition.
   - It also prints the message "Hardware geeks" 5 times.

---

### **Code Explanation**

#### **1. Using `for` loop**
```javascript
document.write("Using for loop  <br><br>");
for (var i = 0; i < 5; i++) {
  document.write("Hardware geeks <br>");
}
```
- **Description**: 
  - The `for` loop is set to iterate 5 times, with the loop variable `i` starting from 0 and increasing by 1 each time (`i++`).
  - It prints "Hardware geeks" 5 times as long as the condition `i < 5` holds true.

#### **2. Using `while` loop**
```javascript
document.write("Using while loop  <br><br>");
var i = 0;
while (i < 5) {
  document.write("Hardware geeks <br>");
  i++;
}
```
- **Description**: 
  - The `while` loop starts with `i = 0` and checks the condition `i < 5`.
  - As long as the condition is true, it prints the message "Hardware geeks" and increments `i` by 1 each time.

#### **3. Using `do-while` loop**
```javascript
document.write("Using do while loop  <br><br>");
var i = 0;
do {
  document.write("Hardware geeks <br>");
  i++;
} while (i < 5);
```
- **Description**: 
  - The `do-while` loop runs the code block first, then checks if the condition `i < 5` is still true. 
  - It prints the message "Hardware geeks" and increments `i` until `i` reaches 5.

---

### **Example Output**
In each case, the output will be:
```
Using for loop
Hardware geeks
Hardware geeks
Hardware geeks
Hardware geeks
Hardware geeks

Using while loop
Hardware geeks
Hardware geeks
Hardware geeks
Hardware geeks
Hardware geeks

Using do while loop
Hardware geeks
Hardware geeks
Hardware geeks
Hardware geeks
Hardware geeks
```

---
