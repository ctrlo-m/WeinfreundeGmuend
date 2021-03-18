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
let column1 = document.getElementById("column1");
let column2 = document.getElementById("column2");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

let platzhalter1 = document.getElementById("platzhalter1")
let platzhalter2 = document.getElementById("platzhalter2")

let actTextfeld = textfeld1;

function anzeigen(das){ 
    if(document.getElementById(das).style.display=='block') 
    document.getElementById(das).style.display='none'; 
    // else document.getElementById(das).style.display='none';
} 


column1.addEventListener("click", function(e){ 
    anzeigen('platzhalter1')
})

column2.addEventListener("click", function(e){ 
    anzeigen('platzhalter2')
})

column1.addEventListener("click", function(e) {
  actTextfeld = textfeld1;
});
column2.addEventListener("click", function(e) {
  actTextfeld = textfeld2;
});



box1.addEventListener("click", function(e) {
    let x = Math.round(Math.random() * 360);
    let y = Math.round(Math.random() * 100);
    console.log(y)
    let boxColor = "hsl(" + x + ", " + y + "%, 70%)";
    console.log(boxColor)
    box1.style.backgroundColor = boxColor;
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
