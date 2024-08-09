document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'coke',
        img: 'images/coke.png'
    },
    {
        name: 'salad',
        img: 'images/salad.png'
    },
    {
        name: 'stakefish',
        img: 'images/stakefish.png'
    },
    {
        name: 'lincon',
        img: 'images/lincon.png'
    },
    {
        name: 'luck',
        img: 'images/luck.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'coke',
        img: 'images/coke.png'
    },
    {
        name: 'salad',
        img: 'images/salad.png'
    },
    {
        name: 'stakefish',
        img: 'images/stakefish.png'
    },
    {
        name: 'lincon',
        img: 'images/lincon.png'
    },
    {
        name: 'luck',
        img: 'images/luck.png'
    },
]

    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var cardsOut = []
    const resultDisplay = document.querySelector('#result')
    console.log(cardArray.length)
    // creating board
    function createBoard() {
        for (let i = 0; i <cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(cardsOut.includes(cardsChosen[0]) == true || cardsOut.includes(cardsChosen[1]) == true){
            alert('invalid options')
            if(cardsOut.includes(cardsChosen[0]) == true && cardsOut.includes(cardsChosen[1]) == true){
                cards[optionOneId].setAttribute('src', 'images/white.png')
                cards[optionTwoId].setAttribute('src', 'images/white.png')
                cards[optionOneId].style.pointerEvents = 'none'
                cards[optionTwoId].style.pointerEvents = 'none'
            }
            else if(cardsOut.includes(cardsChosen[0]) == true){
                cards[optionOneId].setAttribute('src', 'images/white.png')
                cards[optionTwoId].setAttribute('src', 'images/blank.png')
                cards[optionOneId].style.pointerEvents = 'none'
            }
            else if(cardsOut.includes(cardsChosen[0]) == false){
                cards[optionTwoId].setAttribute('src', 'images/white.png')
                cards[optionOneId].setAttribute('src', 'images/blank.png')
                cards[optionTwoId].style.pointerEvents = 'none'
            }
            
        }
        else if (cardsChosen[0] == cardsChosen[1]){
            alert('you found a match')
            cardsOut.push(cardsChosen[0])
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        }
        
        else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'you won the game'
        }
        console.log(cardsOut)
    }

    function cancelMatch() {

    }


    // flip the card
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2 && cardsChosenId[0] != cardsChosenId[1]) {
            setTimeout(checkForMatch, 500)    
        }
        else if(cardsChosen.length === 2 && cardsChosenId[0] == cardsChosenId[1]){
            alert("invalid options you cannot select same element twice")
            this.setAttribute('src', 'images/blank.png')
            cardsChosen = []
            cardsChosenId = []
        }
        
    }

    createBoard()
    flipcard()
})