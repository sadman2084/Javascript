# Canvas Drawing Example

## Description

This project demonstrates how to use the HTML `<canvas>` element and JavaScript to draw basic shapes, such as rectangles and circles, on a canvas. It includes both filled and outlined shapes, with a black border around a green rectangle and a red circle centered on the canvas.

---

## Code Breakdown

### 1. Canvas Setup

```javascript
var c = document.getElementById("canva");
var ctx = c.getContext("2d");
```

- **Canvas**: The canvas element with the id `canva` is selected.
- **Context**: The 2D drawing context (`ctx`) is obtained, allowing drawing operations to be performed on the canvas.

### 2. Drawing a Rectangle with a Border

```javascript
ctx.strokeStyle = "black";  // Set the border color to black
ctx.strokeRect(10, 10, 380, 280);  // Draw a black border rectangle
```

- **`ctx.strokeStyle`**: This sets the color of the rectangle's border to black.
- **`ctx.strokeRect(10, 10, 380, 280)`**: This draws a rectangle with a black border starting at the position `(10, 10)` with a width of `380` and a height of `280`.

### 3. Drawing a Filled Green Rectangle

```javascript
ctx.fillStyle = "green";  // Set the fill color to green
ctx.fillRect(12, 12, 376, 276);  // Draw a green rectangle
```

- **`ctx.fillStyle`**: This sets the fill color of the rectangle to green.
- **`ctx.fillRect(12, 12, 376, 276)`**: This draws a filled green rectangle starting at position `(12, 12)` with a width of `376` and a height of `276`. It is slightly smaller than the border rectangle.

### 4. Drawing a Circle

```javascript
var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();  // Start a new path for the circle
ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI, false);  // Draw the circle
ctx.fillStyle = "red";  // Set the fill color to red
ctx.fill();  // Fill the circle with red color
ctx.stroke();  // Draw the outline of the circle
```

- **Circle Positioning**: The circle is centered in the middle of the canvas by using `c.width / 2` and `c.height / 2` for the `centerX` and `centerY`.
- **`ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI, false)`**: This creates an arc (a circle in this case) with a radius of `50`, starting from angle `0` to `2 * Math.PI` (360 degrees).
- **`ctx.fillStyle = "red"`**: This sets the circle’s fill color to red.
- **`ctx.fill()`**: Fills the circle with the specified red color.
- **`ctx.stroke()`**: Adds a border (outline) around the circle.

---


## Example Output

1. **Rectangle**:
   - A rectangle with a black border and a green fill will be drawn with dimensions 380x280, starting at the position (10, 10).
   
2. **Circle**:
   - A red circle with a radius of 50 will be drawn at the center of the canvas.

---

