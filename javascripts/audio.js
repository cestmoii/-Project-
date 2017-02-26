var audio = new Audio('audio/movement - 5_57.mp3');
var isPlaying = 0;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = 0;
    } else {
        audio.play();
        isPlaying = 1;
    }
}
