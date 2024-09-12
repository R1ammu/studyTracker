// Get elements for audio
const brownNoise = document.getElementById('brownNoise');
const nsdrAudio = document.getElementById('nsdr');

// Get buttons
const brownNoiseButton = document.getElementById('brownNoiseButton');
const nsdrButton = document.getElementById('nsdrButton');

// Function to play or pause brown noise
function toggleBrownNoise() {
    if (brownNoise.paused) {
        console.log('Playing Brown Noise');
        brownNoise.play();
        brownNoiseButton.classList.add('active');
    } else {
        console.log('Pausing Brown Noise');
        brownNoise.pause();
        brownNoise.currentTime = 0; // Reset to start
        brownNoiseButton.classList.remove('active');
    }
}

// Function to play or pause NSDR audio
function toggleNSDR() {
    if (nsdrAudio.paused) {
        console.log('Playing NSDR Audio');
        nsdrAudio.play();
        nsdrButton.classList.add('active');
    } else {
        console.log('Pausing NSDR Audio');
        nsdrAudio.pause();
        nsdrAudio.currentTime = 0; // Reset to start
        nsdrButton.classList.remove('active');
    }
}

// Event listeners for buttons
brownNoiseButton.addEventListener('click', toggleBrownNoise);
nsdrButton.addEventListener('click', toggleNSDR);

// Debugging: Log when audio starts/stops
nsdrAudio.addEventListener('play', () => console.log('NSDR audio started'));
nsdrAudio.addEventListener('pause', () => console.log('NSDR audio paused'));
nsdrAudio.addEventListener('error', (e) => console.log('NSDR audio error:', e));
