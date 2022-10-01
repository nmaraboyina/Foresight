
if (document.title.indexOf("Amazon") != -1) {
    //console.log(document.getElementsByClassName("a-price-whole")[0].innerHTML);
    //document.getElementsByClassName("a-price-whole")[0].innerHTML = "69";
    const pricesClass = document.getElementsByClassName("a-price-whole");
    const pricesClassDecimal = document.getElementsByClassName("a-price-fraction");
    for (let i = 0; i < pricesClass.length; i++) {
        let whole = parseInt(pricesClass[i].innerHTML);
        let fraction = parseInt(pricesClassDecimal[i].innerHTML);
        let total = whole+(fraction*0.01)
        let tax = 0.065;
        let fvalue = total + (total*tax);
        let fvalueWhole = Math.round(fvalue);
        let fvalueFraction = Math.round(((fvalue % 1) * 100));
        pricesClass[i].innerHTML = pricesClass[i].innerHTML = `${fvalueWhole}`;
        pricesClassDecimal[i].innerHTML = pricesClassDecimal[i].innerHTML = `${fvalueFraction}`;
    }
}
