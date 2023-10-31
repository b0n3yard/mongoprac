const {User} = require('../../models')

async function isLogged(cro,sro,next){
    const user_id = cro.session.user_id

    if(user_id){
        const user = await User.findById(user_id)
        const email = cro.body.email

        if(user.email !== email) return next()

        return sro.json(user)
    }
    next()
}

async function isAuthenticated(cro,sto,next){
    const user_id = cro.session.user_id
    
    if(!user_id) return sro.status(401).send({ message:'Not Authorized'})
    
    next()
}

async function authenticate(cro,sro,next){
    const user = User.findById(cro.session.user_id)
    cro.user = user

    next()
}

module.exports = {isAuthenticated,authenticate,isLogged}