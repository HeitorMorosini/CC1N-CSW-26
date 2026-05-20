document.writeln("<h2>Olá Mundo!</h2>");
//window.alert("Olá Mundo!");
document.getElementById("title").innerHTML = "Olá Mundo!";


function Cumprimentar() {
    let nome = document.getElementById('nameInput').value;
    document.getElementById("post").innerHTML = `Olá ${nome}! Bem-vindo a aula de JS`
     
}