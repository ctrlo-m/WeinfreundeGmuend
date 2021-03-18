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
let box2 = document.getElementById("box2");

//"url('Bild1.jpg')"
let bilder = new Array(); 

bilder[0] = "url('Bild1.jpeg')";
bilder[1] = "url('Bild2.jpeg')";
bilder[2] = "url('Bild3.jpeg')";



let actTextfeld = textfeld1;



box1.addEventListener("click", function(e){

    let i = Math.round(Math.random() * 2);

    console.log(i)

    socket.emit('serverEvent', {type:'imageChange', imageIndex:i});
});

box2.addEventListener("click", function(e){

    let j = Math.round(Math.random() * 2);

    console.log(j)

    socket.emit('serverEvent', {type:'imageChange', imageIndex:j});
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
    socket.emit('serverEvent', {type:'keyPressed', key:e.key, color:myColor});
}

// Incoming events 
socket.on('serverEvent', function (message) {
    console.log("Incoming event: ", message);

    if (message.type == 'keyPressed') {

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

    if (message.type == 'imageChange') {
        box1.style.backgroundImage = bilder[message.imageIndex];
        box1.style.backgroundImage = bilder[message.imageIndex];
    }

});
