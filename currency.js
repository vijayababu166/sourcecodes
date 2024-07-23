script.js
document.getElementById("convertBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    console.log(fromCurrency);
    console.log(toCurrency);

    var camount=amount;

    if(fromCurrency!=toCurrency){
    if (fromCurrency == "INR")
        camount = amount;
    else if (fromCurrency == "USD")
        camount = amount * 82.64;        //1usd=82.64inr
    else if (fromCurrency == "EUR")
        camount = amount * 90.32;        //1eur=90.32inr
    else if (fromCurrency == "YEN")
        camount = amount * 0.57;        //1yen=0.566555inr
    else if (fromCurrency == "DIN")
        camount = amount * 268.35;        //1din=268.35inr
    else if (fromCurrency == "WON")
        camount = amount * 0.062;        //1won=0.062inr

    if (toCurrency == "INR")
        camount = camount
    else if (toCurrency == "USD")
        camount *= 0.012
    else if (toCurrency == "EUR")
        camount *= 0.011
    else if (toCurrency == "YEN")
        camount *= 1.77
    else if (toCurrency == "DIN")
        camount *= 0.0037
    else if (toCurrency == "WON")
        camount *= 16.03
    }

    document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${camount} ${toCurrency}`;
});

