let slideIndex = 0;
function moveSlide(n) {
    let slides = document.getElementsByClassName("carousel-item");
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}function showSlide(n) {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${n * 100}%)`;
    }
}
window.onload = function() {
    showSlide(slideIndex);
};
