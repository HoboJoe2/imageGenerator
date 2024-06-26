var p5 = require("p5");

let x = 5;
let y = x*2;
console.log(y)
console.log(upperCase("hi"))

function setup() {
    p5.createCanvas(400, 400);
};

function draw() {
    p5.background(220);
    p5.ellipse(50,50,80,80);
};

setup();
draw();