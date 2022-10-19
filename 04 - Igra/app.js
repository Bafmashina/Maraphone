// Получаем доступ для доски
let board = document.querySelector(`#board`)
// Создвем массив цветов
let colors = [`red`, `blue`, `green`, `yellow`, `purple`, `pink`]
// Управление количеством квадритиков
let SQUARES_NUMBERS = 500

for(let i=0; i<SQUARES_NUMBERS; i++) {
    let square = document.createElement(`div`)
    square.classList.add(`square`)

    board.append(square)
    // Добовляем слушателя событий для каждого из квадратиков
    square.addEventListener(`mouseover`, () => setColor(square))
    square.addEventListener(`mouseleave`, () => removeColor(square))
}

// Создаем функцию для передачи цвета на квадратик
function setColor(element) {

    // Добовляем функцию случайных цветов
    let color = getColor()
    element.style.backgroundColor = color
    // Добовляем объема цветам
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Делвем так чтобы через время цает менялся на базовый
function removeColor(element) {
    element.style.backgroundColor = `#1d1d1d`
    // Удаляем остовляемые тени от цветов
    element.style.boxShadow = `0 0 2px #000`
}

// Создвем функцию чтобы случайно выбирать цвет
function getColor() {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}