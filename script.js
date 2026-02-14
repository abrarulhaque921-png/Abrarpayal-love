let messages = [
  "Please don’t break my heart 💔",
  "Payal… it hurts 🥺",
  "Abrar really loves you ❤️",
  "Say yes please 😭"
];

let index = 0;
let noCount = 0;

function noClick() {
  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector(".yes-btn");
  const bear = document.getElementById("bear");
  const sadSound = document.getElementById("sadSound");

  noBtn.textContent = messages[index];
  index = (index + 1) % messages.length;

  const size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (size * 1.25) + "px";

  bear.src = "https://i.imgur.com/7Xq8FJv.png";
  bear.classList.add("sad");
  bear.classList.remove("happy");

  sadSound.play();

  if (navigator.vibrate) {
    navigator.vibrate(200);
  }

  noCount++;
  if (noCount >= 4) {
    noBtn.style.display = "none";
  }
}

function yesClick() {
  const bear = document.getElementById("bear");
  const happySound = document.getElementById("happySound");

  bear.src = "https://i.imgur.com/QZ6K4Xq.png";
  bear.classList.remove("sad");
  bear.classList.add("happy");

  happySound.play();
  createHearts();

  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 1500);
}

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random()) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}
