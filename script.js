let startButton = document.querySelector("#btn_start");
let stopButton = document.querySelector("#btn_stop");

function showMessage(){
    console.log("start button");
}

startButton.addEventListener("click", () => {
    
    if(startButton.innerText === "start"){
        startButton.innerText = "begin";
    } else {
        startButton.innerText = "start";
    }
});

stopButton.addEventListener("click", () => {
    //stopButton.classList.add("btn_red");
    stopButton.classList.toggle("btn_red");
})

let input = document.querySelector(".input_box");

// input.addEventListener("change", () => {
//     console.log(input.value);
// })

// input.addEventListener("focus", () => {
//     console.log(input.value);
// })

// input.addEventListener("input", () => {
//     console.log(input.value);
// })

// input.addEventListener("keyup", () => {
//     console.log(input.value);
// })

input.addEventListener("mousedown",(event) => {
    console.log(event.button);
    let xCor = event.pageX;
    let yCor = event.pageY;
    let cor = `xCor - ${xCor}, yCor - ${yCor}`;
    console.log(cor); 
})
