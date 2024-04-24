let celsius=document.getElementById("celsius");
let fahrenheit=document.getElementById("fahrenheit");
let kalkulasi=document.getElementById("kalkulasi");

celsius.oninput = function(){
    let f = (parseFloat(celsius.value)*9)/5+32;
    fahrenheit.value=parseFloat(f.toFixed(2));

    let k = parseFloat(celsius.value)+273.15;
    kalkulasi.value=parseFloat(k.toFixed(2));
}


fahrenheit.oninput = function(){
    let c = ((parseFloat(fahrenheit.value)-32)*5)/9;
    fahrenheit.value=parseFloat(f.toFixed(2));

    let k = ((parseFloat(fahrenheit.value)-32)*5)/9 + 273.15;
    kalkulasi.value=parseFloat(k.toFixed(2));
}



kalkulasi.oninput = function(){
    let f = ((parseFloat(kalkulasi.value)-273.15)*9)/5+32;
    fahrenheit.value=parseFloat(f.toFixed(2));

    let c = parseFloat(kalkulasi.value)-273.15;
    celsius.value=parseFloat(k.toFixed(2));
}