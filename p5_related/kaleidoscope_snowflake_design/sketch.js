let symmetry = 12;
let angle = 360 / symmetry;
let saveButton;
let clearButton;
let slider;
let xoff = 0;

function setup() {
    createCanvas(680, 680);
    angleMode(DEGREES);
    background(0);
    translate(width / 2, height / 2);
    stroke(255, 0, 0);
    for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        line(0, 0, width, 0);
    }
    saveButton = createButton('save');
    saveButton.mousePressed(saveSnowflake);
    clearButton = createButton('clear');
    clearButton.mousePressed(clearCanvas);
    slider = createSlider(1,32,4,0.1);
    colorMode(HSB,255,255,255);
}
function saveSnowflake(){
    save('snowflake.png');
}

function clearCanvas(){
    background(0);
}
function draw() {
    // background(0);

    translate(width / 2, height / 2);
    
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let mx = mouseX - width / 2;
        let my = mouseY - height / 2;
        let pmx = pmouseX - width / 2;
        let pmy = pmouseY - height / 2;

        if (mouseIsPressed) {
            // let hu = noise(xoff) * 255; 
            let hu = map(sin(xoff),-1,1,0,360);
            xoff+=0.5;
            stroke(hu,255,255, 100); // 100 is alpha here blur
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                // let d = dist(mx, my, pmx, pmy);
                // let sw = map(d, 0, 20, 20, 1);
                let sw = slider.value();
                strokeWeight(sw);
                line(mx,my,pmx,pmy);
                push();
                scale(1,-1);
                line(mx,my,pmx,pmy);
                pop();

                // strokeWeight(4);
            }
        }
    }
}
