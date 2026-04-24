const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const observedElements = document.querySelectorAll(".content-section, .graph-card, .journey-card");
const graphPoints = document.querySelectorAll(".graph-point");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px"
    }
);

observedElements.forEach((element) => observer.observe(element));

graphPoints.forEach((point) => {
    point.addEventListener("mouseenter", () => {
        const targetId = point.getAttribute("href");
        const target = targetId ? document.querySelector(targetId) : null;
        if (target) {
            target.classList.add("graph-linked");
        }
    });

    point.addEventListener("mouseleave", () => {
        document.querySelectorAll(".graph-linked").forEach((element) => {
            element.classList.remove("graph-linked");
        });
    });
});
