const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hearts = document.querySelector(".hearts");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; color:white;">
      <h1>YAYYY 😍💖</h1>
      <h2>You just made me the happiest person ❤️</h2>
      <p>Happy Valentine’s Day 🌹</p>
    </div>
  `;
});

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);
