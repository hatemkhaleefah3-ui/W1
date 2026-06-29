/* ====================================
   LANGUAGE SELECT DROPDOWN
==================================== */

const languageButton = document.querySelector('.language-select');

if (languageButton) {
    languageButton.addEventListener('click', () => {
        languageButton.classList.toggle('active');
    });
}

/* ====================================
   TEACHER SELECTION
==================================== */

const teacherRows = document.querySelectorAll('.teacher-row');

teacherRows.forEach(row => {
    row.addEventListener('click', () => {

        teacherRows.forEach(item => {
            item.classList.remove('active');
        });

        row.classList.add('active');
    });
});

/* ====================================
   SCHEDULE DATE SELECTION
==================================== */

const scheduleItems = document.querySelectorAll('.schedule-item');

scheduleItems.forEach(item => {
    item.addEventListener('click', () => {

        scheduleItems.forEach(card => {
            card.classList.remove('selected');
        });

        item.classList.add('selected');
    });
});

/* ====================================
   BOOK ONLINE BUTTON
==================================== */

const bookButton = document.querySelector('.book-btn');

if (bookButton) {
    bookButton.addEventListener('click', () => {
        alert('Session booking request submitted.');
    });
}

/* ====================================
   SEARCH FUNCTIONALITY
==================================== */

const searchInput = document.querySelector('.search-box input');

if (searchInput) {

    searchInput.addEventListener('keyup', function () {

        const searchValue = this.value.toLowerCase();

        teacherRows.forEach(row => {

            const teacherName = row
                .querySelector('.teacher-info h3')
                .textContent
                .toLowerCase();

            if (teacherName.includes(searchValue)) {
                row.style.display = 'grid';
            } else {
                row.style.display = 'none';
            }

        });

    });

}

/* ====================================
   COURSE OPTIONS BUTTONS
==================================== */

const courseMenuButtons = document.querySelectorAll(
    '.course-item .more-btn'
);

courseMenuButtons.forEach(button => {

    button.addEventListener('click', (e) => {

        e.stopPropagation();

        console.log('Course menu clicked');

    });

});

/* ====================================
   PROGRESS ANIMATION
==================================== */

const progressValue = document.querySelector('.progress-value');

if (progressValue) {

    let currentValue = 0;
    const targetValue = 70;

    const counter = setInterval(() => {

        currentValue++;

        progressValue.textContent = currentValue + '%';

        if (currentValue >= targetValue) {
            clearInterval(counter);
        }

    }, 20);

}

/* ====================================
   SIDEBAR ACTIVE STATE
==================================== */

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {

    item.addEventListener('click', () => {

        navItems.forEach(nav => {
            nav.classList.remove('active');
        });

        item.classList.add('active');

    });

});

/* ====================================
   HEADER BUTTON ANIMATIONS
==================================== */

const actionButtons = document.querySelectorAll(
    '.icon-btn'
);

actionButtons.forEach(button => {

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.08)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });

});

/* ====================================
   FADE-IN ANIMATION
==================================== */

window.addEventListener('load', () => {

    const animatedElements = document.querySelectorAll(
        '.teacher-row, .teacher-card, .course-item, .schedule-item'
    );

    animatedElements.forEach((element, index) => {

        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';

        setTimeout(() => {

            element.style.transition =
                'all 0.5s ease';

            element.style.opacity = '1';
            element.style.transform =
                'translateY(0)';

        }, index * 100);

    });

});