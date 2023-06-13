function concatenacao(){
    let primeiroNome = document.getElementById("primeiroNome").value
    let ultimoNome = document.getElementById("ultimoNome").value

    document.getElementById("demo-concat").innerHTML = "Olá, avaliador " + primeiroNome + " " + ultimoNome + "! Qualquer dúvida sobre o desenvolvimento dos cards nesta página entre em contato! Abraço."

}