//starting position
let position = 0;

const previousSlide = function () {
    //grabs element from DOM
    const imageSlider = document.getElementById('imageSlider2');

    //decrease position by width of image
    position += 400;

    //access style transform and apply to position
    imageSlider.style.transform = `translateX(${position}px)`;
}

const nextSlide = function () {
    //grabs element from DOM
    const imageSlider = document.getElementById('imageSlider2');

    //decrease position by width of image
    position -= 400;

    //access style transform and apply to position
    imageSlider.style.transform = `translateX(${position}px)`;
}
