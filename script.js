const audio = document.getElementById('bg-audio');
const playIcon = document.getElementById('play-icon');

function toggleAudio() {
    if (audio.paused) {
        audio.play()
            .then(() => {
                playIcon.className = 'fa-solid fa-pause';
            })
            .catch(error => {
                console.log("المتصفح منع التشغيل، اضغط على الصفحة أولاً ثم جرب.");
                audio.play(); 
            });
    } else {
        audio.pause();
        playIcon.className = 'fa-solid fa-play';
    }
}