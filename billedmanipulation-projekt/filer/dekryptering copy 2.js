let krypteretImg;
let keyImg;

function preload() {
  keyImg = loadImage('billeder/mps.jpg');
  krypteretImg = loadImage('billeder/krypteret_billede (3).png');
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
      let imgColor = krypteretImg.get(i, j);
      let keyColor = keyImg.get(i, j);

      let dekrypteretColor = decryptPixel(imgColor, keyColor);
      
      dekrypteretImg.set(i, j, dekrypteretColor);
    }
  }

  dekrypteretImg.updatePixels();
  

  redraw();
}

function decryptPixel(imgColor, keyColor) {
  return color(
    (red(imgColor) - red(keyColor)+255) % 255,
    (green(imgColor) - green(keyColor)+255) % 255,
    (blue(imgColor) - blue(keyColor)+255) % 255
  );
}