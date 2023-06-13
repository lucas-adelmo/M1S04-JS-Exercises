function createAluno() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    if(nome.length==0 || idade==0){
        alert("Preencha ambos os campos!")
    } else{
        const aluno = {
            nome,
            idade
        }
        
        document.getElementById("demo-obj").innerHTML = `aluno = ${JSON.stringify(aluno)}`
    }



}



