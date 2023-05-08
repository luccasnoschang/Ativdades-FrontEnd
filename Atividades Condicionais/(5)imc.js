let altura, peso, imc

altura = prompt("Digite a sua altura: ")
peso = prompt("Digite o seu peso: ")

imc = peso / (altura * altura)

if (imc < 18) {
    alert("Você está abaixo do peso.")
}

else if (imc > 25) {
    alert("Você está acima do peso.")
}

else{
    alert("Você está na faixa de peso ideal.")
}