function filter_list(arr) {
  return arr.filter((item) => typeof item == 'number')
}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))

function smash(words) {
  let offer = ''
  for (const iterator of words) {
    offer += ` ${iterator}`
  }
  return offer.trimStart()
}

console.log(smash(['Hello', 'world']))

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

let calc = new SmallestIntegerFinder()

console.log(calc.findSmallestInt([34, 15, 88, 2]))

function getCount(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0

  for (const iterator of word) {
    if (vowels.includes(iterator)) {
      count += 1
    }
  }

  return count
}

console.log(getCount('abracadabra'))

function opposite(number) {
  if (number < 0) {
    return Math.abs(number)
  } else {
    return number * -1
  }
}

console.log(opposite(5))

const binaryArrayToNumber = (numbers) => {
  let indexes = []
  let result = []

  for (let index = 0; index < numbers.length; index++) {
    indexes.push(index)
  }

  let doubleIndexes = indexes.reverse().map((item) => 2 ** item)

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * doubleIndexes[i])
  }

  return result.reduce((acc, sum) => {
    return acc + sum
  }, 0)
}

console.log(binaryArrayToNumber([1, 0, 1, 1]))

function solution(str, ending) {
  return str.endsWith(ending)
}

function countSheeps(arrayOfSheep) {
  let count = 0

  for (const iterator of arrayOfSheep) {
    if (iterator === true) {
      count += 1
    }
  }

  return count
}

let sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true
]

console.log(countSheeps(sheeps))

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n * m
  }
}
