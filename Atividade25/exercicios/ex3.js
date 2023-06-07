var readline = require('readline-sync')

var n1 = readline.questionFloat("Informe um numero: ")
var n2 = readline.questionFloat("Informe outro numero: ")
console.log("Infome a operacao que deseja realizar: ")
var operacao = readline.question("1 - soma\n2 - subtracao\n3 - multiplicacao\n4 - divisao\n")
var resultado = 0

switch (operacao) {
    case "1":
      resultado = n1 + n2
      break
    case "2":
      resultado = n1 - n2
      break
    case "3":
      resultado = n1 * n2
      break
    case "4":
      resultado = n1 / n2
      break
    default:
      console.log("Operação inválida!")
      break
  }

console.log(`O resultado é ${resultado}`)