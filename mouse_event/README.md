# Event Listener Demo - HTML and JavaScript

## Overview
This project demonstrates the use of various mouse event listeners in JavaScript. The code listens for user interactions (click, double-click, mouse movements, etc.) within a specific `<div>` and its child buttons. When triggered, the event listeners perform different actions, such as writing text to the page or logging information to the console.

The goal is to practice handling mouse events by activating them one by one in the script. Each event listener is added to the `<div>` and buttons within it.

## Features
- **Click and Double-Click**: Listen for click and double-click events on the `<div>` element.
- **Mouse Movement**: Track mouse movement within the `<div>` and log the offset position.
- **Button Clicks**: Log the text of the clicked button.

## Project Structure
The project consists of the following files:

- **`index.html`**: The main HTML structure of the page.
- **`design.css`**: External CSS file for styling (not provided, but should be used for styling).
- **`mouse.js`**: JavaScript file that handles mouse events.

### `index.html`

This is the HTML file that contains a `<div>` element with three buttons inside. The JavaScript file `mouse.js` is included to add event listeners to the page elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="design.css" />
  </head>
  <body>
    <div id="my-div" class="div1">
      <p>Catto Zindabad</p>
      <button class="btn">btn1</button>
      <button class="btn">btn2</button>
      <button class="btn">btn3</button>
    </div>

    <script src="mouse.js"></script>
  </body>
</html>
```

### `mouse.js`

This JavaScript file contains multiple event listeners that respond to different mouse actions. Here's the code with explanations:

```javascript
const div = document.querySelector("div");

// Listen for the "click" event
div.addEventListener("click", function (event) {
    document.write("click is occurred");
    // Uncomment to explore more properties of the event target
    // document.write(event.target);
    // document.write(event.target.id);
    // document.write(event.target.className);
    // document.write(event.target.innerHTML);
    // document.write(event.target.innerText);
    // document.write(event.target.textContent);
});

// Listen for the "dblclick" (double-click) event
div.addEventListener("dblclick", function () {
    document.write("dblclick is occurred");
});

// Uncomment to practice more events
// div.addEventListener("mousedown", function () {
//     document.write("mousedown is occurred");
// });
// div.addEventListener("mouseup", function () {
//     document.write("mouseup is occurred");
// });
// div.addEventListener("mouseenter", function () {
//     document.write("mouseenter is occurred");
// });
// div.addEventListener("mouseleave", function () {
//     document.write("mouseleave is occurred");
// });
// div.addEventListener("mouseover", function () {
//     document.write("mouseover is occurred");
// });

// Listen for the "mousemove" event
div.addEventListener("mousemove", function (e) {
    console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
});

// Listen for click events on each button and log the button's inner text
const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
    button.addEventListener("click", function (e) {
        document.write(e.target.innerText);
    });
});
```

## Event Listeners Explanation

Here’s a brief explanation of each event listener used in the code:

1. **`click`**: 
   - Triggered when the user clicks anywhere inside the `<div>`. The `event.target` can be used to retrieve the specific element that was clicked, such as the `<div>` itself or a button inside it.
   - In the code, the `click` event writes the text "click is occurred" to the document.

2. **`dblclick`**: 
   - Triggered when the user double-clicks anywhere inside the `<div>`.
   - It writes "dblclick is occurred" to the document.

3. **`mousedown`** (Commented Out):
   - Triggered when the user presses a mouse button down. This event is useful for tracking when the mouse button is initially pressed.

4. **`mouseup`** (Commented Out):
   - Triggered when the user releases a mouse button. This event often pairs with `mousedown` to handle complete click actions.

5. **`mouseenter`** (Commented Out):
   - Triggered when the mouse pointer enters the element's boundaries (i.e., the cursor moves inside the `<div>`).
   
6. **`mouseleave`** (Commented Out):
   - Triggered when the mouse pointer leaves the element's boundaries (i.e., the cursor moves outside the `<div>`).

7. **`mouseover`** (Commented Out):
   - Triggered when the mouse pointer enters any part of an element, including child elements. It's often used for hover effects.

8. **`mousemove`**: 
   - Triggered whenever the mouse pointer moves inside the `<div>`. The `e.offsetX` and `e.offsetY` provide the position of the mouse relative to the `<div>`, which is logged to the console.
   
9. **Button `click`**: 
   - For each button (`.btn`), a `click` event is added. When a button is clicked, it writes the button's inner text (e.g., "btn1", "btn2", "btn3") to the document.

