require("dotenv").config();
const express = require('express')
const app = express()
app.use(express.json());
const print = require("./controller");

app.get('/', print);

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})

app.get('/home', (req, res) => {
    res.send('This is the home page')
})

app.post('/user', (req, res) => {
    const {name, email, password} = req.body;
    res.send(`Name: ${name}, Email: ${email}`)
})