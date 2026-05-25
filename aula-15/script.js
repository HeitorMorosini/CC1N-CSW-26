//document.writeln("Hello World!!!");

//window.alert("Hello World again");

document.getElementById("title").
innerHTML = "Hello World, I like JavaScript!!"

var namePrompt = ""//window.prompt("What your name? ");

document.getElementById("name").
innerHTML = "Your name is " + namePrompt;

var resp = true//window.confirm("You like JavaScript?")

if (resp) {
    document.getElementById("resposta").
    innerHTML = "YES! The Student is enjoying JavaScript class"
} else {
    document.getElementById("resposta").
    innerHTML = "NO! The Student doesn't like JavaScript class"
}

function sendName() {
    let nameAnswer = document.getElementById("inputName").value

    const answer = document.getElementById("containerAnswer");

    answer.innerHTML = "The name wrote is " + nameAnswer;
    answer.style.display = "flex"
    answer.style.height = "150px"
    answer.style.backgroundImage = "linear-gradient(to right, blue, indigo, violet)";
    answer.style.fontSize = "20px"
    answer.style.justifyContent = "Center"
    answer.style.alignItems = "Center"
    answer.style.color = "#ffffff"
    answer.style.border = " 2px solid #ff0000"
}