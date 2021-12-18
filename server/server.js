const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({exntended: true}));
app.use(bodyParser.json());

const port = 5000;
app.listen(port, () =>{
    console.log('In server.js, I\'m listening');
})
//where the input data is going to be stoed for history 
let storedData = [

];
//console.log('in storedData', storedData);//testing to see what is in the array

//where the input data is going to be stored to calculate
let storedNum = {

};

app.get('/calculate', (req,res) =>{ //"getting" the input data from server.js
    console.log('in GET /calculate');//seeing if I am in GET
    res.send(storedNum);//putting the input data in the storedNum object
    
});

app.get('/history', (req, res) =>{
    console.log('in GET /history');
    res.send(storedData);
})

app.post('/calculate', (req, res) =>{
    console.log('in POST /calculate', req.body);//seeing if I am in POST //req.body === newNumObject from client.js
   
    //new object to do calculations
    let newObject = {
        firstNum: Number(req.body.firstNumber),
        operator: req.body.operator,
        secondNum: Number(req.body.secondNumber)
    };
    //taking the inputs and use eval()
    //eval() makes a string with an operator into a mathematical equation
    let testStr = eval(`${req.body.firstNumber} ${req.body.operator} ${req.body.secondNumber}`);
    console.log(testStr);

    res.send(`${req.body.firstNumber} ${req.body.operator} ${req.body.secondNumber} = ${testStr}`);
    let store = (`${req.body.firstNumber} ${req.body.operator} ${req.body.secondNumber} = ${testStr}`)
    //storing the equation into an array for later use 
    storedData.push(store);
    console.log('in storedData', storedData);
    
})