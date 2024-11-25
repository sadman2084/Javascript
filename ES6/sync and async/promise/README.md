# JavaScript Promises, Async/Await, and Promise Handling

## Overview

This JavaScript code demonstrates how to use **Promises**, **Promise chaining**, and **`async`/`await`** to handle asynchronous operations sequentially and concurrently. It showcases three main concepts:

1. **Sequential Execution** using `async/await`.
2. **Concurrent Execution** using `Promise.all()`.
3. **Race Condition Handling** using `Promise.race()`.

The code includes several asynchronous tasks that simulate fetching data (like details of a person, completing tasks, etc.). It also illustrates how to catch errors using `try/catch` and handle them in asynchronous operations.

## Features

1. **Sequential Execution with `async/await`**:
    - Tasks are run one after another in a specific order.
    - Errors are handled using `try/catch`.

2. **Concurrent Execution with `Promise.all()`**:
    - Multiple tasks are run simultaneously.
    - Results are handled once all promises are resolved.

3. **Race Condition with `Promise.race()`**:
    - The first task to resolve (either `taskOne` or `taskTwo`) determines the result.

## Code Structure

### 1. Sequential Execution with `async/await`

```javascript
const runTasksSequentially = async () => {
  try {
    const person = await taskOne("sadman");
    const details = await taskTwo(person);
    document.write(JSON.stringify(details) + "<br>");
    
    const result3 = await taskThree();
    const result4 = await taskFour();
    
    document.write(result3 + "<br>"); 
    document.write(result4 + "<br>"); 
  } catch (error) {
    console.error("Error:", error);
  }
};
```

- In this part, we define an `async` function `runTasksSequentially` that waits for each task to complete before moving on to the next one using `await`.
- Each task depends on the results of the previous one.

### 2. Concurrent Execution with `Promise.all()`

```javascript
Promise.all([taskOne("sadman"), taskTwo({ personName: "sadman" }), taskThree(), taskFour()])
  .then(([res1, res2, res3, res4]) => {
    document.write("Results from Promise.all:" + "<br>");
    document.write(JSON.stringify(res1) + "<br>"); 
    document.write(JSON.stringify(res2) + "<br>"); 
    document.write(res3 + "<br>"); 
    document.write(res4 + "<br>"); 
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error);
  });
```

- `Promise.all()` is used to run multiple promises concurrently.
- This ensures all promises resolve before handling the results.

### 3. Race Condition Handling with `Promise.race()`

```javascript
Promise.race([taskOne("sadman"), taskTwo({ personName: "sadman" })])
  .then((result) => {
    document.write("First resolved task in Promise.race: " + JSON.stringify(result) + "<br>");
  })
  .catch((error) => {
    console.error("Error in Promise.race:", error);
  });
```

- `Promise.race()` will return the result of the first task that resolves, effectively ignoring the others once one promise settles.

### 4. Task Chaining with `async/await`

```javascript
const callAllTasks = async () => {
  try {
    const t1 = await taskOneSeq();
    console.log(t1);
    const t2 = await taskTwoSeq();
    console.log(t2);
    const t3 = await taskThreeSeq();
    console.log(t3);
    const t4 = await taskFourSeq();
    console.log(t4);
  } catch (e) {
    console.log(e);
  }
};
```

- This example demonstrates chaining multiple asynchronous tasks.
- The `callAllTasks()` function runs sequentially and logs the results.
- The third task (`taskThreeSeq`) will reject, which is caught by the `catch` block.

### Error Handling in Promises

In both `async/await` and `Promise` chains, errors are caught and logged to the console. This ensures that if any task fails, the error is logged instead of causing the program to crash.

## Task Definitions

### `taskOne()`

```javascript
const taskOne = (personName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        personName: personName,
      });
    }, 1000); 
  });
};
```

- This task simulates a delay of 1 second and resolves with the person's name.

### `taskTwo()`

```javascript
const taskTwo = (person) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Details of ${person.personName}`);
      resolve({
        age: 10,
        phone: 10344,
      });
    }, 2000);
  });
};
```

- This task simulates a 2-second delay and resolves with details (age, phone number).

### `taskThree()` and `taskFour()`

```javascript
const taskThree = () => {
  const task3Text = "Completed task 3";
  return Promise.resolve(task3Text);
};

const taskFour = () => {
  const task4Text = "Completed task 4";
  return Promise.resolve(task4Text);
};
```

- Both tasks resolve with simple text messages, representing the completion of the respective tasks.

### `taskOneSeq()`, `taskTwoSeq()`, `taskThreeSeq()`, and `taskFourSeq()`

- These are additional tasks used for sequential chaining examples. They resolve or reject with simple strings.


## Expected Output

- The document will display various results:
  - **Sequential results** from `taskOne`, `taskTwo`, `taskThree`, and `taskFour`.
  - **Results from `Promise.all()`** which are displayed after all tasks are resolved.
  - **First resolved result from `Promise.race()`**.
- In the console, you will see logs, including any errors from the `catch` blocks.

## Conclusion

This code is a basic demonstration of how asynchronous JavaScript can be handled using Promises, `async/await`, and methods like `Promise.all()` and `Promise.race()`. It's a great starting point for learning about managing asynchronous operations in JavaScript.

---

