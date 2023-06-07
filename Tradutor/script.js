let mensagem = document.getElementById("msg")
let inputResultado = document.getElementById("result")
let select = document.getElementById("slct")
 
let timeoutId;

function hideElement() {
  let a = document.getElementById("msg");
  a.style.display = "none";
}

function showElement() {
  let a = document.getElementById("msg");
  a.style.display = "block";
  clearTimeout(timeoutId);
  timeoutId = setTimeout(hideElement, 3500);
}

document.getElementById("butao").addEventListener("click", showElement);

function Traduz(){
    
    switch(select.value){
        case "One":
            inputResultado.value = "Um"
        document.getElementById("msg").innerHTML = "Traduzido! Escolha outra opção."
        break;
        case "Two":
            inputResultado.value = "Dois"
        document.getElementById("msg").innerHTML = "Traduzido! Escolha outra opção."
        break;
        case "Three":
            inputResultado.value = "Três"
        document.getElementById("msg").innerHTML = "Traduzido! Escolha outra opção."
        break;
        case "Four":
        inputResultado.value = "Quatro"
        document.getElementById("msg").innerHTML = "Traduzido! Escolha outra opção."
        break; 
        case "Five":
            inputResultado.value = "Cinco"
        document.getElementById("msg").innerHTML = "Traduzido! Escolha outra opção."
        break; 
        case "":
            inputResultado.value = ""
            document.getElementById("msg").innerHTML = "Nenhuma opção escolhida!"
    }
}

