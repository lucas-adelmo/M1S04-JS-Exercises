function imc(){
    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);

    const regex = /^\d+(\.\d+)?$/

    if(height==0 || weight==0){
        alert("Preencha ambos os campos!")
    }else if (regex.test(height)==false || regex.test(weight)==false){
        alert("Não use vírgulas. Utilize o ponto (.) como separador decimal!")
    }else{
        let imc = weight / (height**2);
        document.getElementById("demo-imc").innerHTML = `O IMC calculado é ${imc.toFixed(2)}`
    }

    
}