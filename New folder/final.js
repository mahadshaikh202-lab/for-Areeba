const hearts = document.getElementById("hearts");

for (let i = 0; i < 20; i++) {

  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent = "♥";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (10 + Math.random() * 16) + "px";
  heart.style.animationDuration = (7 + Math.random() * 8) + "s";
  heart.style.animationDelay = Math.random() * 8 + "s";

  hearts.appendChild(heart);
}