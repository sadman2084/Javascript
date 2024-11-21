# Button Click and Keypress Animation with Audio

This is a simple web project that adds interactivity to buttons using JavaScript. When a button is clicked or a key is pressed on the keyboard, it triggers an audio playback and applies an animation to the corresponding button.

## Features
- **Button Click Interaction**: Clicking a button will play a sound and trigger an animation.
- **Keypress Interaction**: Pressing a key corresponding to a button will also trigger the sound and animation.
- **CSS Animation**: A box-shadow animation is applied to the button when it is clicked or when the corresponding key is pressed.
- **Audio Playback**: A sound is played when an interaction happens.

## Project Structure
- **index.html**: The HTML file that contains the structure of the page, including buttons.
- **design.css**: The CSS file that contains the styles and animations for the buttons.
- **audio.js**: The JavaScript file that controls the button interactions, audio playback, and animations.

## Files Overview

### index.html
This HTML file contains the structure of the page, including the button elements and a script link to the JavaScript file.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="design.css">
</head>

<body>
    <button class="mybutton a">a</button>
    <script src="audio.js"></script>
</body>

</html>
```

### design.css
This CSS file styles the button and the animation that is applied when the button is clicked or the key is pressed.
```css
button {
    width: 100px;
    height: 50px;
    margin: 20px;
}

.anim {
    box-shadow: 0 15px 18px 0 rgba(255, 0, 0, 0.3); /* Add color and adjust transparency */
    opacity: 0.5;
}
```

### audio.js
This JavaScript file manages the button clicks and keypresses, handles audio playback, and adds the animation class to the button that was interacted with.
```javascript
document.querySelectorAll(".mybutton").forEach(function(button) {
    button.addEventListener("click", function() {
        var text = this.innerHTML.trim(); // Trim whitespace around the button text

        // Call the audio
        var audio = new Audio("sounds/h.mp3");
        audio.play();

        // Call the animation function
        animation(text);
    });
});

// If key is pressed
document.addEventListener("keypress", function(event) {
    var text = event.key;

    // Play audio
    var audio = new Audio("sounds/h.mp3");
    audio.play();

    // Trigger the animation function
    animation(text);
});

// Animation function
function animation(text) {
    var selectbutton = document.querySelector("." + text); 
    if (selectbutton) {
        selectbutton.classList.add("anim"); // Add animation class to the button
    }
}
```
