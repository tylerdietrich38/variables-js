function main() {
  let numberOfCupsOfCoffee
  numberOfCupsOfCoffee = 1

  let fullName
  fullName = 'Tyler Dietrich'

  console.log(
    `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cup of coffee per day!`
  )

  const aboutMe = {
    fullName: 'Tyler Dietrich',
    luckyNumber: 38,
    favoriteMovies: ['Galdiator', 'Moneyball', 'Top Gun'],
  }

  let userName = window.prompt('What is your name?')

  console.log(`Hello ${userName}!`)

  let firstOperand = parseFloat(window.prompt('Please give a number'))
  console.log(firstOperand)
  let secondOperand = parseFloat(window.prompt('Please give a number'))
  console.log(secondOperand)

  let sum = firstOperand + secondOperand
  console.log(`If you add ${firstOperand} and ${secondOperand} you get ${sum}`)

  let difference = secondOperand - firstOperand
  console.log(
    `If you subtract ${secondOperand} and ${firstOperand} you get ${difference}`
  )

  let product = firstOperand * secondOperand
  console.log(
    `If you multiply ${firstOperand} and ${secondOperand} you get ${product}`
  )

  let quotient = firstOperand / secondOperand
  console.log(
    `If you divide ${firstOperand} and ${secondOperand} you get ${quotient}`
  )

  let remainder = firstOperand % secondOperand
  console.log(
    `You can find the remainder when you divide ${firstOperand} and ${secondOperand} you get ${remainder}`
  )

  let numbers
  numbers = [
    31552,
    19195,
    30671,
    11810,
    32745,
    17836,
    48218,
    28015,
    36610,
    28391,
    40328,
    48182,
    47522,
    36465,
    33210,
    11148,
    11710,
    21566,
    27760,
    10181,
    13116,
    36803,
    49751,
    19846,
    45036,
    15128,
    26090,
    46292,
    29450,
    29009,
    29669,
    18689,
    48614,
    27926,
    21153,
    24208,
    34144,
    41660,
    22941,
    12379,
    25311,
    23016,
    29602,
    49645,
    33256,
    42331,
    13468,
    40150,
    22303,
    20259,
    42315,
    22715,
    44141,
    18237,
    29853,
    39860,
    41680,
    24271,
    32180,
    47971,
    38192,
    28212,
    43219,
    45374,
    48991,
    18874,
    14696,
    17002,
    28294,
    28614,
    14773,
    10774,
    14704,
    10703,
    24297,
    44353,
    22530,
    27028,
    25330,
    20635,
    32306,
    28651,
    16256,
    14451,
    16011,
    19980,
    16570,
    20462,
    10950,
    36953,
    30473,
    44019,
    48503,
    33502,
    31076,
    30030,
    25595,
    44101,
    46892,
    19312,
  ]

  let smallest = numbers[0]
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] <= smallest) smallest = numbers[i]
  }
  console.log(smallest)

  // const min = Math.min(...numbers)
  // console.log(min)

  let largest = numbers[0]
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= largest) largest = numbers[i]
  }
  console.log(largest)

  // const max = Math.max(...numbers)
  // console.log(max)
  let arraySum = 0
  for (var i = 0; i < numbers.length; i++) {
    arraySum += numbers[i]
  }
  console.log(arraySum)

  average = arraySum / numbers.length
  console.log(average)

  const stats = {
    smallest: smallest,
    largest: largest,
    sum: sum,
    average: average,
  }
}

document.addEventListener('DOMContentLoaded', main)
