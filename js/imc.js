function imc(){
    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);
    let imc = weight / (height**2);
    
    document.getElementById("demo-imc").innerHTML = `O IMC calculado é ${imc.toFixed(2)}`
}