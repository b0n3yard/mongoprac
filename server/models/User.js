const {model, Schema, default: mongoose} = require('mongoose');
const {hash, compare} = require('bcrypt')


const Users = new Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        min: [2, 'must be more than 2 charecters']
    },
    email:{
        type: String,
        required: true,
        validate:{
            validator(val){
                return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(val)
            },
            message(){
              return 'email address not valid'
            }
        }
    },
    password:{
        type:String,
        required:true,
        min: [6, 'password must be more than 6 charecters']
    },
    shops:[{
        type: Schema.Types.ObjectId,
        ref:'shops'
    }]
    
},{
    methods:{
        async validatePass(formPassword) {
            const is_valid = await compare(formPassword, this.password);
      
            return is_valid;
        }
    
    }
})

Users.pre('save', async function(next){
    if(!this.created){
        this.password = await hash(this.password, 10)   
    }
    next()
})
const User = model('Users', Users) 
module.exports = User