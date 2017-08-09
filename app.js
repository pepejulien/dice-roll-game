const state = require('./state.js')
const dieContainer = document.querySelector('.die-container')

function resetGame() {
    iPhone.style.top = '160px'
    iPhone.style.left = '10px'
    Samsung.style.top = '250px'
    Samsung.style.left = '10px'

    state.iPhone.count = 0
    state.Samsung.count = 0

    iPhone.classList.remove('winner')
    Samsung.classList.remove('winner')

    state.currentPlayer = (Math.random() > .5) ? 'iPhone' : 'Samsung'

    document.querySelector('.theWinner').textContent = ''

    roll.textContent = '?'
}


function moveWinner() {
    const winnerCirclePosition = document.querySelector('#winner-circle').getBoundingClientRect()

    state[state.currentPlayer].element.style.top = winnerCirclePosition.top + 'px'
    state[state.currentPlayer].element.style.left = winnerCirclePosition.left + 'px'

    state[state.currentPlayer].element.classList.add('winner')

    document.querySelector('.theWinner').textContent = state.currentPlayer + " is the Winner!!!"

    setTimeout(function() {
        alert(`${state.currentPlayer} is the WINNER!!!`)
        if(confirm('reset the game?') ) {
            resetGame()
        }
    }, 401)
}

function movePlayer(tileNumber) {
    state[state.currentPlayer].count += tileNumber

    if(state[state.currentPlayer].count > 10) {
        moveWinner()
        return
    }

    const tilePosition = document.querySelector('#tile' + state[state.currentPlayer].count).getBoundingClientRect()

    state[state.currentPlayer].element.style.top = tilePosition.top + 'px'
    state[state.currentPlayer].element.style.left = tilePosition.left + 'px'

    if(state.currentPlayer === 'iPhone') {
        state.currentPlayer = 'Samsung'
    } else {
        state.currentPlayer = 'iPhone'
    }
}

dieContainer.addEventListener('click', function() {
    die.setAttribute('src', 'img/Dodecahedron3.gif')

    const num = Math.floor( Math.random() * 10 ) + 1

    roll.textContent = '?'
    setTimeout(function() {
        roll.textContent = num
        movePlayer(num)
    }, 1810)

})
