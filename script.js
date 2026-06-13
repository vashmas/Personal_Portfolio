// Typing Effect
const texts = ["Web Developer", "React Developer", "PHP Developer", "UI/UX Enthusiast"];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  current = texts[i];
  if (isDeleting) {
    document.getElementById('typing').textContent = current.substring(0, j--);
  } else {
    document.getElementById('typing').textContent = current.substring(0, j++);
  }
  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    setTimeout(type, 400);
  } else {
    setTimeout(type, isDeleting ? 60 : 100);
  }
}
type();

// Reveal Animation
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (window.scrollY + window.innerHeight > el.offsetTop + 100) {
      el.classList.add('show');
    }
  });
});

// Popup
function openProject(title, desc, git, live) {
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('popupTitle').innerText = title;
  document.getElementById('popupDesc').innerText = desc;
  document.getElementById('gitLink').href = git;
  const liveBtn = document.getElementById('liveLink');
  if (live) {
    liveBtn.href = live;
    liveBtn.style.display = 'inline-block';
  } else {
    liveBtn.style.display = 'none';
  }
}

function closeProject() {
  document.getElementById('popup').style.display = 'none';
}

// Custom Cursor
const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor-dot');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});
