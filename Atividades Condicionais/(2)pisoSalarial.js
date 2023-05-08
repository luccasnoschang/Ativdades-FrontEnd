let idade, pisoSalarioMensal, calculo

idade = Number(prompt("Qual a sua idade? "))
pisoSalarioMensal = Number(prompt("Qual é o piso salarial mensal da sua categoria? "))

calculo = idade / 12 

if (calculo < pisoSalarioMensal) {
    alert(`O seu Salario mensal é de ${calculo} \n Você está abaixo do seu piso salarial anual.`)
}

else { 
    alert(`O seu Salario mensal é de ${calculo} \n Você está acima do seu piso salarial anual.`)
}
