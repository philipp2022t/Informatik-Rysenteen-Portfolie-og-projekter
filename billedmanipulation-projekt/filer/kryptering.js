let img;
let keyImg;
let krypteretImg;
let encryptButton;
let d;

function preload() {
  keyImg = loadImage('billeder/mps.jpg');
  img = loadImage('billeder/mps.jpg');
}

function setup() {
  d=256;
  
  w = img.width;
  h = img.height;
  
  createCanvas(4 * w, h);
  noStroke();
  pixelDensity(1);
  img.loadPixels();
  keyImg.loadPixels();

  encryptButton = createButton('Encrypt');
  encryptButton.position(30, h + 20);
  encryptButton.mousePressed(encrypt);

  saveButton = createButton('Save');
  saveButton.position(450, h + 20);
  saveButton.mousePressed(SAVE);
}

function draw() {
  image(img, 0, 0);
  image(keyImg, w, 0);
  if (krypteretImg) {
    image(krypteretImg, 2 * w, 0);
  }
  
  noLoop();
}

function encrypt() {
  krypteretImg = createImage(w, h);
 
  krypteretImg.loadPixels();
  

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      let imgColor = img.get(i, j);
      let keyColor = keyImg.get(i, j);

      let krypteretColor = encryptPixel(imgColor, keyColor);
      
      krypteretImg.set(i, j, krypteretColor);
      
    }
  }

  krypteretImg.updatePixels();
  

  redraw();
}

function encryptPixel(imgColor, keyColor) {
  return color(
    (red(imgColor) + red(keyColor)) % d,
    (green(imgColor) + green(keyColor)) % d,
    (blue(imgColor) + blue(keyColor)) % d
  );
}



function SAVE() {
    krypteretImg.save('krypteret_billede', 'png')
    console.log('saved')
  }