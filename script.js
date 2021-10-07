let order = []
let clickedOrder = []
let score = 0

/* 0 = verde
1 = vermelho
2 = amarelo
3 = verde */

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

//cria ordem aleat�ra
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

//acende a pr�xima cor
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

//v� se a pessoa clicou na mesma ordem
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver()
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontua��o: ${score}\nVoc� acertou! Iniciando pr�ximo n�vel...`)
        nextLevel()
    }
}

//clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    },250)
}

//retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green
    } else if(color == 1) {
        return red
    } else if(color == 2) {
        return yellow
    } else if(color == 3) {
        return blue
    }    
}

//pr�ximo n�vel do jogo
let nextLevel = () => {
    score++
    shuffleOrder()
}

//game over
let gameOver = () => {
    alert(`Pontua��o: ${score}\nVoc� perdeu o jogo!\nClique em OK para jogar novamente`)
    order = []
    clickedOrder = []

    playGame()
}

//in�cio do jogo
let playGame = () => {
    alert('Bem vindo ao Jogo!')
    score = 0

    nextLevel()
}

//eventos de clicar nas cores
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

//in�cio do jogo
playGame()