var readline = require('readline-sync')

var sexo = readline.question("Informe o sexo (M) Mascolino e (F) Feminino: ")

switch(sexo){
    case "M":
        console.log("Sexo válido!")
        break
    case "F":
        console.log("Sexo válido!")
        break
    default:
        console.log("Sexo inválido!")
        break
}

