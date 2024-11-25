# JavaScript Async Operations and Event Handling

This project demonstrates various JavaScript concepts such as higher-order functions, async/await, event handling, and setTimeout to manage asynchronous operations and events in a browser environment.

## Features

1. **Higher-Order Function**: 
   - The `higherOrderFunction` takes a value and a callback function and calls the callback with the provided value.

2. **Async Task Execution**:
   - `taskOne`, `taskTwo`, `taskThree`, and `taskFour` demonstrate how asynchronous functions can be managed in JavaScript.
   - `taskTwo` includes a `setTimeout` to simulate a delay, and `runTasks` ensures that tasks are run in a sequential order using `async/await`.

3. **Event Listeners**:
   - A button click listener (`button`) is set up to show an alert when clicked.
   - A window load event listener is set up to indicate when the page is fully loaded.

4. **`setTimeout` Example**:
   - A `setTimeout` is used to execute a block of code after a specified delay (2 seconds in this case).

## Code Explanation

### `printSquare` Function

```javascript
const printSquare = (x) => {
  document.write(`The square of ${x} is ${x * x}` + "<br>");
};
```

This function takes a number `x` and prints the square of `x` in the document.

### Higher-Order Function

```javascript
const higherOrderFunction = (y, callback) => {
  callback(y);
};
```

A higher-order function that accepts a number `y` and a `callback` function, then calls the callback with `y`.

### Async/Await with Tasks

```javascript
const taskOne = async () => {
  document.write(`Task 1` + "<br>");
};

const taskTwo = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.write(`Task 2` + "<br>");
      resolve();
    }, 2000);
  });
};

const taskThree = async () => {
  document.write(`Task 3` + "<br>");
};

const taskFour = () => {
  document.write(`Task 4` + "<br>");
};
```

- Each task prints a message to the document.
- `taskTwo` uses `setTimeout` to introduce a 2-second delay.
- `runTasks` ensures tasks are executed sequentially using `async/await`.

### Event Listeners

```javascript
document.getElementById('button').addEventListener('click', () => {
  alert('Button clicked!');
});

window.addEventListener('load', () => {
  document.write('Window loaded, ready to perform actions.');
});
```

- When the button is clicked, an alert will appear.
- When the window finishes loading, a message will be displayed.

### `setTimeout` Example

```javascript
setTimeout(() => {
  document.write('Executed after 2 seconds.');
}, 2000);
```

- The message "Executed after 2 seconds" will be displayed after a 2-second delay.

