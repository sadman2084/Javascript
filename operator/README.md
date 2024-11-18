## JavaScript Arithmetic, Increment/Decrement, and Assignment Operators

This code demonstrates the use of **arithmetic operators**, **increment/decrement operations**, and **assignment operators** in JavaScript. Here's a detailed breakdown:

---

### **1. Arithmetic Operators**
Arithmetic operators perform basic mathematical operations.

```javascript
document.write("Sum of 5 and 2: " + (5 + 2) + "<br>");
document.write("Minus of 5 and 2: " + (5 - 2) + "<br>");
document.write("Multiply of 5 and 2: " + 5 * 2 + "<br>");
document.write("Division of 5 and 2: " + 5 / 2 + "<br>");
document.write("Power of 5 and 2: " + 5 ** 2 + "<br><br>");
```

| **Operator** | **Operation**      | **Example**   | **Output** |
|--------------|--------------------|---------------|------------|
| `+`          | Addition           | `5 + 2`       | `7`        |
| `-`          | Subtraction        | `5 - 2`       | `3`        |
| `*`          | Multiplication     | `5 * 2`       | `10`       |
| `/`          | Division           | `5 / 2`       | `2.5`      |
| `**`         | Exponentiation     | `5 ** 2`      | `25`       |

---

### **2. Increment and Decrement**
Increment (`++`) and decrement (`--`) operators increase or decrease a variable by 1. They can be used in **prefix** or **postfix** forms:

```javascript
var a = 5;
document.write("Postincrement(a++): " + a++ + "<br>"); // Prints current value, then increments
document.write("Preincrement(++a): " + ++a + "<br>"); // Increments first, then prints
```

| **Type**       | **Operation**                 | **Behavior**                        | **Example (Initial a = 5)** | **Output** |
|----------------|-------------------------------|-------------------------------------|-----------------------------|------------|
| `a++` (Post)   | Post-increment                | Returns `a`, then increments `a`.  | `document.write(a++)`       | `5`        |
| `++a` (Pre)    | Pre-increment                 | Increments `a`, then returns `a`.  | `document.write(++a)`       | `7`        |
| `a--` (Post)   | Post-decrement                | Returns `a`, then decrements `a`.  | `document.write(a--)`       | `7`        |
| `--a` (Pre)    | Pre-decrement                 | Decrements `a`, then returns `a`.  | `document.write(--a)`       | `5`        |

---

### **3. Assignment Operators**
Assignment operators modify variables by performing operations and reassigning the result.

```javascript
var x = 6;
x += 2; // x = x + 2
document.write("Using (+=): " + x + "<br>");
```

| **Operator** | **Operation**      | **Example**   | **Result** |
|--------------|--------------------|---------------|------------|
| `+=`         | Addition assignment | `x += 2`      | `x = x + 2` |
| `-=`         | Subtraction assignment | `x -= 2`   | `x = x - 2` |
| `*=`         | Multiplication assignment | `x *= 2`| `x = x * 2` |
| `/=`         | Division assignment | `x /= 2`     | `x = x / 2` |

---

### **How These Operators Work**
1. **Arithmetic Operators**: Perform basic math operations like addition, subtraction, multiplication, division, and exponentiation.
2. **Increment/Decrement**: Increase or decrease a variable’s value, either before or after evaluating the expression.
3. **Assignment Operators**: Combine arithmetic and assignment to modify variables in a shorthand way.

---
