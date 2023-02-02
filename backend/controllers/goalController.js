// @desc  Get goals
// @route Get /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals'})
}

// @desc  set goals
// @route Post /api/goals
// @access Private
const setGoals = (req, res) => {
    res.status(200).json({ message: 'set goals'})
}


// @desc  Update goals
// @route Put /api/goals/:id
// @access Private
const updateGoals = (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}`})
}

// @desc  Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,

}