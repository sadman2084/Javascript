# Interactive Web Page with Event Listeners

## Overview
This project demonstrates a basic HTML structure and JavaScript code that handles several browser events, including page load, page unload, scroll, window resize, and the toggle action of a `<details>` element. The JavaScript listens for these events and logs relevant messages or information to the console.

## Features
1. **Page Load Event**: Logs a message to the console when the page is fully loaded.
2. **Page Unload Event**: Logs a message when the page is about to be unloaded (e.g., closing the browser or navigating away).
3. **Scroll Event**: Logs a message every time the user scrolls on the page.
4. **Resize Event**: Logs the current window's height and width whenever the window is resized.
5. **Details Toggle**: Tracks whether the `<details>` element is open or closed and logs this information.

## Project Structure
The project consists of the following files:

- **`index.html`**: The main HTML file containing the structure of the page.
- **`style.css`**: External CSS file (not provided in the example, but should be used for styling).
- **`index.js`**: External JavaScript file that handles the event listeners.

### `index.html`

This is the HTML file that structures the page. It contains a `<details>` element with a `<summary>` tag labeled "Catto" and a `<p>` tag that contains the text "Bilai Zindabad". The `style.css` file is linked for styling, and the `index.js` file is included for the event listeners.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body style="height: 150vh">
    <details>
      <summary>Catto</summary>
      <p>
       Bilai Zindabad
      </p>
    </details>

    <script src="./index.js"></script>
  </body>
</html>
```

### `index.js`

The JavaScript file that adds event listeners to the window and the `<details>` element. It listens for the following events:

1. `load`: Triggered when the page is fully loaded.
2. `unload`: Triggered when the page is about to be unloaded.
3. `scroll`: Triggered when the user scrolls the page.
4. `resize`: Triggered when the window is resized, logging the current height and width.
5. `toggle`: Triggered when the `<details>` element is opened or closed, logging whether it is open or closed.

```javascript
// Event listener for page load
window.addEventListener("load", function () {
  console.log("load");
});

// Event listener for page unload
window.addEventListener("unload", function () {
  console.log("unload");
});

// Event listener for scroll
window.addEventListener("scroll", function () {
  console.log("scroll");
});

// Event listener for resize
window.addEventListener("resize", function () {
  const width = window.outerWidth;
  const height = window.outerHeight;
  console.log(`height: ${height}, width: ${width}`);
});

// Event listener for toggle on <details> element
const details = document.querySelector("details");

details.addEventListener("toggle", function (e) {
  console.log(e.target.open);
});
```

