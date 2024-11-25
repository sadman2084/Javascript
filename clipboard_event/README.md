# Clipboard Event Listener Demo

## Overview
This project demonstrates how to handle clipboard events (`copy`, `cut`, and `paste`) in JavaScript. The code listens for these events on an `<input>` field and updates the content of a `<p>` element to provide feedback when the user interacts with the clipboard.

The goal of this demo is to show how to track and respond to clipboard actions, such as copying, cutting, and pasting text, within an input field.

## Features
1. **`copy` Event**: Detects when the user copies text from the input field and updates the `<p>` element with the message "you have copied".
2. **`cut` Event**: Detects when the user cuts text from the input field and updates the `<p>` element with the message "you have cut".
3. **`paste` Event**: Detects when the user pastes text into the input field and updates the `<p>` element with the message "you have pasted".

## Project Structure
The project consists of the following files:

- **`index.html`**: The main HTML file containing the `<input>` field and the `<p>` element where the messages will be displayed.
- **`script.js`**: JavaScript file that handles clipboard events (`copy`, `cut`, `paste`) and updates the page content accordingly.

### `index.html`

This HTML file contains an `<input>` field where the user can interact by copying, cutting, or pasting text. It also contains a `<p>` element to display messages when these clipboard actions occur.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clipboard Event Listener Demo</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>Clipboard Event Listener Demo</h1>
  <input type="text" placeholder="Copy, Cut, or Paste here..." />
  <p></p>
</body>
</html>
```

### `script.js`

This JavaScript file contains the event listeners for clipboard actions (`copy`, `cut`, and `paste`). When one of these actions is detected on the `<input>` element, it updates the `<p>` element with an appropriate message.

```javascript
const input = document.querySelector("input");
const p = document.querySelector("p");

// Listen for the "copy" event
input.addEventListener("copy", function () {
  p.innerText = "you have copied"; // Display message when text is copied
});

// Listen for the "cut" event
input.addEventListener("cut", function () {
  p.innerText = "you have cut"; // Display message when text is cut
});

// Listen for the "paste" event
input.addEventListener("paste", function () {
  p.innerText = "you have pasted"; // Display message when text is pasted
});
```

### Event Listeners Explained

1. **`copy`**:
   - This event is triggered when the user copies text from the input field. It listens for the `copy` event and updates the `<p>` element with the message "you have copied".

2. **`cut`**:
   - This event is triggered when the user cuts text from the input field. It listens for the `cut` event and updates the `<p>` element with the message "you have cut".

3. **`paste`**:
   - This event is triggered when the user pastes text into the input field. It listens for the `paste` event and updates the `<p>` element with the message "you have pasted".
