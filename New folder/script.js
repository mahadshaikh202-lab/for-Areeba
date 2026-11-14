// Heading animation

const heading = document.getElementById("mainHeading");

const messages = [
    "Hello AREEBA",
    "MRS MAHAD💝"
];

let currentMessage = 0;

setInterval(() => {

    heading.classList.add("hide");

    setTimeout(() => {

        currentMessage =
            (currentMessage + 1) % messages.length;

        heading.textContent = messages[currentMessage];

        heading.classList.remove("hide");

    }, 800);

}, 3500);


// Floating hearts animation

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart-particle");

    const symbols = ["♥", "♡", "❤"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";

    const duration = 7 + Math.random() * 7;

    heart.style.animationDuration = duration + "s";

    document.getElementById("particles").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

}

setInterval(createHeart, 450);


// Open Surprise button

const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {
    window.location.href = "birthday.html";
});

// Birthday text sequence
