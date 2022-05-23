const { Router } = require('express')
const router = Router()
const Travel = require('../models/Travel.model')
const { 
    getAllTravels, 
    getTravelById, 
    addTravelBook, 
    updateTravelBook,
    removeTravelBook
} = require('../controllers/travelControllers')

router.get('/', getAllTravels)
router.post('/add', addTravelBook)
router.get('/:id', getTravelById)
router.put('/:id', updateTravelBook)
router.delete('/:id', removeTravelBook)

module.exports = router;