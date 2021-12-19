console.log('in js');

$(document).ready(onReady);
 
function onReady(){
    console.log('in jQ');
    
    $('.clear').on('click', clearInput);//clear button
    $('.equals').on('click', calculate);//equals button
}

//clearing input fields
function clearInput(event){
    //no refresh
    event.preventDefault();//works

    $('#firstNum').val('');
    $('#secondNum').val('');
}

function calculate(event){
    //no refresh
    event.preventDefault();//works

    //new object for inputted numbers
    let newNumObject = {
        firstNumber: $('#firstNum').val(),
        operator: $('#operators').val(),
        secondNumber: $('#secondNum').val()
    }
    //logging to see the object
    console.log('newNumObject', newNumObject);//logs the object = true
    
    $.ajax({
        method: 'POST', //sends to server.js
        url: '/calculate',
        data: newNumObject //where the inputs are stored
    })
        .then((response) =>{
            console.log('POST response', response); //checking what 'response' is
            render(response);
            refresh();
        })
}

function render(response){
    //empty the h2 on the DOM
    $('#total').empty;
    console.log(response);
    
    $('#total').append(`
        <div>
            ${response}
        </div> 
    `)
}

function refresh(){
    //network request
    let ajaxOptions = {
        method: 'GET',
        url: '/history'
    }
    $.ajax(ajaxOptions)
        .then((response) =>{
            console.log('AJAX request complete', response);
            showHistory(response);
        })
}

function showHistory(storedData){
    //empty h2 on DOM 
    $('.fade-in-text').empty();
    for(let history of storedData){
        $('.fade-in-text').append(`
            <div>
            <i>
                ${history}
            </i>
            </div>
        `)
    }
}