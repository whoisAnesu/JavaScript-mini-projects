console.log('uri dako')
const square = document.querySelectorAll('.square')
const mole  =document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // assigning the id of the random Position  to hitPosition to use later
    hitposition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener("mouseup", () =>{
        if(id.id === hitposition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        alert('game over man  ' + 'your score is ' + result + ' points')
    }
}

let timerId = setInterval(countDown, 1000)
moveMole()

