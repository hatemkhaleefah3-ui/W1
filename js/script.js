/* ==========================================
   EDUCATION DASHBOARD
   Main Interactions
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeSearch();
    initializeTeacherCards();
    initializeScheduleDays();
    initializeLanguageSelector();
    initializeCourseMenus();
    initializeProgressAnimation();

});

/* ==========================================
   SEARCH
========================================== */
function initializeSearch() {

    const searchInput = document.querySelector(".search-box input");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".teacher-card").forEach(card => {

            const name = card.querySelector("h3")?.textContent.toLowerCase() || "";

            if (name.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}

/* ==========================================
   TEACHER CARD SELECTION
========================================== */
function initializeTeacherCards() {

    const teacherCards = document.querySelectorAll(".teacher-card");

    teacherCards.forEach(card => {

        card.addEventListener("click", () => {

            teacherCards.forEach(item =>
                item.classList.remove("featured")
            );

            card.classList.add("featured");

        });

    });

}

/* ==========================================
   SCHEDULE DAY SELECTOR
========================================== */
function initializeScheduleDays() {

    const days = document.querySelectorAll(".schedule-day");

    days.forEach(day => {

        day.addEventListener("click", () => {

            days.forEach(item =>
                item.classList.remove("active")
            );

            day.classList.add("active");

        });

    });

}

/* ==========================================
   LANGUAGE DROPDOWN
========================================== */
function initializeLanguageSelector() {

    const selector = document.querySelector(".language-select");

    if (!selector) return;

    const languages = [
        "English",
        "Spanish",
        "French",
        "German",
        "Arabic"
    ];

    let current = 0;

    selector.addEventListener("click", () => {

        current++;

        if (current >= languages.length) {
            current = 0;
        }

        selector.querySelector("span").textContent =
            languages[current];

    });

}

/* ==========================================
   COURSE OPTIONS
========================================== */
function initializeCourseMenus() {

    const buttons = document.querySelectorAll(
        ".course-item .more-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            console.log(
                "Course options clicked"
            );

        });

    });

}

/* ==========================================
   PROGRESS ANIMATION
========================================== */
function initializeProgressAnimation() {

    const progressText =
        document.querySelector(".progress-text");

    const progressBar =
        document.querySelector(".progress-fill");

    const progressCircle =
        document.querySelector(".progress-value");

    if (
        !progressText ||
        !progressBar ||
        !progressCircle
    ) return;

    const target = 70;
    let current = 0;

    const radius = 80;
    const circumference =
        2 * Math.PI * radius;

    progressCircle.style.strokeDasharray =
        `${circumference}`;

    progressCircle.style.strokeDashoffset =
        circumference;

    const animation = setInterval(() => {

        current++;

        progressText.textContent =
            `${current}%`;

        progressBar.style.width =
            `${current}%`;

        const offset =
            circumference -
            (current / 100) * circumference;

        progressCircle.style.strokeDashoffset =
            offset;

        if (current >= target) {
            clearInterval(animation);
        }

    }, 20);

}

/* ==========================================
   BOOK BUTTON
========================================== */
const bookButton =
    document.querySelector(".book-btn");

if (bookButton) {

    bookButton.addEventListener("click", () => {

        alert(
            "Booking functionality can be connected to your backend API."
        );

    });

}

/* ==========================================
   ADD BUTTON
========================================== */
const addButton =
    document.querySelector(".add-btn");

if (addButton) {

    addButton.addEventListener("click", () => {

        console.log(
            "Add new course clicked"
        );

    });

}

/* ==========================================
   NOTIFICATION BUTTON
========================================== */
const notificationButton =
    document.querySelector(".notification-btn");

if (notificationButton) {

    notificationButton.addEventListener("click", () => {

        notificationButton.classList.toggle(
            "active"
        );

    });

}
