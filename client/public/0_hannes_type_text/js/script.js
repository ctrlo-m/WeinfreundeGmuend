// Connecting to server. Don't touch this :-) 
let socket = io();
socket.on('connected', function (msg) {
    console.log(msg);
});

// Your script starts here ------------------------------------------------------
let randomHue = Math.round(Math.random() * 360);
let myColor = "hsl(" + randomHue + ", 100%, 50%)";

let c1 = document.getElementById("conlumn1");

window.addEventListener("keydown", keydownHandler);

// Incoming events 
socket.on('serverEvent', function (message) {

});
