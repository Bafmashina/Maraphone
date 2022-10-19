let board = document.querySelector(`#board`)

let colors = [`#00FF00`, `#00FA9A`, `#006400`, `#FF1493`, `#DC143C`, `#008B8B`, `#87CEEB`, `#FFE4B5`, `#9400D3`, `#B8860B`, `#D2691E`, `#2F4F4F`, `#F08080`, `#F5F5DC`]

let SQUARES_NUMBERS = 500

for(let i=0; i<SQUARES_NUMBERS; i++) {
    let square = document.createElement(`div`)
    square.classList.add(`square`)

    board.append(square)

    square.addEventListener(`mouseover`, () => setColor(square))
    square.addEventListener(`mouseleave`, () => removeColor(square))
}

function setColor(element) {
    let color = getColor()

    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = `#1d1d1d`
    element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}