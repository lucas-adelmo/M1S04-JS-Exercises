function mediaPonderada(){
    
    let inputNotas = document.getElementById('nota').value;
    let inputPesos = document.getElementById('peso').value;

    const regex = /^[\d.,]+$/;

    if(inputNotas.length == 0 || inputPesos.length ==0){
        alert("Preencha ambos os campos!")
    } else if (regex.test(inputNotas)==false || regex.test(inputPesos)==false){
        alert("O formato dos campos deve ser de números separados por vírgulas!")    
    
    }else{
        
        let notas = inputNotas.split(",").map(Number);
        let pesos = inputPesos.split(",").map(Number);
        let den = pesos.reduce((sum,value)=>sum+=value , 0)
        
        let sum=0;
        for(let i=0; i<notas.length; i++){
            sum += notas[i]*pesos[i]
        }

        let mp = sum/den;

        document.getElementById("demo-ponderada").innerHTML =
        `A média ponderada do conjunto é ${mp.toFixed(2)}`    

    }
    
    
}

