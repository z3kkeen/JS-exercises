const display = document.getElementById("display")

function getNumber(min, max) {
    let number = Math.floor(Math.random() * 6) + 1

    if ( number >= 6 ) {
        console.log("6")
        display.src = "./img-lib/6dice.png"
    } else if ( number == 5 ) {
        console.log("5")
        display.src = "./img-lib/5dice.png"
    } else if ( number == 4 ) {
        console.log("4")
        display.src = "./img-lib/4dice.png"
    } else if ( number == 5 ) {
        console.log("3")
        display.src = "./img-lib/3dice.png"
    } else if ( number == 2 ) {
        console.log("2")
        display.src = "./img-lib/2dice.png"
    } else {
        console.log("1")
        display.src = "img-lib/1dice.png"
    }
 
}