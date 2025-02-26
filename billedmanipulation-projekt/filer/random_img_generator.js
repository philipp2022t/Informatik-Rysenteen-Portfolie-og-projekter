let keyImg;
let w;
let h;
let seed;

function setup(){
    w = 188;
    h = 242;
    seed = 99;
  
    createCanvas(w,h);
    background(200);
    

  saveButton = createButton('Save');
  saveButton.position(50, h + 50);
  saveButton.mousePressed(SAVE);

  saveButton = createButton('Generate random encryption key');
  saveButton.position(20, h + 20);
  saveButton.mousePressed(generateKey);


  randomSeed(seed);
}

function draw(){
  
  if (keyImg) {
    image(keyImg, 0, 0);
  }

  
  image(keyImg, 0, 0);
  print(keyImg.pixels[10003]);
  noLoop();
}

function generateKey(){
  
  keyImg = createImage(w, h);
  keyImg.loadPixels();

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      let r = random(255);
      let g = random(255);
      let b = random(255);
      keyImg.set(i, j, color(r, g, b));
    }
  }
  keyImg.updatePixels();
  redraw();
  print(keyImg);
}

function SAVE() {
  keyImg.save('key', 'png')
  console.log('saved')
}
