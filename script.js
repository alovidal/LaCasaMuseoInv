let isAnimating = false;
let musicStarted = false;

document.addEventListener("DOMContentLoaded", () => {
    const envelopeContainer = document.getElementById("envelopeContainer");
    const music = document.getElementById("bg-music");
    const letter = document.querySelector(".letter");

    if (!envelopeContainer || !music || !letter) return;

    const toggleLetter = () => {
        if (isAnimating) return;
        isAnimating = true;

        envelopeContainer.classList.toggle("open");

        const isOpen = envelopeContainer.classList.contains("open");

        letter.setAttribute("aria-hidden", isOpen ? "false" : "true");

        if (isOpen) {
            if (!musicStarted) {
                music.play().catch(() => {
                    musicStarted = false;
                });
                musicStarted = true;
            } else {
                music.play().catch(() => {});
            }
        } else {
            music.pause();
            music.currentTime = 0;
        }

        setTimeout(() => {
            isAnimating = false;
        }, 900);
    };

    envelopeContainer.addEventListener("click", toggleLetter);

    envelopeContainer.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleLetter();
        }
    });
});
