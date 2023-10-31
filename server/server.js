const mongoose = require('mongoose');
const express = require('express')
const session = require('express-session');
const PORT = process.env.port || 3333

const db = require('./controllers/connections.js')
require('dotenv').config()
const path =  require('path')
const myroutes= require(path.join(__dirname, 'controllers'))
// const shop_routes = require(path.join(__dirname, 'controllers/shop_routes'))
// const coffee_routes = require(path.join(__dirname, 'controllers/coffee_routes'))


const app = express()
app.use(express.json())
// app.use('/', shop_routes)
// app.use('/', coffee_routes)
app.get('*' ,(cro,sro)=>{
    sro.status(404).send({
        message:'route not found',
        error: 404
    })
    
})
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: true,
    cookie:{
        // sets the cookie age to 3 min
        maxAge:180000,
        //dosent allow the cookie to be accessed by client js
        httpOnly: true
    }
}))
app.use('/', myroutes)
db.on('open', ()=>{
    app.listen(PORT, () => {console.log(`started, listening on ${PORT}`); console.log('stop server by hitting ctrl + c')})
})
// mongoose.connect('mongodb://127.0.0.1:27017/coffee_shop_db');
// const {MongoClient, ObjectId} = require('mongodb')
// const url = `mongodb://localhost:27017`
// const client = new MongoClient(url)
// const db_name = 'fruits_db'
// const shop = mongoose.model('coffee_shop',{name: String, location: String, is_chain: Boolean})


// async function conneccttomongoose(){

//     const shops = await shop.deleteOne({_id: '653a964cc7c9b38c25edd593'})
    
//     // const first_shop = new shop({
//     //     name: 'another one',
//     //     location: 'atlanta' ,
//     //     is_chain: false})
//     // await first_shop.save()
//         console.log(shops)
//         mongoose.disconnect()

// }

// conneccttomongoose()
// client.connect().then(()=>{
//     const db = client.db(db_name)
//     const fruits = db.collection('fruits')

    // fruits.insertOne({
    //     name:'apple'
    // }).then(()=>{

//     //     console.log('inserted')
//     // })
// })
// async function connecttodatabase(){

//     await client.connect()
//     const db = client.db(db_name)
//     const fruits = db.collection('fruits')

//     // const orange = await fruits.insertOne({
//     //     name:'pear'
//     // })
//     const fruit = await fruits.find().sort({name: -1}).toArray()
// //  const fruit = await fruits.findOneAndUpdate({_id: new ObjectId('653a7723f1beb1795f0d79ce')},{$set:{ name: 'pinaple'}},{returnDocument:'after'})
// // const fruit = await fruits.updateOne({_id: new ObjectId('653a7723f1beb1795f0d79ce')},
// // {$set:{ shops:[{name: 'hi'},
// // {name:'there'}]}})
// // await fruits.deleteOne({_id: new ObjectId('653a783f2fbd6830382a1773')})
//  console.log (fruit)
// // console.log(orange)
//  client.close()
// }

// connecttodatabase()