const {model, Schema} = require('mongoose');

const coffe = new Schema({
    name: {
        type:String
    },
    strength:{
        type:String
    }

})
const Coffee = model('coffee', coffe)
module.exports = Coffee