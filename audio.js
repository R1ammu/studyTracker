const brownNoise = document.getElementById('brownNoise');

// Play brown noise
function playBrownNoise() {
    brownNoise.play();
}

// Stop brown noise
function stopBrownNoise() {
    brownNoise.pause();
    brownNoise.currentTime = 0;
}

// Button for manually playing brown noise (future proof for adding more buttons)
const brownNoiseButton = document.getElementById('brownNoiseButton');
brownNoiseButton.addEventListener('click', playBrownNoise);

// Future buttons for other sounds can be added here
