import axios from 'axios'
import { render } from './actions'
import templatelanding from '../views/landing.hbs'
import stuffview from '../views/shops.hbs'
import headerview from '../views/header.hbs'
import loginview from '../views/login-form.hbs'


async function showheader(){
    const res =  await axios.get('/authenticate')
    const headerel = document.querySelector('#mainheader')
    window.user = res.data
    headerel.innerHTML = headerview( {user:res.data})

    const loginlink = document.querySelector('a[href="/login"]')
    const logoutlink = document.querySelector('a[href="/logout"]')
    if(loginlink){
    loginlink.addEventListener('click', showlogin)
    }
    if(logoutlink){
        logoutlink.addEventListener('click', loggout)
    }
    
}
async function showshops() {
    const shops = await axios.get('/shops')
    const shopsviewbtn = document.querySelector('#thisbtn')



render(stuffview, {
    shops: shops.data

})
}
async function loginuser(e){
    e.preventDefault()
    const {email, password} = e.target
    await axios.post('/login',{
        email: email.value,
        password: password.value

    })
    window.location = '/'
    console.log(e.target.email.value)

}
async function loggout(e){
    e.preventDefault()
    console.log('hi')
    await axios.get('/logout')
    window.location ='/'
}
function showlogin(e){
    e.preventDefault()
    render(loginview)
    const loginform = document.querySelector('#login')
    loginform.addEventListener('submit',loginuser)
}

function init(){
    showheader()
    render(templatelanding, {
        name: 'michael',
        things: ['thing1', 'thing2', 'thing3']})

   
    const out2 = document.querySelector('#thisbtn')
    out2.addEventListener('click',showshops)
}
export default init