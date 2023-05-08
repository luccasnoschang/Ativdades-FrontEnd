// Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.

let nome, idade, media, maiorIdade, i, somaIdades, maiorNome

somaIdades = 0
maiorIdade = 0
i = 1

while (i <= 5) {
    nome = prompt("Digite seu nome: ")
    idade = Number(prompt("Digite sua idade: "))
    somaIdades = somaIdades + idade 
    i++

    if (maiorIdade < idade){
        maiorIdade = idade
        maiorNome = nome
    }
}

media = somaIdades / 5

alert(`A media das idades é de: ${media}`)
alert(`A maior idade é de ${maiorNome} com ${maiorIdade} anos.`)


