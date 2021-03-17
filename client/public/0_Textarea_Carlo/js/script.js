// Connecting to server. Don't touch this :-) 
let socket = io();

socket.on('connected', function (msg) {
    console.log(msg);
});



// Incoming events 
socket.on('serverEvent', function (message) {

});

//----------------------------------------------------------------------------//

let randomHue = Math.round(Math.random() * 360);
let myColor = "hsl(" + randomHue + ", 100%, 50%)";

let textarea = document.getElementById("textfeld");




