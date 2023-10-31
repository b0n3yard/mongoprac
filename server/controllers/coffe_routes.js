const router = require('express').Router()
const {Coffee, Shop} = require('../models')

router.get('/coffee', async (cro,sro)=>{
    const coffee = await Coffee.find()
    sro.json(coffee)
})
router.post('/coffee', async (cro,sro)=>{
    const coffe = await Coffee.create(cro.body)
    sro.json(coffe)
})
// router.put('/')
module.exports = router