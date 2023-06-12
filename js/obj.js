function createAluno() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    const aluno = {
        nome,
        idade
    }

    document.getElementById("demo-obj").innerHTML = `aluno = ${JSON.stringify(aluno)}`


}



