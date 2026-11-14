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

const song = document.getElementById("dedicatedSong");
const songButton = document.getElementById("songButton");

songButton.addEventListener("click", async () => {
  try {
    if (song.paused) {
      await song.play();
      songButton.textContent = "Pause Song ❤️";
    } else {
      song.pause();
      songButton.textContent = "A Song Dedicated to You ❤️";
    }
  } catch {
    alert("Audio file nahi mili. dedicated-song.mp3 ka path check karo.");
  }
});