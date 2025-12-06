function toggleLetter() {
    const container = document.querySelector(".envelope-container");
    const aviso = document.querySelector(".aviso");
    const music = document.getElementById("bg-music");

    const isOpen = container.classList.toggle("open");

    if (isOpen) {
        aviso.style.opacity = "0";
        aviso.style.transform = "translate(-50%, -20px)";
        setTimeout(() => {
            aviso.style.display = "none";
        }, 500);

        if (music) {
            music.volume = 0.3;
            music.play().catch(() => {});
        }
    } else {
        aviso.style.display = "block";
        setTimeout(() => {
            aviso.style.opacity = "1";
            aviso.style.transform = "translate(-50%, 0)";
        }, 10);

        if (music) {
            music.pause();
            music.currentTime = 0;
        }
    }
}

document.addEventListener("visibilitychange", () => {
    const music = document.getElementById("bg-music");
    const container = document.querySelector(".envelope-container");

    if (!music) return;

    if (document.hidden) {
        if (!music.paused) {
            music.pause();
        }
    } else {
        if (container.classList.contains("open")) {
            music.play().catch(() => {});
        }
    }
});
