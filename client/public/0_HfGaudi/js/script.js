// Connecting to server. Don't touch this :-) 
let socket = io();
socket.on('connected', function (msg) {
    console.log(msg);
});


let headline1 = document.getElementById("headline1")
let headline2 = document.getElementById("headline2")
let textfeld1 = document.getElementById("textfeld1");
let textfeld2 = document.getElementById("textfeld2");
// let colP1 = document.getElementById("col-p1");
// let colP2 = document.getElementById("col-p2");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

let actTextfeld = textfeld1;

let bilder1 = new Array(); 
let bilder2 = new Array(); 
let bilder3 = new Array(); 
let bilder4 = new Array(); 

//Array Bilder
bilder1[0] = "url('Bild1.jpeg')";
bilder1[1] = "url('Bild2.jpeg')";
bilder1[2] = "url('Bild3.jpeg')";

bilder2[0] = "url('Bild1.jpeg')";
bilder2[1] = "url('Bild2.jpeg')";
bilder2[2] = "url('Bild3.jpeg')";

bilder3[0] = "url('Bild1.jpeg')";
bilder3[1] = "url('Bild2.jpeg')";
bilder3[2] = "url('Bild3.jpeg')";

bilder4[0] = "url('Bild1.jpeg')";
bilder4[1] = "url('Bild2.jpeg')";
bilder4[2] = "url('Bild3.jpeg')";

//Textfeld Events
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

textfeld2.addEventListener("click", function(e) {
    actTextfeld = textfeld2;
  });

textfeld1.addEventListener("click", function(e) {
actTextfeld = textfeld1;
});

textfeld3.addEventListener("click", function(e) {
    actTextfeld = textfeld3;
  });

textfeld4.addEventListener("click", function(e) {
actTextfeld = textfeld4;
});

  window.addEventListener("keydown", keydownHandler);
  


// Bilder Events
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

box3.addEventListener("click", function(e){

    let k = Math.round(Math.random() * 2);

    console.log(k)

    socket.emit('serverEvent', {type:'imageChange', imageIndex:k});
});

box4.addEventListener("click", function(e){

    let l = Math.round(Math.random() * 2);

    console.log(l)

    socket.emit('serverEvent', {type:'imageChange', imageIndex:l});
});


function keydownHandler(e) {
    // Prevent browser shortcuts like going back in browser history on backspace
    e.preventDefault();

    // Sending an event
    socket.emit('serverEvent', {type:'keyPressed', key:e.key, color:myColor});
}






// Incoming events 
socket.on('serverEvent', function (message) {

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
        box1.style.backgroundImage = bilder1[message.imageIndex];
        box2.style.backgroundImage = bilder2[message.imageIndex];
        box3.style.backgroundImage = bilder3[message.imageIndex];
        box4.style.backgroundImage = bilder4[message.imageIndex];
    }

});

});
