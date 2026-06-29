/* ==========================================
   ONLINEEDU - MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuButton = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {

            navMenu.classList.toggle("mobile-active");

            if (navMenu.classList.contains("mobile-active")) {

                navMenu.style.display = "block";

            } else {

                navMenu.style.display = "";

            }
        });
    }

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {

        const target = Number(counter.dataset.target);
        const duration = 2000;

        let start = 0;
        const increment = target / (duration / 16);

        const updateCounter = () => {

            start += increment;

            if (start < target) {

                counter.textContent = Math.floor(start);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    };

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    startCounter(entry.target);

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.4
        }
    );

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".feature-card, .teacher-card, .stat-box, .about-content, .about-images"
    );

    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
    });

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

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

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

    /* ==========================================
       ACTIVE NAV LINK ON SCROLL
    ========================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    const activateMenu = () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (
                href &&
                href.includes("#") &&
                href.substring(1) === currentSection
            ) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", activateMenu);

    /* ==========================================
       HEADER SHADOW ON SCROLL
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow =
                "0 2px 20px rgba(0,0,0,.04)";
        }
    });

    /* ==========================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (e) => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const targetElement =
                document.querySelector(targetId);

            if (!targetElement) return;

            e.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (
                navMenu &&
                navMenu.classList.contains("mobile-active")
            ) {

                navMenu.classList.remove("mobile-active");
                navMenu.style.display = "";
            }
        });
    });

});
