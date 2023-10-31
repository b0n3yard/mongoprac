const router = require('express').Router()
const {Coffee, Shop} = require('../models')
router.get('/',async (cro,sro)=>{
    const shops = await Shop.find({}).lean()
    console.log(shops)
 sro.send(shops)
})
 
router.post('/create',async (cro,sro)=>{
    const shops = await Shop.create(cro.body)

    console.log(shops)

})

router.put('/update',async (cro,sro)=>{

    // consile.log(cro.body)
    const shops = await Shop.findByIdAndUpdate(
        {_id: cro.body._id},
        {$push:{coffees:{name: cro.body.name, strength:cro.body.strength}
    }
    
},{new:true})
    console.log(shops)
    sro.json(shops)

})
router.get('/find/:id',(async (cro,sro)=>{{
    const id = cro.params.id
    const shops = await Shop.findById(id).lean()
    console.log(id)
    sro.json(shops)
}}))

router.put('/shop/:id', async (cro,sro)=>{
    const id = cro.params.id
    const shops = await Shop.findByIdAndUpdate(
         id,
        {name:cro.body.name},{new:true})

        sro.json(shops)

})
router.delete('/:id',async (cro,sro)=>{
    const id = cro.params.id

    const deleted = await Shop.deleteOne({_id: id})
    sro.json(deleted)
    // sro.send('deleted')
})
module.exports = router