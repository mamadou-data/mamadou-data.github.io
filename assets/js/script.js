/* THEME TOGGLE */

function toggleTheme() {

  const html = document.documentElement;

  const isDark =
    html.getAttribute("data-theme") === "dark";

  html.setAttribute(
    "data-theme",
    isDark ? "light" : "dark"
  );

  localStorage.setItem(
    "theme",
    isDark ? "light" : "dark"
  );

}

/* RESTORE THEME */

const savedTheme =
  localStorage.getItem("theme");

if (savedTheme) {

  document.documentElement.setAttribute(
    "data-theme",
    savedTheme
  );

}

/* SCROLL ANIMATION */

const observer =
  new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  });

document
  .querySelectorAll(".reveal")
  .forEach(el => observer.observe(el));
