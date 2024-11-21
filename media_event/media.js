const video = document.querySelector("video");

// Event listeners
video.addEventListener("canplay", () => console.log("Video ready to play"));
video.addEventListener("play", () => console.log("Video playing"));
video.addEventListener("playing", () => console.log("Video is currently playing"));
video.addEventListener("pause", () => console.log("Video paused"));
video.addEventListener("ended", () => console.log("Thanks for watching"));
video.addEventListener("volumechange", () => console.log(`Volume changed: ${video.volume}`));

// Toggle play/pause on click
video.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
