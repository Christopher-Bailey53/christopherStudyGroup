document.addEventListener("DOMContentLoaded", function () {

    let currentPath = window.location.pathname;

    let navLinks = document.querySelectorAll("nav ul li a")

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(target) {

        tabContents.forEach(content => content.classList.remove('active'));

        tabButtons.forEach(button => button.classList.remove('active'));

        const targetContent = document.querySelector(target);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        const activeButton = document.querySelector(`[data-target="${target}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {

            const target = button.getAttribute('data-target');
            switchTab(target);
        });
    });

    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
});
