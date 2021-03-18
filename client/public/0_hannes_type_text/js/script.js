// Connecting to server. Don't touch this :-) 
let socket = io();
socket.on('connected', function (msg) {
    console.log(msg);
});


// Your script starts here ------------------------------------------------------
let randomHue = Math.round(Math.random() * 360);
let myColor = "hsl(" + randomHue + ", 100%, 50%)";

let headline1 = document.getElementById("headline1")
let headline2 = document.getElementById("headline2")
let textfeld1 = document.getElementById("textfeld1");
let textfeld2 = document.getElementById("textfeld2");
let colP1 = document.getElementById("col-p1");
let colP2 = document.getElementById("col-p2");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

let actTextfeld = textfeld1;

headline1.addEventListener("click", function(e) {
    actTextfeld = headline1;
});
headline2.addEventListener("click", function(e) {
    actTextfeld = headline2;
});
colP1.addEventListener("click", function(e) {
  actTextfeld = textfeld1;
});
colP2.addEventListener("click", function(e) {
  actTextfeld = textfeld2;
});

//<<<<<<< Updated upstream
box1.addEventListener("click", function(e) {
    let x = Math.round(Math.random() * 360);
    let y = Math.round(Math.random() * 100);
    boxColor = "hsl(" + x + ", " + y + "%, 70%)";
    
    socket.emit('serverEvent', {type:'colorChange', boxID: 1, backgroundColor: boxColor})
});
box2.addEventListener("click", function(e) {
    let x = Math.round(Math.random() * 360);
    let y = Math.round(Math.random() * 100);
    boxColor = "hsl(" + x + ", " + y + "%, 70%)";

    socket.emit('serverEvent', {type:'colorChange', boxID: 2, backgroundColor: boxColor})
});
//=======
textfeld1.addEventListener("click", function(e) {
    actTextfeld = textfeld1;
  });
//>>>>>>> Stashed changes

window.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
    // Prevent browser shortcuts like going back in browser history on backspace
    e.preventDefault();

    // Sending an event
    socket.emit('serverEvent', {type:'keyPressed', key:e.key, color:myColor});
}

// Incoming events 
socket.on('serverEvent', function (message) {
    console.log("Incoming event: ", message);

    if (message.type == 'colorChange'){
        document.getElementById("box"+message.boxID).style.backgroundColor = message.backgroundColor;
    }

    if (message.type == 'keyPressed'){
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
    }
    

});
