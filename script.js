const motivationList = [
  "You got this! 💪",
  "Keep pushing forward 🚀",
  "Every click counts ✨",
  "Believe in yourself 🌟",
  "You're doing amazing 😄",
  "Never give up 🧠",
  "Success is near! 🏆"
];

document.getElementById("motivate-btn").addEventListener("click", () => {
  const random = motivationList[Math.floor(Math.random() * motivationList.length)];
  document.getElementById("motivation").textContent = random;
});

const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleMode = document.getElementById("toggleMode");
toggleMode.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// ParticlesJS config
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" }
    },
    "modes": {
      "repulse": { "distance": 100 }
    }
  },
  "retina_detect": true
});
