function createAluno() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    const regex = /^[a-zA-Z]+$/

    if(nome.length==0 || idade.length==0){
        alert("Preencha ambos os campos!")
    } else if(regex.test(nome)==false){
        alert("Apenas são aceitos caracteres alfabéticos no campo nome")
    }else{
        const aluno = {
            nome,
            idade
        }
        document.getElementById("demo-obj").innerHTML = `aluno = ${JSON.stringify(aluno)}`
    }



}



