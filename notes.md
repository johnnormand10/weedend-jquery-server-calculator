[π] Setup
    [π]server folder
        [π]server.js
        [“]public folder
            [π]index.html
        [π]scripts
            [π]client.js
            [π]jQuery
        [π]styles
            [π]style.css
[π]npm init --yes
[π]npm install express
[π]npm install node
[π]npm install body-parser

[π]index
    [π]link
        [π]jQurey
        [π]client.js
        [π]style.css
    [π]mockup/ wirefram

[π]server
    [π]const express
    [π]const bodyParser
    [π]const app
    [π]app.use(express.static(public/server)
    [π]app.use(body-parser) <!-- copy and paste -->
    [π]app.use(body-parser.json) <!-- copy and paste -->
    [π]port 5000
    [π]app.listen

[π]client
    [π]log(js)
    [π]document.ready function
    [π]log(jQ)

_________________________________________________

[π]Client side Meat
    [π]2 inputs
        [π]type = number
    [π]option to select what mathematical operation
    [π]capture the input
        [π]store input in object in client
        [π]send the object to server.js using POST
    [π]clear button/input
        [π]clear the user input fields  <!-- set .val('') -->

____________________________________________________


[π]Server side Meat
    [π]comput the numbers
    [π]handle math
        [π]addition
        [π]subtraction
        [π]multiplication
        [π]division
    [π]GET request to get acutal calculation

[π]History
    [π]store data even after refresh
    [π]only clear when server is shut down
    [π]display the calulations on the DOM
    [π]update the list (on the DOM) after new calculation