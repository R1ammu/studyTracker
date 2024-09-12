// Get audio elements from the DOM
const brownNoise = document.getElementById('brownNoise');
const nsdrAudio = document.getElementById('nsdrAudio');

// Get buttons from the DOM
const brownNoiseButton = document.getElementById('brownNoiseButton');
const nsdrAudioButton = document.getElementById('nsdrAudioButton');

// Variables to track current state of audio
let isBrownNoisePlaying = false;
let isNSDRPlaying = false;

// Function to play or stop audio
function toggleAudio(audioElement, isPlaying, button) {
    if (isPlaying) {
        audioElement.pause();
        audioElement.currentTime = 0; // Reset to the beginning
        button.classList.remove('active'); // Update button styling
        return false; // Now audio is not playing
    } else {
        audioElement.play();
        button.classList.add('active'); // Update button styling
        return true; // Now audio is playing
    }
}

// Event listeners for the audio buttons
brownNoiseButton.addEventListener('click', () => {
    isBrownNoisePlaying = toggleAudio(brownNoise, isBrownNoisePlaying, brownNoiseButton);

    // Stop NSDR audio if it is playing
    if (isNSDRPlaying) {
        nsdrAudio.pause();
        nsdrAudio.currentTime = 0;
        nsdrAudioButton.classList.remove('active');
        isNSDRPlaying = false;
    }
});

nsdrAudioButton.addEventListener('click', () => {
    isNSDRPlaying = toggleAudio(nsdrAudio, isNSDRPlaying, nsdrAudioButton);

    // Stop brown noise if it is playing
    if (isBrownNoisePlaying) {
        brownNoise.pause();
        brownNoise.currentTime = 0;
        brownNoiseButton.classList.remove('active');
        isBrownNoisePlaying = false;
    }
});
