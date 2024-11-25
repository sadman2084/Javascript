# README - JavaScript Module Example

## Overview

This example demonstrates the usage of JavaScript **modules** to import and export variables and functions. The code involves two files:

1. **Main JavaScript File** (`main.js`): This is where you import the variables and functions and interact with them.
2. **Target JavaScript File** (`target.js`): This file contains the definition of the `text` variable and the `setText` function that modifies it.

### Files Overview

#### `main.js`

In this file, you import the `text` variable, the `setText` function, and an alias `message` for the `text` variable from `target.js`. The script then demonstrates how to interact with the imported variables and functions.

```javascript
import { text as message, setText, text } from './target.js';

console.log(message); // Log initial value of text (before modification)

// Set a new value for the text variable using setText function
setText("goodbye");
console.log(text); // Log the modified value of text after using setText function
```

- **`message`**: This is an alias for the `text` variable imported from `target.js`.
- **`setText(txt)`**: A function imported from `target.js` that sets the value of the `text` variable to the passed argument (`txt`).
- **`text`**: The actual variable exported from `target.js` which holds the string value.

#### `target.js`

This file contains the definition of the `text` variable and the `setText` function used in `main.js`. It allows modifying the value of `text` by calling the `setText` function.

```javascript
// Export the text variable and the setText function
export let text = "from target"; // Initial value

export function setText(txt) {
    text = txt; // Modify the value of text
}
```

- **`text`**: This variable holds a string, initially set to `"from target"`.
- **`setText(txt)`**: This function takes a parameter (`txt`) and updates the `text` variable with the new value passed to it.

---

## Explanation of Code

1. **Module Import and Export**:
   - `text as message` is an alias for the `text` variable exported from `target.js`. This allows you to reference it as `message` in `main.js`.
   - `setText` is a named import for the function that modifies the `text` variable.
   - Both `text` and `setText` are imported from `target.js`.

2. **Asynchronous Nature**:
   - The example demonstrates that JavaScript imports and exports are asynchronous in nature. 
   - The initial log of `message` will display the original value (`"from target"`), while the second log after calling `setText("goodbye")` will show the updated value of `text` in the `main.js` file.

3. **Setting and Getting Values**:
   - The `setText` function allows changing the value of `text` dynamically.
   - After calling `setText("goodbye")`, the `text` value is updated to `"goodbye"`, and this updated value is logged to the console.

---

## How to Use

1. **File Structure**:
   ```
   /project-folder
   ├── main.js
   └── target.js
   ```


   Example HTML file:

   ```html
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>JavaScript Modules Example</title>
   </head>
   <body>
       <script type="module" src="main.js"></script>
   </body>
   </html>
   ```

3. **Output**:
   - On the browser's console, you should see the following:
     ```
     from target   // Initial value of text
     goodbye       // After calling setText("goodbye")
     ```

---

