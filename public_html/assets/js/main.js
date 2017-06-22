var slides;
var idicators;
var currentSlide;
var slideInterval;
window.onload = function () {
    var elem = document.getElementsByClassName("toogleList");
    elem[0].style.height = "0";
    slides = document.querySelectorAll('#slides .slide');
    idicators = document.querySelectorAll('#slides .indicators .fa-circle-o');
    currentSlide = 0;
    slideInterval = setInterval(nextSlide, 5000);


};
function nextSlide() {
    if (screen.width <= 640) {
        slides[currentSlide].className = 'slide';
        idicators[currentSlide].className = 'fa fa-circle-o';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
        idicators[currentSlide].className = 'fa fa-circle-o fa-circle';
    }

}
function previousSlide() {
    slides[currentSlide].className = 'slide';
    idicators[currentSlide].className = 'fa fa-circle-o';
    currentSlide = currentSlide - 1;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slides[currentSlide].className = 'slide showing';
    idicators[currentSlide].className = 'fa fa-circle-o fa-circle';
}
function goToSlider(n) {
    slides[currentSlide].className = 'slide';
    idicators[currentSlide].className = 'fa fa-circle-o';
    currentSlide = n;
    slides[currentSlide].className = 'slide showing';
    idicators[currentSlide].className = 'fa fa-circle-o fa-circle';
}

function buttonClick() {
    var elem = document.getElementsByClassName("toogleList");
    var menu = document.getElementById("menuToogle");
    if (elem[0].style.height == "0px") {
        for (var i = 0; i < elem.length; i++) {
            elem[i].style.height = "auto";
        }
        menu.style.display = "block";
    } else {
        for (var j = 0; j < elem.length; j++) {
            elem[j].style.height = "0";
        }
        menu.style.display = "none";
    }
}
