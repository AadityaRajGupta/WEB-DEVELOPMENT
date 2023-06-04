let values = [];

let i = 0;
let w = 10;

function setup()
{
    // fullScreen();
    createCanvas(800,200);
    values = new Array(floor(width/w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    frameRate(5);

    // values = sort(values);

    // this is algorithm which sort now to visualise and slowly we make it global 
    // for(let i=0;i < values.length ; i++){
    //  for(let j=0;j < values.length - i - 1;j++){
    //    let a = values[j];
    //    let b = values[j+1];
    //    if(a>b){
    //      swap(values,j,j+1);
    //    }
    //  }
    // }

}

function draw()
{
    background(51);

    // console.log(i,j);

    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
        let a = values[j];
        let b = values[j + 1];
            if (a > b) {
                swap(values, j, j + 1);
            }
        }
    }
    else {
        console.log("DONE");
        noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
        stroke(0);
        fill(255);
        rect(i*w,height - values[i],w,values[i]);
        // line(i, height, i, height - values[i]);
    }
}

function swap(arr, a, b)
{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
