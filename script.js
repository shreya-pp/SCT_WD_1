const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
    });
}, { rootMargin: "-40% 0px -50%" });

sections.forEach((section) => sectionObserver.observe(section));