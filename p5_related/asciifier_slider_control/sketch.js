const canvasWidth = window.innerWidth - 40;
const canvasHeight = window.innerHeight - 40;

let img, thisPixel, thisBrightness, thisMap, slider, downsample, volatileImg;
let ascii = " .:-=+*#%@";
//let downsample = 10;
let ready = false;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  createFileInput(acceptFile);
  slider = createSlider(1, 20, 10, 1);
}

function draw() {
  downsample = slider.value();
  background(0);
  if (ready) {
    if (img.width != 1) {
      volatileImg = img.get();
      volatileImg.width > volatileImg.height
        ? volatileImg.resize(canvasWidth / downsample, 0)
        : volatileImg.resize(0, canvasHeight / downsample);
      textSize(downsample);
      fill(255);
      volatileImg.loadPixels();
      for (j = 0; j < volatileImg.height; j++) {
        for (i = 0; i < volatileImg.width; i++) {
          thisPixel = (i + j * volatileImg.width) * 4;
          thisBrightness =
            (volatileImg.pixels[thisPixel + 0] +
              volatileImg.pixels[thisPixel + 1] +
              volatileImg.pixels[thisPixel + 2]) /
            3;
          thisMap = map(thisBrightness, 0, 255, 0, ascii.length - 1);
          text(ascii.charAt(thisMap), i * downsample, j * downsample);
        }
      }
      volatileImg.updatePixels();

      //      noLoop();
    }
  }
}

function acceptFile(file) {
  if (file.type === "image") {
    console.log("Accepted");
    img = loadImage(file.data);
    ready = true;
  } else {
    console.log("Bad format.");
  }
}
