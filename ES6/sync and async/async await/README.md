# Using `await` with Promises in JavaScript

## Overview

This example demonstrates how to use `await` with a `Promise` in JavaScript. It simulates an asynchronous operation (like fetching data) using `setTimeout` and then handles the result using an `async` function.

The core concept is to showcase how the `await` keyword pauses the execution of code until a `Promise` resolves, allowing for easier handling of asynchronous operations in a readable, synchronous-like manner.

## Code Explanation

### 1. `getNumber` Function
The `getNumber` function returns a `Promise` that resolves after a 2-second delay. This simulates an asynchronous task, such as fetching data or performing a time-consuming operation.

```javascript
const getNumber = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(42); // Resolve the promise with the value 42 after 2 seconds
      }, 2000);
    });
};
```
- `setTimeout` is used to simulate a delay of 2 seconds before resolving the `Promise`.
- The `resolve(42)` call means the `Promise` will return the value `42`.

### 2. `getValue` Function
The `getValue` function is an `async` function that uses `await` to wait for the `getNumber` function to complete. The result is then written to the document.

```javascript
const getValue = async () => {
    const result = await getNumber(); // Wait for the getNumber() promise to resolve
    document.write(result); // Output the result (42) to the document
};
```
- The `async` keyword is used to define an asynchronous function that will use `await`.
- The `await getNumber()` line pauses the execution of the function until `getNumber()` resolves, allowing the code to proceed with the result.
- After 2 seconds, the value `42` is written to the document using `document.write(result)`.

### 3. Calling the `getValue` Function
Finally, the `getValue` function is called to initiate the process.

```javascript
getValue();
```

When `getValue()` is invoked, it calls `getNumber()`, waits for the `Promise` to resolve, and then outputs the value `42` to the document after 2 seconds.

## Output

After running the code, you will see the following output on the webpage:

```
42
```

This result appears in the web browser after a delay of 2 seconds.


### Example Usage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promise Example</title>
</head>
<body>

<script>
  // JavaScript code goes here (the same code as provided)
</script>

</body>
</html>
```

## Concepts Covered

- **Promises**: A way to handle asynchronous operations in JavaScript, such as fetching data or executing long-running tasks.
- **`await`**: A keyword used to pause the execution of an asynchronous function until the Promise is resolved.
- **`async` function**: A function defined with the `async` keyword that allows the use of `await` to handle Promises in a more synchronous style.
- **`document.write()`**: A method used to write content to the HTML document.

## Conclusion

This code demonstrates a basic example of using `async` and `await` to handle asynchronous operations. It highlights how JavaScript can handle time-consuming tasks (like fetching data) in a more readable and manageable way by using `Promises` and `async/await`.

