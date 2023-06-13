function concatenacao(){

    let primeiroNome = document.getElementById("primeiroNome").value
    let ultimoNome = document.getElementById("ultimoNome").value

    


    if (primeiroNome.length == 0 || ultimoNome.length == 0) {
        alert("Preencha ambos os campos!");
    } else {
        document.getElementById("demo-concat").innerHTML = "Olá, avaliador " + primeiroNome + " " + ultimoNome + "! Qualquer dúvida sobre o desenvolvimento dos cards nesta página entre em contato! Abraço."
    }

}