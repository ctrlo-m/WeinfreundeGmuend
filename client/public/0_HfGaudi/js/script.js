// Connecting to server. Don't touch this :-) 
let socket = io();
socket.on('connected', function (msg) {
    console.log(msg);
});


let randomHue = Math.round(Math.random() * 360);
let myColor = "hsl(" + randomHue + ", 50%, 60%)";
// let headline2 = document.getElementById("col1con1")

let imageIndex
let col1textfeld1 = document.getElementById("col1con1");
let col1textfeld2 = document.getElementById("col1con2");
let col1bild = document.getElementById("bild1");
let col1head = document.getElementById("col1head1")
let col1text1 = document.getElementById("col1text1");

let col2textfeld1 = document.getElementById("col2con1");
let col2textfeld2 = document.getElementById("col2con2");
let col2textfeld3 = document.getElementById("col2con3");
let col2head = document.getElementById("col2head1");
let col2bild = document.getElementById("bild2");
let col2text1 = document.getElementById("col2text1");
let col2text2 = document.getElementById("col2text2");

let col3textfeld1 = document.getElementById("col3con1");
let col3textfeld2 = document.getElementById("col3con2");
let col3head = document.getElementById("col3head1");
let col3text = document.getElementById("col3text1")
let col3bild = document.getElementById("bild3")

let col4textfeld1 = document.getElementById("col4con1");
let col4textfeld2 = document.getElementById("col4con2");
let col4textfeld3 = document.getElementById("col4con3");
let col4textfeld4 = document.getElementById("col4con4");
let col4head1 = document.getElementById("col4head1")
let col4head2 = document.getElementById("col4head2")
let col4text1 = document.getElementById("col4text1")
let col4text2 = document.getElementById("col4text2")
let col4bild = document.getElementById("bild4")

let imgOnLoad1 = Math.round(Math.random() * 3);
document.getElementById("bild1").style.backgroundImage = `url("images/Bild1_${imgOnLoad1}.png")`;
socket.emit('serverEvent', {type:'imageLoad', bildID: 1 , imageIndex:imgOnLoad1});

let imgOnLoad2 = Math.round(Math.random() * 3);
document.getElementById("bild2").style.backgroundImage = `url("images/Bild2_${imgOnLoad2}.png")`;
socket.emit('serverEvent', {type:'imageLoad', bildID: 2 , imageIndex:imgOnLoad2});

let imgOnLoad3 = Math.round(Math.random() * 3);
document.getElementById("bild3").style.backgroundImage = `url("images/Bild3_${imgOnLoad3}.png")`;
socket.emit('serverEvent', {type:'imageLoad', bildID: 3 , imageIndex:imgOnLoad3});

let imgOnLoad4 = Math.round(Math.random() * 3);
document.getElementById("bild4").style.backgroundImage = `url("images/Bild4_${imgOnLoad4}.png")`;
socket.emit('serverEvent', {type:'imageLoad', bildID: 4 , imageIndex:imgOnLoad4});

// let bilder1 = new Array(); 
// let bilder2 = new Array(); 
// let bilder3 = new Array(); 
// let bilder4 = new Array(); 

//Array Bilder
// bilder1[0] = "url('Bild1/Bild1_1.png')";
// bilder1[1] = "url('Bild1/Bild1_2.png')";
// bilder1[2] = "url('Bild1/Bild1_3.png')";
// bilder1[3] = "url('Bild1/Bild1_4.png')";

// bilder2[0] = "url('Bild2/Bild2_1.png')";
// bilder2[1] = "url('Bild2/Bild2_2.png')";
// bilder2[2] = "url('Bild2/Bild2_3.png')";
// bilder2[3] = "url('Bild2/Bild2_4.png')";

// bilder3[0] = "url('Bild3/Bild3_1.png')";
// bilder3[1] = "url('Bild3/Bild3_2.png')";
// bilder3[2] = "url('Bild3/Bild3_3.png')";
// bilder3[3] = "url('Bild3/Bild3_4.png')";

// bilder4[0] = "url('Bild4/Bild3_1.png')";
// bilder4[1] = "url('Bild4/Bild3_2.png')";
// bilder4[2] = "url('Bild4/Bild3_3.png')";
// bilder4[3] = "url('Bild4/Bild3_4.png')";


let actTextfeld = col1text1;





//Textfeld Events

//COL1
col1textfeld1.addEventListener("click", function(e) {
    actTextfeld = col1head;
});
col1textfeld2.addEventListener("click", function(e) {
    actTextfeld = col1text1;
});

//COL2
col2textfeld1.addEventListener("click", function(e) {
  actTextfeld = col2head;
});
col2textfeld2.addEventListener("click", function(e) {
  actTextfeld = col2text1;
});
col2textfeld3.addEventListener("click", function(e) {
actTextfeld = col2text2;
});

//COL3
col3textfeld1.addEventListener("click", function(e) {
actTextfeld = col3head;
});

col3textfeld2.addEventListener("click", function(e) {
actTextfeld = col3text;
});

//COL4
col4textfeld1.addEventListener("click", function(e) {
actTextfeld = col4head1;
});
col4textfeld2.addEventListener("click", function(e) {
actTextfeld = col4text1;
});
col4textfeld3.addEventListener("click", function(e) {
actTextfeld = col4head2;
});
col4textfeld4.addEventListener("click", function(e) {
actTextfeld = col4text2;
});

window.addEventListener("keydown", keydownHandler);
  


// Bilder Events
col1bild.addEventListener("click", function(e){
    let i = Math.round(Math.random() * 3);
    console.log(i)
    console.log("Bild 1 klick")
    socket.emit('serverEvent', {type:'imageChange', bildID: 1 , imageIndex:i});
});

col2bild.addEventListener("click", function(e){
    let i = Math.round(Math.random() * 3);
    console.log(i)
    socket.emit('serverEvent', {type:'imageChange', bildID: 2, imageIndex:i});
});

col3bild.addEventListener("click", function(e){
    let i = Math.round(Math.random() * 3);
    console.log(i)
    socket.emit('serverEvent', {type:'imageChange', bildID: 3, imageIndex:i});
});

col4bild.addEventListener("click", function(e){
    let i = Math.round(Math.random() * 3);
    console.log(i)
    socket.emit('serverEvent', {type:'imageChange', bildID: 4, imageIndex:i});
});


// Ausblenden der Platzhalter bei Auswahl
col1textfeld1.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 1, fieldID: "head1"});
})

col1textfeld2.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 1, fieldID: "text1"});
})

col2textfeld1.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 2, fieldID: "head1"});
})

col2textfeld2.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 2, fieldID: "text1"});
})

col2textfeld3.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 2, fieldID: "text2"});
})

col3textfeld1.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 3, fieldID: "head1"});
})

col3textfeld2.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 3, fieldID: "text1"});
})

col4textfeld1.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 4, fieldID: "head1"});
})

col4textfeld2.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 4, fieldID: "text1"});
})

col4textfeld3.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 4, fieldID: "head2"});
})

col4textfeld4.addEventListener("click", function(e){ 
    socket.emit('serverEvent', {type:'deleteText', colID: 4, fieldID: "text2"});
})


// Tastenanschläge
function keydownHandler(e) {
    // Prevent browser shortcuts like going back in browser history on backspace
    e.preventDefault();

    // Sending an event
    socket.emit('serverEvent', {type:'keyPressed', key:e.key, color:myColor});
}






// Incoming events 
socket.on('serverEvent', function (message) {


    if (message.type == 'deleteText') {
        document.getElementById("span-col"+ message.colID + "-" + message.fieldID).style.display = "none";
        // console.log("span-col"+ message.colID + "-" + message.fieldID)
    }

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

    if (message.type == 'imageLoad') {
        document.getElementById("bild"+message.bildID).style.backgroundImage = `url("images/Bild${message.bildID}_${message.imageIndex}.png")`;
    }

    if (message.type == 'imageChange') {
        document.getElementById("bild"+message.bildID).style.backgroundImage = `url("images/Bild${message.bildID}_${message.imageIndex}.png")`;
    }

});

//});

