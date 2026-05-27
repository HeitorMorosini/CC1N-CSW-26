function calcular() {
    let dataAno = Number(document.getElementById("inputAno").value);

    const ano = document.getElementById("containerAno");

    var idade = new Date().getFullYear() - dataAno;
    ano.innerHTML = "Você tem " + idade + " anos!";
}

function calcular2() {
    const Hoje = new Date().getFullYear();
    let dia = Number(document.getElementById("inputDia2").value);
    let mes = Number(document.getElementById("inputMes2").value);
    let ano = Number(document.getElementById("inputAno2").value);
    var Nasc = new Date(`${ano}` + `${mes}` + `${dia}`).getFullYear();
    let Idade = Hoje - Nasc;
    document.getElementById("containerAno2").innerHTML = "Você tem " + Idade + " Anos"
    
}