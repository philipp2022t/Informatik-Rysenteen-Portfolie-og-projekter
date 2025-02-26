let img;
let keyImg;
let krypteretImg;
let encryptButton;
let n;

function preload() {
  keyImg = loadImage('billeder/mps.jpg');
  img = loadImage('billeder/mps.jpg');
}

function setup() {
  w = img.width;
  h = img.height;

  kw= keyImg.width;
  kh= keyImg.height;
  
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
      

      let krypteretColor = color((getPixelValueImg(0,i,j)+getPixelValueKey(0,i,j))%256, (getPixelValueImg(1,i,j)+getPixelValueKey(1,i,j))%256, (getPixelValueImg(2,i,j)+getPixelValueKey(2,i,j))%256);
      
      
      krypteretImg.set(i, j, krypteretColor);
      
    }
  }

  krypteretImg.updatePixels();
  

  redraw();
}



function getPixelValueImg(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}

function getPixelValueKey(n,i,j){
  k = keyImg.pixels[(i+kw*j)*4+n];
  return k;
}

function SAVE() {
    krypteretImg.save('krypteret_billede', 'png')
    console.log('saved')
  }