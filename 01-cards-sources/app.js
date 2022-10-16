let slides = document.querySelectorAll(`.slide`)

// обходим циклом каждый slide
for (let slide of slides) {
    slide.addEventListener(`click`, () => {
        // здесь описываем функционал
        clearActiveClasses()
        // по клику происходит анимация
        slide.classList.add(`active`)
    })
}
// отчищяем не активные элементы
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove(`active`)
    })
}
