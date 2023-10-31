const  router = require('express').Router()
const shop_routes = require('./shop_routes')
const coffee_routes = require('./coffe_routes')
const user_routes =require('./User_routes')


router.use('/',[shop_routes,coffee_routes,user_routes])

module.exports = router