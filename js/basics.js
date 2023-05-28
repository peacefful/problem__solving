function isIsogram(str) {
  let newArr = str
    .toLowerCase()
    .split('')
    .filter((item, index, arr) => {
      return arr.indexOf(item) !== index
    })
  return newArr.length > 0 ? false : true
}

const arr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep']

function removeEveryOther(arr) {
  return arr.filter((item, index) => index % 2 === 0)
}

function greet(name, owner) {
  return name == owner ? 'Hello boss' : 'Hello guest'
}

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('') ? true : false
}

function countSheep(num) {
  let sheep = ''
  if (num > 0) {
    for (let index = 0; index < num; index++) {
      sheep += `${index + 1} sheep...`
    }
    return sheep
  } else {
    return ''
  }
}

console.log(countSheep(3))

function number(arr) {
  let number = 1
  if (arr.length) {
    return arr.map((item) => `${number++}: ${item}`)
  } else {
    return arr
  }
}

console.log(number(['a', 'b', 'c']))

function XO(str) {
  let countX = 0
  let countO = 0
  for (const iterator of str.toLowerCase()) {
    if (iterator == 'x') {
      countX += 1
    }
  }
  for (const iterator of str.toLowerCase()) {
    if (iterator == 'o') {
      countO += 1
    }
  }

  return countX == countO ? true : false
}

console.log(XO('Tests'))

function doubleChar(str) {
  let newWord = ''

  for (const iterator of str) {
    newWord += iterator + iterator
  }
  return newWord
}

console.log(doubleChar('Hello'))

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}
