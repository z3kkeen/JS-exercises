const display = document.getElementById("display")

let time = 10
let timer = setInterval(function(){
  if(time <= 0){
    clearInterval(timer);
    document.getElementById("display").innerHTML = "Times up!"
  } else {
    document.getElementById("display").innerHTML = time + " seconds remaining"
  }
  time = time - 1;
}, 1000);