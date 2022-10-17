// Находим нужные объекты
let upBtn = document.querySelector(`.up-button`)
let downBtn = document.querySelector(`.down-button`)

let sidebar = document.querySelector(`.sidebar`)
let mainSlide = document.querySelector(`.main-slide`)
let slidesCount = mainSlide.querySelectorAll(`div`).length

let container = document.querySelector(`.container`)

// Переменная для слежения за активным слайдом
let activeSlideIndex = 0

// Задаем правельное положение градиента и картинки
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener(`click`, () => {
    changeSlide(`up`)
})

downBtn.addEventListener(`click`, () => {
    changeSlide(`down`)
})
// Создаем функцию для правильной работы кнопок
function changeSlide(direction) {
    if(direction === `up`) {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if(direction === `down`) {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    // Получение размера экрана
    let height = container.clientHeight

    // Создание анимаций на mainSlide
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    // Создание анимации на saidBar
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
