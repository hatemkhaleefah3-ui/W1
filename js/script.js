/* =========================
   AVOCADO WELLNESS
   SCRIPT.JS
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAVBAR SCROLL EFFECT
  ========================= */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "#07502b";
      navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    } else {
      navbar.style.background = "#0b6b3a";
      navbar.style.boxShadow = "none";
    }
  });

  /* =========================
     FADE-IN ANIMATION
  ========================= */

  const animatedItems = document.querySelectorAll(
    ".product-card, .shop-card, .why-card"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";
    observer.observe(item);
  });

  /* =========================
     BUTTON RIPPLE EFFECT
  ========================= */

  const buttons = document.querySelectorAll(
    ".btn, button"
  );

  buttons.forEach(button => {

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", function(e) {

      const ripple = document.createElement("span");

      const rect = this.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);

      ripple.style.width = size + "px";
      ripple.style.height = size + "px";

      ripple.style.left =
        e.clientX - rect.left - size / 2 + "px";

      ripple.style.top =
        e.clientY - rect.top - size / 2 + "px";

      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255,255,255,.4)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple .6s linear";
      ripple.style.pointerEvents = "none";

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  /* =========================
     DYNAMIC RIPPLE KEYFRAME
  ========================= */

  const style = document.createElement("style");

  style.innerHTML = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;

  document.head.appendChild(style);

  /* =========================
     PRODUCT CARD HOVER TILT
  ========================= */

  const cards = document.querySelectorAll(
    ".product-card, .shop-card"
  );

  cards.forEach(card => {

    card.addEventListener("mousemove", e => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY =
        ((x / rect.width) - 0.5) * 10;

      const rotateX =
        ((y / rect.height) - 0.5) * -10;

      card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    });
  });

  /* =========================
     SMOOTH ANCHOR SCROLL
  ========================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener("click", function(e) {

        const target =
          document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      });
    });

});
