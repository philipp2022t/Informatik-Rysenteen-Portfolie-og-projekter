let img, keyImg;
let encryptedImg, decryptedImg;
let encryptButton;

function preload() {
  keyImg = loadImage('billeder/mps.jpg'); // Nøgle billede
  img = loadImage('billeder/mps.jpg'); // Original billede
}

function setup() {
  createCanvas(4 * img.width, img.height);
  noStroke();
  pixelDensity(1);
  img.loadPixels();
  keyImg.loadPixels();

  encryptButton = createButton('Encrypt');
  encryptButton.position(10, img.height + 10);
  encryptButton.mousePressed(encrypt);

  saveButton = createButton('Save');
  saveButton.position(100, img.height + 10);
  saveButton.mousePressed(SAVE);
}

function draw() {
  image(img, 0, 0); // Original billede
  image(keyImg, img.width, 0);
  if (encryptedImg) {
    image(encryptedImg, 2 * img.width, 0); // Krypteret billede
  }
  
  noLoop();
}

function encrypt() {
  encryptedImg = createImage(img.width, img.height);
 
  encryptedImg.loadPixels();
  

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let imgColor = img.get(i, j);
      let keyColor = keyImg.get(i, j);

      let encryptedColor = encryptPixel(imgColor, keyColor);
      
      encryptedImg.set(i, j, encryptedColor);
      
    }
  }

  encryptedImg.updatePixels();
  

  redraw();
}

function encryptPixel(imgColor, keyColor) {
  return color(
    (red(imgColor) + red(keyColor)) % 255,
    (green(imgColor) + green(keyColor)) % 255,
    (blue(imgColor) + blue(keyColor)) % 255
  );
}

function SAVE() {
    encryptedImg.save('krypteret_billede', 'png')
    console.log('saved')
  }