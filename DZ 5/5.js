// Обработка кнопки "Начать игру"
let startBtn = document.querySelector(`#start`)
// Переменная для работы с экраеами
let screens = document.querySelectorAll(`.screen`)

let timeList = document.querySelector(`#time-list`)

let timeEl = document.querySelector(`#time`)

// получаем переменную для работы с кпугами
let board = document.querySelector(`#board`)

// Переменная для определения времени игры
let time = 0

// Переменная для счета игры
let score = 0

// Добовляем прослушку события
startBtn.addEventListener(`click`, (event) => {
    event.preventDefault()
    // Для того чтобы показать следующий экран
    screens[0].classList.add(`up`)
})
// Концепт Делегирования событий
timeList.addEventListener(`click`, event => {
    // contains = метод проверяет есть ли у эелемента определенный класс
    if(event.target.classList.contains(`time-btn`)) {
        // parseInt = функция делает из строчного, числовое значение
        time = parseInt(event.target.getAttribute(`data-time`))
         // меняем экран
        screens[1].classList.add(`up`)
        // Функция по началу игры
        startGame()
    }
})

// Слушатель для всей доски чтобы реагировал на клики по кругам
board.addEventListener(`click`, event => {
    // проверка кликов по кружкам, а не по доске
    if(event.target.classList.contains(`circle`)) {
        // добовляем событие, есои срабатывает вышкеаписаный "if" то срабатывает "score++"
        score++ 

        // метод для убирани кругов при нажитии на них
        event.target.remove()
        // метод для создания новых кругов 
        createRandomeCircle()
    }
})

// Создаем функцию о начале игры
function startGame() {

    // Задаем таймер для игры
    // setInterval() = чкркз каждый проиежуток времени который мы задали, будет выполгять другуюю функцию
    setInterval(decreaseTime, 1000)

    // Добовляем меитод для создания кругов
    createRandomeCircle()

    // Помещяем выбраное время игры 
    setTime(time)
}

// Функция которая меняет каждую секунду значение времени
function decreaseTime() {
    // создаем метод чтобы время не уходило в минус
    if(time === 0) {
        // Функция для завершения игры
        finishGame()
    } else {
     // Переменная текущего времени
    let current = --time
    // Добовляем ко времени "0" если оно меньше 10 сек
    if(current < 10) {
        current = `0${current}`
    }
    setTime(current)
    }
}

// Функция чтобы не дублировать "timeEl"
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

// Функция для завершения игры
function finishGame() {
    // убираем время в конце игры
    timeEl.parentNode.classList.add(`hide`)
    // добовляем зоголовок о том что игра окончена и выводим счет
    board.innerHTML = `<h>Cчет: <span class = "primary">${score}</span></h1>`
}

// Функция для добовления кругов и обработки кликов по ним
function createRandomeCircle() {
    // переменная для создания кругов
    let circle = document.createElement(`div`)

    // переменная для задавания размера круга
    let size = getRandomeNumber(10, 60)

    // переменная для определения юзабельного размера поля
    let {width, height} = board.getBoundingClientRect()

    // переменные для расположения кружков на доске
    let x = getRandomeNumber(0, width - size)
    let y = getRandomeNumber(0, height - size)

    // ======================================
    // переменная рандомных цветов
    let backgroundColor = getRandomeColor()
    // ======================================

    // задаем клас кругам
    circle.classList.add(`circle`)

    // задаем размер нашим кружкам
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    // задаем расположение кругам
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    // добовляем в "board" наши круги
    board.append(circle)

    // =================================
    // задаем кругам цвет
    circle.style.background = backgroundColor
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    // =================================
}

// Функция для создания случйного размера круга
function getRandomeNumber(min, max) {
// Math.random() = с помощью функции получаем случайный размер круга
// Алгоритм получения рандомного размера круга
    return Math.round(Math.random() *(max - min) + min)
}

// ========================================
// Пеерменная с цыетами
let color = [`#00FF00`, `#00FA9A`, `#006400`, `#FF1493`, `#DC143C`, `#008B8B`, `#87CEEB`, `#FFE4B5`, `#9400D3`, `#B8860B`, `#D2691E`, `#2F4F4F`, `#F08080`, `#F5F5DC`]

// Функция для рандомных цветов
function getRandomeColor() {
    return color[Math.floor(Math.random() * color.length)]
}