
const themeBtn = document.getElementById("themeBtn");

// Theme settings
const savedTheme = localStorage.getItem("pariTheme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "🌙";
} else {
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  themeBtn.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("pariTheme", isLight ? "light" : "dark");
});

// Scroll animations
const animatedElements = document.querySelectorAll(
  ".about, .project-card, .contact"
);

animatedElements.forEach(function (element) {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

animatedElements.forEach(function (element) {
  observer.observe(element);
});
