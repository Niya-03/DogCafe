import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})

async function loadHTML(id, file) {
    const container = document.querySelectorAll(`#${id}`);
    if (!container) return;

    try {
        const response = await fetch(file);
        const html = await response.text();
        container.forEach(c => {
            c.innerHTML = html;
        })

    } catch (error) {
        console.error("Error loading html:", file, error);
    }
}

loadHTML("headerContainer", "/partials/header.html");
loadHTML("footerContainer", "/partials/footer.html");
loadHTML("marqueeContainer", "/partials/marquee.html");

const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(sections => {
    sections.forEach(section => {
        if (section.isIntersecting) {
            section.target.classList.add("active");
        }
    });
});

sections.forEach(section => observer.observe(section));