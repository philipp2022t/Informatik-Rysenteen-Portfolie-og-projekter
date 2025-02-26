let krypteretImg;
let keyImg;

function preload() {
  keyImg = loadImage('billeder/key.png'); // Nøgle billede
  krypteretImg = loadImage('billeder/krypteret_billede (5).png'); // Original billede
}

function setup() {
  w = krypteretImg.width;
  h = krypteretImg.height;

  kw= keyImg.width;
  kh= keyImg.height;
  
  createCanvas(4 * w, h);
  noStroke();
  pixelDensity(1);
  krypteretImg.loadPixels();
  keyImg.loadPixels();

  decryptButton = createButton('Decrypt');
  decryptButton.position(30, h + 20);
  decryptButton.mousePressed(decrypt);
}

function draw() {
  image(krypteretImg, 0, 0);
  image(keyImg, w, 0);
  if (dekrypteretImg) {
    image(dekrypteretImg, 2 * w, 0);
  }
  
  noLoop();
}

function decrypt() {

  dekrypteretImg = createImage(w, h);
 
  dekrypteretImg.loadPixels();
  

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      

      let dekrypteretColor = color((getPixelValueImg(0,i,j)-getPixelValueKey(0,i,j)+255)%255, 
      (getPixelValueImg(1,i,j)-getPixelValueKey(1,i,j)+255)%255, 
      (getPixelValueImg(2,i,j)-getPixelValueKey(2,i,j)+255)%255);
      
      
      dekrypteretImg.set(i, j, dekrypteretColor);
      
    }
  }

  dekrypteretImg.updatePixels();
  

  redraw();
}
function getPixelValueImg(n,i,j){
  p = krypteretImg.pixels[(i+w*j)*4+n];
  return p;
}

function getPixelValueKey(n,i,j){
  k = keyImg.pixels[(i+kw*j)*4+n];
  return k;
}