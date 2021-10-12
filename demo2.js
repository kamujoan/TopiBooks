// VARIABLES
let thumbnails = document.getElementsByClassName("thumbnail2");
let  slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", () => {
    slider.scrollLeft -= 125;
});

buttonRight.addEventListener("click", () => {
    slider.scrollLeft += 125;
});

const maxscrollLeft = slider.scrollWidth - slider.clientWidth;

function autoplay() {
    if(slider.scrollLeft > (maxscrollLeft - 1)) {
        slider.scrollLeft -= maxscrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoplay, 50)


