# Location Information Display

This project demonstrates how to display the different components of the current webpage's `location` object (URL) using JavaScript and DOM manipulation. The page dynamically updates elements to show various parts of the URL, including the full URL, protocol, hostname, port, and pathname.

## Features

- Displays the **full URL** of the current page.
- Shows the **protocol** (e.g., `http` or `https`).
- Displays the **hostname** (domain) of the current page.
- Shows the **port** number, if any.
- Displays the **pathname** (path to the current page).

## How It Works

1. **HTML Structure:**
   - A `<div>` element with the class `location-div` contains five child elements (e.g., `<p>` tags) where each component of the location will be displayed.

2. **JavaScript Logic:**
   - The script retrieves the various components of the `location` object using `location.href`, `location.protocol`, `location.hostname`, `location.port`, and `location.pathname`.
   - It then updates the text content of the child elements of the `.location-div` to display the corresponding location component.

## Requirements

- A modern web browser that supports JavaScript and the `location` object (e.g., Chrome, Firefox, Safari, Edge).
- No external libraries or dependencies are required.

## Usage

1. Clone or download the project.
2. Open the HTML file in your browser.
3. The page will display the current URL components, including:
   - Full URL (e.g., `https://example.com:8080/path/to/page`).
   - Protocol (e.g., `https:`).
   - Hostname (e.g., `example.com`).
   - Port (e.g., `8080`).
   - Pathname (e.g., `/path/to/page`).

## Code Explanation

### HTML

```html
<div class="location-div">
    <p></p> <!-- Will display location.href -->
    <p></p> <!-- Will display location.protocol -->
    <p></p> <!-- Will display location.hostname -->
    <p></p> <!-- Will display location.port -->
    <p></p> <!-- Will display location.pathname -->
</div>
```

- The `location-div` contains five child `<p>` elements.
- Each `<p>` element is used to display one component of the URL.

### JavaScript

```javascript
var locationDiv = document.querySelector(".location-div");

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = location.hostname;

var p4 = locationDiv.children[3];
p4.textContent = location.port;

var p5 = locationDiv.children[4];
p5.textContent = location.pathname;
```

- **`location.href`**: Retrieves the entire URL of the current page.
- **`location.protocol`**: Retrieves the protocol part of the URL (e.g., `http:` or `https:`).
- **`location.hostname`**: Retrieves the hostname (domain) of the URL (e.g., `example.com`).
- **`location.port`**: Retrieves the port number of the URL (e.g., `8080`), or an empty string if no port is specified.
- **`location.pathname`**: Retrieves the path of the current URL (e.g., `/path/to/page`).
  
The script assigns each of these values to the corresponding `<p>` element inside the `location-div`.

## Customization

- You can add additional `<p>` elements in the HTML to display more components of the `location` object, such as `location.search` (query string) or `location.hash` (URL fragment).
- You can apply CSS to style the `.location-div` and its child elements for better presentation.

