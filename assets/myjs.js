//slider
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
showSlides(slideIndex += 1);   
}
function previousSlide() {
showSlides(slideIndex -= 1);   
}
function currentSlide(n) {
showSlides(slideIndex = n);   
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('item');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for(let slide of slides){
        slide.style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}
//header
let myScroll = window.scrollY;
let startScroll = 100;
let myHeader = document.querySelector('#myheader');
let myBody = document.querySelector('body');

const changeHead = () => myHeader.classList.add('fixhead');
const changeBody = () => myBody.classList.add('mtbody');
const removeHead = () => myHeader.classList.remove('fixhead');
const removeBody = () => myBody.classList.remove('mtbody');

window.addEventListener('scroll' , () => {
    myScroll = window.scrollY;
    if (myScroll >= startScroll) {changeHead(), changeBody() }
    else{removeHead(), removeBody() }    

})