const router = require('express').Router()
const{User} =  require('../models')
const {authenticate,isLogged} = require('./helpers')

router.get('/register',(cro,sro)=>{

})

router.post('/register',async (cro,sro)=>{
    try{
        const user = await User.create(cro.body)
        // const hello = user._id.toHexString()
        // const hi = Number(hello)
        // console.log('session', cro.session)
        // console.log(hi)
        // console.log(hello)
        cro.session.user_id = user._id
}catch(err){
    console.log(err)
        sro.status(401).send({
            message: err.message
        })
}
sro.send('hi')

})

router.post('/login',authenticate, async (cro,sro)=>{
 const user =  await User.findOne({
        email: cro.body.email
    })
    
    if(!user){
        console.log('not user')
        cro.session.err = ['no user found with that email']
    }
    const pass_valid = await user.validatePass(cro.body.password)
    
    if(!pass_valid){
        cro.session.err =['password not valid']
        sro.send('nope')
    }
    const objid = user._id.toString()
    cro.session.user_id = user._id
    console.log(cro.session.user_id)
    sro.send(user)

})
router.get('/authenticate',authenticate, (cro,sro)=>{
    sro.json(cro.user)
    // console.log(cro.user)
})

router.get('/logout',(cro,sro)=>{
    cro.session.destroy()

    sro.json({
        message:'logged out'
    })
})
module.exports = router