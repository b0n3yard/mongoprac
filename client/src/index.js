const template = require('./index.hbs')
const {prname} = require('./lib/tools')


template({
    name: 'JD',
    color: 'red'
})
//prname('handlebars')