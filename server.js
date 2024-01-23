const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Juan'})
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.listen(3000)