function step7 (phase, amplitude) {
    const linesAmount = 13;
    console.log(mouseY);
    if (mouseY<-300) mouseY = -274;
    if (mouseY>460) mouseY = 464;
    for(var k = 0; k < linesAmount; k++) {
      stroke(0, 0, 0, (k / (linesAmount - 1) * 255));
      
      const offset = (1 - k / linesAmount) * 4 * ((mouseY-240)/464);
      beginShape();
      for (var i = 0; i < (width + 4); i+=4) {
        let y = height * 0.5;
        y += sin(i * 0.01 - phase + offset) * amplitude;
        y += sin(i * 0.02 - phase + offset) * amplitude;
        const lastSineNoise = noise(phase * 0.1 + (i / width) * 5) * 10;
        y += sin(i * 0.04 - phase + offset + lastSineNoise) * amplitude;
        vertex(i, y);
      }
      endShape();
    }
  }
  
  function setup () {
    createCanvas(windowWidth, windowHeight/3);
    console.log(windowHeight);
    noiseSeed(random(100));
    mouseY = (height-200)*(height-668);
    console.log(mouseY);
    noFill();
  }
  
  function windowResized () {
    resizeCanvas(windowWidth, windowHeight/2);
    noiseSeed(random(100));
    draw();
  }
    
  function draw () {
    clear();
    const phase = millis() * 0.001;
    const amplitude = height * 0.05;
    // console.log(amplitude, phase)
    window['step7'](phase, amplitude);
  }