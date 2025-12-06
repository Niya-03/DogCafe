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
    if (!container.length) return;

    try {
        const response = await fetch(file);
        const html = await response.text();
        container.forEach(c => {
            c.innerHTML = html;

            if (c.dataset.bg) c.classList.add(`bg-${c.dataset.bg}`);
            if(c.dataset.bg == 'red') c.classList.add(`text-white`);
        })

    } catch (error) {
        console.error("Error loading html:", file, error);
    }
}

loadHTML("headerContainer", "../partials/header.html");
loadHTML("footerContainer", "../partials/footer.html");
loadHTML("marqueeTop", "./partials/marquee.html");
loadHTML("marqueeBottom", "./partials/marquee.html");

const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(sections => {
    sections.forEach(section => {
        if (section.isIntersecting) {
            section.target.classList.add("active");
        }
    });
});

sections.forEach(section => observer.observe(section));