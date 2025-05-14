// scripts.js

// Wait for DOM to load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // ----- Menu Toggle -----
  const menuToggle = document.getElementById("menuToggle");
  const menuList = document.getElementById("menuList");
  menuToggle.addEventListener("click", () => {
    // Toggle display between 'block' and 'none'
    menuList.style.display = menuList.style.display === "block" ? "none" : "block";
  });

  // ----- Initial Fade-in Animations -----
  const fadeIns = document.querySelectorAll(".fade-in");
  fadeIns.forEach(el => {
    // Add 'visible' class to start CSS animation
    el.classList.add("visible");
  });

  // ----- Scroll-triggered Fade-on-Scroll -----
  const fadeOnScrollEls = document.querySelectorAll(".fade-on-scroll, .scroll-fade");
  function handleScrollFade() {
    fadeOnScrollEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  // Run on scroll and on load in case elements are in-view initially
  window.addEventListener("scroll", handleScrollFade);
  handleScrollFade();
});
