
document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = new Audio("kya mujhe.mp3");
    const progressBar = document.getElementById("progressbar");
    const seekBackwardButton = document.getElementById("seekBackward");
    const playPauseButton = document.getElementById("MasterPlay");
    const seekForwardButton = document.getElementById("seekForward");

    playPauseButton.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.classList.replace("fa-play", "fa-pause");
        } else {
            audioPlayer.pause();
            playPauseButton.classList.replace("fa-pause", "fa-play");
        }
    });


    seekBackwardButton.addEventListener("click", function () {
        audioPlayer.currentTime -= 10;
    });

    seekForwardButton.addEventListener("click", function () {
        audioPlayer.currentTime += 10;
    });

    audioPlayer.addEventListener("timeupdate", function () {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
    });

    audioPlayer.addEventListener("ended", function () {
        playPauseButton.classList.replace("fa-pause", "fa-play");
        progressBar.value = 0;
    });
});
