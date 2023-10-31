const {model, Schema} = require('mongoose');

const shop2 = new Schema({
    name: {
        type:String
    },
    location:
    {   
        type:String
    },
    is_chain:{
        type:Boolean,
        default:true
    },
    coffees:[{
        name:{
            type: Schema.Types.ObjectId,
            ref: 'coffee'
        }
    }],
    user:{
        type:Schema.Types.ObjectId,
        ref: 'User'
    }
})
const Shop = model('coffee_shop',shop2)

module.exports = Shop
