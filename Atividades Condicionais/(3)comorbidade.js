let idade, comorbidade

idade = prompt("Qual a sua idade?")
comorbidade = prompt("Você possui comorbidade? (S/N)")

if (idade >= 60 || comorbidade == "S"){
    alert("Pode se vacinar!")
}

else { 
    alert("Não pode se vacinar!")
}