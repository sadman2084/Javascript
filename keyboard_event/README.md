# Textarea Key Event Listener Demo

## Overview
This project demonstrates how to handle different keyboard events inside a `<textarea>` element using JavaScript. The code listens for various keyboard-related events, such as `keydown` and `keyup`, and handles specific actions based on the user's input. The goal is to show how to manage key events and provide a way to prevent repeated key presses using the `keydown` event.

## Features
1. **`keydown` Event**: Detects when a key is pressed down. If a key is being repeated (held down), an alert is triggered to inform the user.
2. **`keyup` Event**: Detects when a key is released. The event object provides details such as the key pressed and additional properties (e.g., if the Shift key was held down).
3. **`keypress` Event**: (Commented out in the code) This event can be used to handle printable character keys, but it's deprecated and not recommended for modern use in favor of `keydown` and `keyup`.

## Project Structure
The project consists of the following files:

- **`index.html`**: The main HTML file that includes the `<textarea>` element.
- **`script.js`**: JavaScript file that adds event listeners to the `<textarea>` element for keyboard events.

### `index.html`

This HTML file contains a `<textarea>` element that users can interact with by typing. The JavaScript file `script.js` is included for the event handling functionality.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Textarea Key Event Listener Demo</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>Type in the Textarea</h1>
  <textarea rows="10" cols="30" placeholder="Start typing..."></textarea>
</body>
</html>
```

### `script.js`

This JavaScript file contains the event listeners for keyboard events (`keydown`, `keyup`) inside the `<textarea>` element. 

```javascript
const textarea = document.querySelector("textarea");

// Detect keydown event and handle key repetition
textarea.addEventListener("keydown", function (e) {
    if (e.repeat) {
        alert("Do not repeat the key!");
    }
});

// Detect keyup event and log the key pressed
textarea.addEventListener("keyup", function (e) {
    // Uncomment to check the key pressed, its keyCode, and if Shift key was held
    // document.write(e.key); // Log the key that was pressed
    // document.write(e.keyCode); // Log the keyCode of the key
    // document.write(e.shiftKey); // Log if Shift key was held down
});
```

### Key Events Explained

1. **`keydown`**:
   - This event is triggered when a key is pressed down. In the provided code, it is used to detect if a key is being **repeated** by checking `e.repeat`. If the key is being held down and repeated, an alert will be triggered, notifying the user to stop repeating the key.

2. **`keyup`**:
   - This event is fired when the user releases a key after pressing it. The code logs the details of the key released, such as:
     - `e.key`: The value of the key pressed (e.g., "a", "Enter").
     - `e.keyCode`: The numeric code associated with the key pressed (this is less commonly used now due to newer APIs).
     - `e.shiftKey`: A boolean value indicating whether the Shift key was held down when the key was released.

3. **`keypress`** (Commented Out):
   - This event was historically used to capture characters typed by the user. However, it is now considered **deprecated** and should be avoided in modern web development. It has been replaced by `keydown` and `keyup` for better compatibility and control over all types of key events.

