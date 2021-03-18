// Connecting to server. Don't touch this :-) 
let socket = io();
socket.on('connected', function (msg) {
    console.log(msg);
});


// Your script starts here ------------------------------------------------------
let randomHue = Math.round(Math.random() * 360);
let myColor = "hsl(" + randomHue + ", 100%, 50%)";

let textfeld1 = document.getElementById("textfeld1");
let textfeld2 = document.getElementById("textfeld2");
let box1 = document.getElementById("box1");



let actTextfeld = textfeld1;



box1.addEventListener("click", function(e){

    let bild = "url('Bild1.jpg')"

    box1.style.backgroundImage = bild;
    console.log("Klick")
});

textfeld2.addEventListener("click", function(e) {
  actTextfeld = textfeld2;
});

textfeld1.addEventListener("click", function(e) {
    actTextfeld = textfeld1;
  });

window.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
    // Prevent browser shortcuts like going back in browser history on backspace
    e.preventDefault();

    // Sending an event
    socket.emit('serverEvent', {key:e.key, color:myColor});
}

// Incoming events 
socket.on('serverEvent', function (message) {
    console.log("Incoming event: ", message);

    if (message.key.length == 1) {
        // If it's a single letter -> create new span element and text

        let newSpan = document.createElement('span');
        newSpan.style.color = message.color;
        let newLetter = document.createTextNode(message.key);
        newSpan.appendChild(newLetter);
        actTextfeld.appendChild(newSpan);
    
    } else {
        // Otherwise it's some kind of special letter like Enter or Backspace

        if (message.key == "Backspace") {
            let lastIndex = actTextfeld.childNodes.length - 1;
            if (lastIndex >= 0) {
                actTextfeld.childNodes[lastIndex].remove();
            }
        }
    }

});
