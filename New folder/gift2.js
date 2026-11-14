const hearts = document.getElementById("hearts");

for (let i = 0; i < 18; i++) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "♥";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (10 + Math.random() * 15) + "px";
  heart.style.animationDuration = (7 + Math.random() * 8) + "s";
  heart.style.animationDelay = Math.random() * 8 + "s";
  hearts.appendChild(heart);
}

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const error = document.getElementById("error");
const privateMessage = document.getElementById("privateMessage");

function unlockMessage() {
  if (passwordInput.value === "2315") {
    error.textContent = "";
    privateMessage.classList.add("show");
    document.getElementById("lockCard").style.display = "none";
    privateMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  } else {
    error.textContent = "Incorrect password. Try again ❤️";
    passwordInput.value = "";
    passwordInput.focus();
  }
}

unlockButton.addEventListener("click", unlockMessage);

passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    unlockMessage();
  }
});