const display = document.getElementById("display")

let time = 10
let timer = setInterval(function(){
  if(time <= 0){
    clearInterval(timer);
    document.getElementById("display").innerHTML = "Hej på dig!"
    document.getElementById("display").classList.add("red")
  } else if (time > 1) {
    document.getElementById("display").innerHTML = time + " sekunder"
  } else {
    document.getElementById("display").innerHTML = time + " sekund"
  }
  time = time - 1;
}, 1000);