// const template = require('./index.hbs')
import axios from 'axios'
import templatelanding from './views/landing.hbs'
import stuffview from './views/shops.hbs'
import test from './views/test.hbs'
import { render } from './lib/actions'
import prname from './lib/tools'
import './styles/main.scss'
// const {prname} = require('./lib/tools')
const out = document.querySelector('#out')

// out2.innerHTML = test
prname('hi there')
// render(test,{})
render(templatelanding, {
    name: 'b0n3yard',
    things: ['thing1', 'thing2', 'thing3']
})

const out2 = document.querySelector('#thisbtn')

async function showshops() {
    const shops = await axios.get('/shops')
    const shopsviewbtn = document.querySelector('#thisbtn')

    out2.addEventListener('click', () => {
        render(stuffview, {
            shops: shops.data

        })
    })
}
showshops()
// out.innerHTML = templatelanding({
//     name: 'michael',
//     things:['thing1', 'thing2', 'thing3']
// })

//prname('handlebars')