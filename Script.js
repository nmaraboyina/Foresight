console.log("HEELP");
document.getElementById("OnButton").addEventListener("click", TurnOn);
document.getElementById("OffButton").addEventListener("click", TurnOff);
console.log("HEELP");
function TurnOn(){
    console.log("HEELP");
    const pricesClass = document.getElementsByClassName("a-price-whole");
    const pricesClassDecimal = document.getElementsByClassName("a-price-fraction");
    for (let i = 0; i < pricesClass.length; i++) {
        let whole = parseInt(pricesClass[i].innerHTML);
        let fraction = parseInt(pricesClassDecimal[i].innerHTML);
        let total = (whole+(fraction*0.01));
        let tax = 0.065;
        let fvalue = total + (total*tax);
        let fvalueWhole = Math.round(fvalue);
        let fvalueFraction = Math.round(((fvalue % 1) * 100));
        pricesClass[i].innerHTML = pricesClass[i].innerHTML = `${fvalueWhole}`;
        pricesClassDecimal[i].innerHTML = pricesClassDecimal[i].innerHTML = `${fvalueFraction}`;
    }
}

function TurnOff(){
    const pricesClass = document.getElementsByClassName("a-price-whole");
    const pricesClassDecimal = document.getElementsByClassName("a-price-fraction");
    for (let i = 0; i < pricesClass.length; i++) {
        let whole = parseInt(pricesClass[i].innerHTML);
        let fraction = parseInt(pricesClassDecimal[i].innerHTML);
        let total = whole+(fraction*0.01);
        let tax = 0.065;
        let fvalue = total - (total*tax);
        let fvalueWhole = Math.round(fvalue);
        let fvalueFraction = Math.round(((fvalue % 1) * 100));
        pricesClass[i].innerHTML = pricesClass[i].innerHTML = `${fvalueWhole}`;
        pricesClassDecimal[i].innerHTML = pricesClassDecimal[i].innerHTML = `${fvalueFraction}`;
    }
}

