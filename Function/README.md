Here's a simple README file for your code:

```markdown
# **JavaScript Functions: With and Without Parameters**

This code demonstrates two types of functions in JavaScript: one **without parameters** and another **with parameters**. Each function calculates the square of a number using the `Math.pow()` method and displays the result.

---

### **Code Overview**

1. **Function Without Parameters**:
   - A function `p()` is created that does not take any parameters.
   - Inside the function, the number `5` is squared, and the result is displayed.

2. **Function With Parameters**:
   - A function `power(a)` is created that takes a parameter `a`.
   - The value of `a` is squared using the `Math.pow()` method, and the result is displayed.

---

### **Code Explanation**

#### **1. Function Without Parameters**
```javascript
function p() {
  var a = 5;
  document.write("using no parameter: " + Math.pow(a, 2)) + "<br><br>";
}
p();
```
- **Description**: 
  - The function `p()` does not accept any parameters. It uses a local variable `a` initialized to `5`.
  - It calculates `5^2` using `Math.pow(a, 2)` and prints the result.

#### **2. Function With Parameters**
```javascript
function power(a) {
  document.write("using parameter: " + Math.pow(a, 2)) + "<br><br>";
}
power(9);
```
- **Description**:
  - The function `power(a)` takes a parameter `a` and calculates its square (`a^2`) using `Math.pow(a, 2)`.
  - It prints the result based on the parameter passed when the function is called (`9` in this case).

---

### **Example Output**

```
Function without parameter
using no parameter: 25

Function with parameter
using parameter: 81
```

---
