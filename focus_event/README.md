# Input Field Focus and Blur Event Listener Demo

## Overview
This project demonstrates how to handle different focus and blur events in an HTML `<input>` field using JavaScript. The code listens for various events such as `blur`, `focus`, `focusin`, and `focusout`, and performs specific actions such as modifying the input's value, changing styles, and logging messages to the console.

The goal of this demo is to showcase how to interact with an `<input>` element when it gains or loses focus and how to manipulate its properties in response to those events.

## Features
1. **`blur` Event**: When the input loses focus, the value is transformed to uppercase.
2. **`focus` Event**: When the input gains focus, the background color changes to orange, and padding is applied.
3. **`focusin` Event**: Triggered when the input element or any of its descendants gains focus.
4. **`focusout` Event**: Triggered when the input element or any of its descendants loses focus.

## Project Structure
The project consists of the following files:

- **`index.html`**: The main HTML file containing the `<input>` element.
- **`script.js`**: JavaScript file that handles the focus and blur event listeners on the `<input>` field.

### `index.html`

This HTML file contains a single `<input>` field where the user can interact. The JavaScript file `script.js` is included for event handling.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Input Field Focus and Blur Demo</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>Focus and Blur Event Listener Demo</h1>
  <input type="text" placeholder="Type something..." />
</body>
</html>
```

### `script.js`

This JavaScript file contains the event listeners for the `blur`, `focus`, `focusin`, and `focusout` events attached to the `<input>` element.

```javascript
const input = document.querySelector("input");

// Listen for the blur event and convert the input value to uppercase
input.addEventListener("blur", function (event) {
  // Uncomment to log the input value
  // document.write(event.target.value);
  input.value = event.target.value.toUpperCase();
});

// Listen for the focus event and change the input styles
input.addEventListener("focus", function () {
  console.log("focus is occurred");
  input.style.backgroundColor = "orange"; // Change background color to orange
  input.style.padding = "2rem"; // Apply padding to input field
});

// Listen for the focusin event (triggered when focus enters the input)
input.addEventListener("focusin", function () {
  console.log("focusin is occurred");
});

// Listen for the focusout event (triggered when focus leaves the input)
input.addEventListener("focusout", function () {
  console.log("focusout is occurred");
});
```

### Event Listeners Explained

1. **`blur`**:
   - Triggered when the input loses focus. The value entered in the input field is converted to uppercase using `toUpperCase()` to demonstrate how we can modify the value when the user leaves the field.

2. **`focus`**:
   - Triggered when the input gains focus (e.g., when the user clicks into the input field). In this case, the background color of the input is changed to orange, and the padding is increased to `2rem` to make the field more prominent.

3. **`focusin`**:
   - Triggered when the input field or any of its child elements gains focus. Unlike `focus`, which is specifically for the element itself, `focusin` bubbles and can capture focus events on child elements as well.

4. **`focusout`**:
   - Triggered when the input field or any of its child elements loses focus. This is the opposite of `focusin` and allows you to track when the input element or its children stop being the active focus.

