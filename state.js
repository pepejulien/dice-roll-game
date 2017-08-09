const state = {
    iPhone: {
        count: 0,
        element: iPhone
    },

    Samsung: {
        count: 0,
        element: Samsung
    },

    currentPlayer: (Math.random() > .5) ? 'iPhone' : 'Samsung'
}

module.exports = state
