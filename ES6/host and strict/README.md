
# JavaScript Variable Hosting Example

## Description

This project demonstrates the concept of **variable hoisting** in JavaScript. Hoisting is a behavior in JavaScript where variable declarations (but not their initializations) are moved to the top of their containing scope during the compilation phase. This README explains how hoisting works with both `var` and `"use strict"` mode.

---

## Code Breakdown

### 1. **Hoisting with `var`**

```javascript
x = 12;
document.write(x);
var x;
```

- **Explanation**:
  - In JavaScript, using `var` allows a variable to be **hoisted**, meaning it is moved to the top of its scope. However, only the declaration is hoisted, not the initialization.
  - This allows you to assign a value to `x` before declaring it, and the value `12` will be displayed, even though the declaration appears after the assignment.
  - **Output**: `12`

### 2. **Without Hoisting (Using `let`)**

```javascript
x = 12;
document.write(x);

"use strict"
x = 12;
document.write(x);
```

- **Explanation**:
  - If you use `let`, hoisting **does not** work the same way. In strict mode (`"use strict"`), variables must be declared before they are used.
  - If you try to use `let` without declaring it first, it will throw an error because variables must be explicitly declared in strict mode.
  - The code without `let` works fine, but using `let` will result in an error in strict mode.

---


## Example Output

1. **First Output (Using `var`)**:  
   - The number `12` is displayed on the screen because JavaScript hoists the declaration of `x` to the top of the scope, allowing the assignment to occur before the variable is explicitly declared.
   
2. **Second Output (Strict Mode with `let`)**:  
   - If `let` is used in strict mode (`"use strict"`), it will throw an error if the variable is used before being declared, demonstrating that `let` enforces a stricter variable declaration policy.

---

