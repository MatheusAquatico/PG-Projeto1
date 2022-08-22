const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('Hello World')
})

app.get('/Q6',(req,res) =>{
    res.send('Hello World')
})
app.use(express.static('Q6/public'));


app.get('/Q5',(req,res) =>{
    res.send('Hello World')
    
})
app.use(express.static('Q5/public'));



app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})