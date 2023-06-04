let values = [];

let i = 0;
let w = 5;

let states = [];

function setup() {
    // fullScreen();
    createCanvas(2000, 900);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    frameRate(5);

    quicksort(values, 0, values.length - 1);

}

async function quicksort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);
    await Promise.all([
        quicksort(arr, start, index - 1),
        quicksort(arr, index + 1, end)
    ]);
    // quicksort(arr,start,index-1);
    // quicksort(arr,index+1,end);
}
async function partition(arr, start, end) {

    for (let i = start; i < end; i++) {
        states[i]=1;
    }

    let pivotIndex = start;
    let pivotValue = arr[end];

    states[pivotIndex]=0;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
        }
    }
    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
        if(i!=pivotIndex)
        {
            states[i]=-1;
        }
    }

    return pivotIndex;
}



function draw() {
    background(51);

    for (let i = 0; i < values.length; i++) {
        stroke(0);
        if(states[i]==0){
            fill(255,0,0);
        }else if (states[i]==1){
            fill(0,0,255);
        }else{
            fill(255);
        }
        rect(i * w, height - values[i], w, values[i]);
        // line(i, height, i, height - values[i]);
    }
}

async function swap(arr, a, b) {
    await sleep(10);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}