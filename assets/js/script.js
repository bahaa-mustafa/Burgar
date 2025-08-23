const nav_active = document.querySelector(".nav_links")
const btns = document.querySelector(".btns")

nav_active.addEventListener("click", function (e) {

    if (e.target.tagName == "A") {
        resetActive(".nav_links a")
        e.target.classList.add("active")

    }else{
        console.log("not it");
        
    }

})


btns.addEventListener("click", function(e){
    if(e.target.tagName == "BUTTON"){
        resetActive(".btns button")
        e.target.classList.add("active")
    }
})

function resetActive(item){
    let btns = document.querySelectorAll(item)
    btns.forEach(function(element){
        element.classList.remove("active")
    })
}








let index = 0;

const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

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
