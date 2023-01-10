const p5Min = require("./p5.min");

var polySynth;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5container");
    
    polySynth = new p5.PolySynth();
}

function playSynth1(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('C3', vel, 0, dur);
    polySynth.play('E3', vel, time += 0, dur);
    polySynth.play('G3', vel, time += 0, dur);

}

function playSynth2(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('D3', vel, 0, dur);
    polySynth.play('F3', vel, time += 0, dur);
    polySynth.play('A4', vel, time += 0, dur);

}

function playSynth3(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('E3', vel, 0, dur);
    polySynth.play('G3', vel, time += 0, dur);
    polySynth.play('B4', vel, time += 0, dur);

}

function playSynth4(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('F3', vel, 0, dur);
    polySynth.play('A4', vel, time += 0, dur);
    polySynth.play('C4', vel, time += 0, dur);

}

//skull credit to https://happycoding.io/tutorials/p5js/animation/random-skulls 
function drawSkull(skullX, skullY, skullWidth, skullHeight) {
   
    fill(random(255), random(255), random(255));
    noStroke();
  
    ellipse(skullX, skullY, skullWidth, skullHeight);
  
    rect(skullX - skullWidth / 4,
      skullY + skullHeight / 4,
      skullWidth / 2,
      skullHeight / 2);
  
    fill(0);
  
    var eyeSpacing = skullWidth / 4;
    var eyeWidth = skullWidth / 6;
    var eyeHeight = skullHeight / 4;
    ellipse(skullX - eyeSpacing,
      skullY,
      eyeWidth,
      eyeHeight);
    ellipse(skullX + eyeSpacing,
      skullY,
      eyeWidth,
      eyeHeight);
  
    var teethWidth = skullWidth / 30;
    var teethHeight = skullHeight / 4;
    var teethTop = skullY + skullHeight / 2;
    var teethSpacing = skullWidth / 6;
    rect(skullX - teethSpacing,
      teethTop,
      teethWidth,
      teethHeight);
    rect(skullX,
      teethTop,
      teethWidth,
      teethHeight);
    rect(skullX + teethSpacing,
      teethTop,
      teethWidth,
      teethHeight);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW){
        playSynth1();
        drawSkull(random(width), random(height), random(10, 100), random(10, 100));
    } else if(keyCode === RIGHT_ARROW){
        playSynth2();
        drawSkull(random(width), random(height), random(10, 100), random(10, 100));
    } else if(keyCode === UP_ARROW) {
        playSynth3();
        drawSkull(random(width), random(height), random(10, 100), random(10, 100));
    } else if(keyCode === DOWN_ARROW) {
        playSynth4();
        drawSkull(random(width), random(height), random(10, 100), random(10, 100));
    }
}
