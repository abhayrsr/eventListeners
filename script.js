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