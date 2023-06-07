var readline = require('readline-sync')

var nivel = readline.questionInt("Informe o nivel desejado (1, 2 ou 3): ")
var valorHoraAula = 0
var horasTrabalhadas = readline.questionFloat("Informe o numero de horas: ")

switch(nivel){
    case 1:
        valorHoraAula = 12.00
        break
    case 2:
        valorHoraAula = 17.00
        break
    case 3:
        valorHoraAula = 25.00
        break
    default:
        console.log("Nível inválido!")
        break
}

var salario = valorHoraAula * horasTrabalhadas

console.log(`Salario do professor será: R$${salario}`)
