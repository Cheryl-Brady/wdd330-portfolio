const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

//event handler for the WebSocket object instance
connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

// this takes the string from the event handler and then
// appends a new paragraph element to the <div id='output'>.
function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

// this is the code that allows us to add some messages
form.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}

// event handler to deal with the response
connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

//event handler for closed connection
connection.addEventListener('close', () => {
    output('DISCONNECTED');
}, false);

//event handler for errors
connection.addEventListener('error', (event) => {
output(`<span style='color: red;'>ERROR: ${event.data}</span>`);
}, false);