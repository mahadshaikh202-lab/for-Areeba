// Birthday text sequence

const birthdayText = document.getElementById("birthdayText");

const messages = [
    "LOVE OF MY LIFE💗",
    "MERI JAAN💋",
    "JANE JAHAAN💘",
    "MERI ABBO✨",
    "MERA SAB KUCH💝"

];

let index = 0;

function showNextMessage() {

    birthdayText.classList.add("hide");

    setTimeout(() => {

        if (index < messages.length) {

            birthdayText.textContent = messages[index];

            index++;

            birthdayText.classList.remove("hide");

            // Show next phrase after 2.8 seconds
            setTimeout(showNextMessage, 2800);

        } else {

            // Final text stays permanently
            birthdayText.textContent = "MERI AREEBA ❤️";

            birthdayText.classList.remove("hide");

            birthdayText.classList.add("final-text");
        }

    }, 800);
}

// Start sequence
setTimeout(showNextMessage, 3000);


// Floating hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = ["♥", "♡", "❤"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";

    const duration = 7 + Math.random() * 7;

    heart.style.animationDuration = duration + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 450);


// Background music

// Automatic Background Music

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

async function startMusic() {
    try {
        await music.play();

        musicPlaying = true;
        musicButton.textContent = "♫ Music On";

    } catch (error) {

        musicPlaying = false;
        musicButton.textContent = "Tap to Play ♫";

    }
}

// Try playing as soon as page loads

window.addEventListener("load", startMusic);


// Fallback: user taps music button

musicButton.addEventListener("click", async () => {

    if (!musicPlaying) {

        await startMusic();

    } else {

        music.pause();
        musicPlaying = false;
        musicButton.textContent = "♫ Music";

    }

});

// Next button

document.getElementById("nextButton").addEventListener("click", () => {

    window.location.href = "gift.html";

});