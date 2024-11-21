
document.querySelectorAll(".mybutton").forEach(function(button) {
    button.addEventListener("click", function() {
        var text = this.innerHTML.trim(); // Trim whitespace around the button text

//call the audio
        var audio = new Audio("sounds/h.mp3");
        audio.play();

        // Tcall the animation function
        animation(text);
    });
});

//if key pressed
document.addEventListener("keypress", function(event) {
    var text = event.key;


    var audio = new Audio("sounds/h.mp3");
    audio.play();

 
    animation(text);
});

// Animation function
function animation(text) {
    var selectbutton = document.querySelector("." + text); 
    if (selectbutton) {
        selectbutton.classList.add("anim"); 
    }
}
