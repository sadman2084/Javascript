# **JavaScript Immediately Invoked Function Expression (IIFE)**

This code demonstrates the concept of **Immediately Invoked Function Expressions (IIFE)** in JavaScript. The function is defined and executed immediately after it is created.

---

### **Code Overview**

- The function `display(value)` is defined within parentheses, followed by `()` to invoke it immediately with a given argument (`5`).
- The function takes a `value` parameter and writes that value to the document using `document.write()`.

---

### **Code Explanation**

```javascript
(function display(value) {
    document.write(value);
})(5);
```

- **Function Definition**: 
  - The function `display(value)` is defined inside parentheses. This is known as a function expression.
  - The function uses the `document.write()` method to display the value passed to it.

- **Immediate Invocation**: 
  - After the function is defined, it is invoked immediately using `()` with the argument `5`.
  - This results in the value `5` being displayed on the web page.

### **Key Concepts**
- **IIFE (Immediately Invoked Function Expression)**: 
  - The function is executed immediately after it is defined, and this pattern is useful for avoiding polluting the global scope with unnecessary variables.
  - The syntax involves wrapping the function definition in parentheses and then invoking it with another pair of parentheses.

---

### **Example Output**
```
5
```

---

