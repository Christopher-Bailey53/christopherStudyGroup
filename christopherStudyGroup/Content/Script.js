document.addEventListener("DOMContentLoaded", function () {

    let currentPath = window.location.pathname;

    let navLinks = document.querySelectorAll("nav ul li a")

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});