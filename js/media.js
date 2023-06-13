function media(){
    
    let input = document.getElementById('media').value;
    let numbers = input.split(",").map(Number);

    if(input.length==0||numbers==0){
        alert("Preencha o campo vazio!")
    } else{
        let sum = numbers.reduce( (sum,num) => sum+num , 0)
        let ma = sum/numbers.length
        
        document.getElementById("demo").innerHTML =
        `A média do conjunto {${numbers}} é ${ma.toFixed(2)}`    
    }
    
}



