Here's a README for your code:

---

# **JavaScript Value Classification: `if-else` vs `switch-case`**

This code demonstrates how to classify a numeric value as positive, negative, or zero using two different JavaScript control structures: **`if-else`** and **`switch-case`**.

---

### **Code Overview**

1. **Input**:
   - The program begins by prompting the user to input a numeric value using `prompt()`.
   - The `parseInt()` function converts the input into an integer.

2. **Using `if-else`**:
   - The first block of code checks whether the value is greater than 0, less than 0, or equal to 0, using `if-else` conditions.
   - It then prints the corresponding message (`positive value`, `negative value`, or `zero value`) to the document.

3. **Using `switch-case`**:
   - The second block uses a `switch-case` statement, where the condition evaluates `true`.
   - It checks the same conditions (`positive`, `negative`, or `zero`) and displays the appropriate message.

---

### **Code Explanation**

#### **1. Using `if-else`**
```javascript
if (value > 0) {
  document.write("positive value <br><br>");
} else if (value < 0) {
  document.write("negative value <br><br>");
} else {
  document.write("zero value <br><br>");
}
```
- **Description**: 
  - If the value is greater than 0, the program outputs `positive value`.
  - If the value is less than 0, it outputs `negative value`.
  - If the value is exactly 0, it outputs `zero value`.

#### **2. Using `switch-case`**
```javascript
switch (true) { 
  case value > 0:
    document.write("positive value <br>");
    break;

  case value < 0:
    document.write("negative value <br>");
    break;

  default:
    document.write("zero value <br>");
}
```
- **Description**:
  - The `switch-case` statement evaluates `true` and checks the cases based on the conditions (`value > 0`, `value < 0`, or the default case for `value == 0`).
  - Depending on the value, it prints the corresponding message.

---

### **Example Output**

- If the user enters `5`, the output will be:
```
Using if else
positive value

Using switch case
positive value
```

- If the user enters `-3`, the output will be:
```
Using if else
negative value

Using switch case
negative value
```

- If the user enters `0`, the output will be:
```
Using if else
zero value

Using switch case
zero value
```

---

### **Key Points**

- **`if-else`** is a straightforward method to handle conditional statements.
- **`switch-case`** is used for matching specific conditions, and in this case, it is used with `true` for evaluating multiple boolean conditions.
- Both methods serve the same purpose but differ in syntax and use cases. `switch-case` is often more concise when dealing with multiple conditions.

---

