alert("Vamos calcular!")
let numberOne = prompt("Insira o primeiro número:")
let numberTwo = prompt("Insira o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const resultSum = (numberOne + numberTwo)
const resultSubtraction = (numberOne - numberTwo)
const resultMultiplication = (numberOne * numberTwo)
const resultDivision = (numberOne / numberTwo)
const resultRestOfDivision = (numberOne % numberTwo)



alert("Resultado da soma: " + resultSum)
alert("Resultado da subtração: " + resultSubtraction)
alert("Resultado da multiplicação: " + resultMultiplication)
alert("Resultado da  divisão: " + resultDivision)
alert("Resultado do resto da divisão: " + resultRestOfDivision)

let result = resultSum + resultSubtraction + resultMultiplication + resultDivision + resultRestOfDivision

if (result % 2 === 0) {
  alert("Número par!")
} else {
  alert ("Número ímpar!")
}

let = numberOne + numberTwo

if(numberOne === numberTwo) {
  alert("Os números digitados são iguais!")
} else {
  alert("Os números digitados são diferentes!")
}

