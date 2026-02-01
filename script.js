// Typing Effect
const text = "Front-End Developer | Web Designer | UI Creator";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Project Popup
function openProject(title, desc, git) {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupDesc").innerText = desc;
  document.getElementById("gitLink").href = git;
  document.getElementById("popup").style.display = "flex";
}

function closeProject() {
  document.getElementById("popup").style.display = "none";
}
// Custom Cursor Animation
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
});

// Click animation
document.addEventListener("click", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
  setTimeout(() => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  }, 150);
});
