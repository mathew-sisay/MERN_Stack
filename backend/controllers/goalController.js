const asyncHandler = require('express-async-handler')
// @desc  Get goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals'})
})

// @desc  set goals
// @route Post /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error ('please add a text field ')
    } 

    res.status(200).json({ message: 'set goals'})
})


// @desc  Update goals
// @route Put /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}`})
})

// @desc  Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,

}