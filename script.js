const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (siteNav) {
            siteNav.classList.remove("active");
        }
        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});
