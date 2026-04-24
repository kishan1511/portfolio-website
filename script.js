const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".nav-link");
const graphPoints = document.querySelectorAll(".graph-point");

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

graphPoints.forEach((point) => {
    point.addEventListener("mouseenter", () => {
        const selector = point.getAttribute("href");
        const target = selector ? document.querySelector(selector) : null;
        if (target) {
            target.classList.add("graph-linked");
        }
    });

    point.addEventListener("mouseleave", () => {
        document.querySelectorAll(".graph-linked").forEach((item) => {
            item.classList.remove("graph-linked");
        });
    });
});
