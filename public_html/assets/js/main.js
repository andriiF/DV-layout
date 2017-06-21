window.onload = function () {
    var elem = document.getElementsByClassName("toogleList");
    elem[0].style.height = "0";
    if (screen.width <= 640) {
        slides = document.querySelectorAll('#slides .slide');
        idicators = document.querySelectorAll('#slides .indicators .fa-circle-o');
        currentSlide = 0;
        slideInterval = setInterval(nextSlide, 200000);
    }


}
function nextSlide() {
    slides[currentSlide].className = 'slide';
    idicators[currentSlide].className = 'fa fa-circle-o';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
    idicators[currentSlide].className = 'fa fa-circle-o fa-circle';

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

function buttonClick() {
    var elem = document.getElementsByClassName("toogleList");
    var menu = document.getElementById("menuToogle");
    if (elem[0].style.height == "0px") {
        for (i = 0; i < elem.length; i++) {
            elem[i].style.height = "auto";
        }
        menu.style.display = "block";
    } else {
        for (i = 0; i < elem.length; i++) {
            elem[i].style.height = "0";
        }
        menu.style.display = "none";
    }
}
