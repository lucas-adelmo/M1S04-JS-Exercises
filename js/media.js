function media(){
    
    let input = document.getElementById('media').value;
    let numbers = input.split(",").map(Number);

    const regex = /^[\d.,]+$/;

    if(input.length==0||numbers==0){
        alert("Preencha o campo vazio!")
    } else if (regex.test(input)==false){
        alert("O formato do campo deve ser de números separados por vírgulas!")    
    
    }else{
        let sum = numbers.reduce( (sum,num) => sum+num , 0)
        let ma = sum/numbers.length
        
        document.getElementById("demo").innerHTML =
        `A média do conjunto {${numbers}} é ${ma.toFixed(2)}`    
    }
    
}



