const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({entended: false}));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/form.html')
})

app.post('/form-submitted', (req, res)=> {
    const answer = req.body.firstname + " " + req.body.lastname + " " + req.body.email + " " + req.body.course;
    res.send("Your answers are: " + " " + answer);
})

app.listen(5000, ()=> {
    console.log(`It's working!`)
})