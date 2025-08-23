let index = 0;

const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;
// const slide = document.querySelector(".slide");
// const slideWidth = slide.offsetWidth + 5;

// console.log(totalSlides);

// let nav = document.querySelector(nav)
// nav.style.position = `static`

const indicators = document.getElementById("indicators");


function getSlidesPerView() {
    if (window.innerWidth < 768) {
        return 1;
    } else if (window.innerWidth < 1025) {
        return 2.3;
    } else {
        return 4.2;
    }
}


function createIndicators() {
    indicators.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === index) dot.classList.add("active");
        dot.addEventListener("click", () => {
            index = i;
            showSlide();
        });
        indicators.appendChild(dot);
    }
}



function showSlide() {
    const slidesPerView = getSlidesPerView();
    const percentage = 100 / slidesPerView;
    slides.style.transform = `translateX(${-index * percentage}%)`;
    createIndicators();
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
}

function prevSlide() {
    index = ((index - 1 + totalSlides) % totalSlides)
    showSlide()
}
setInterval(nextSlide, 3000);

createIndicators();
showSlide();

window.addEventListener("resize", showSlide);
