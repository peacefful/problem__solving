export function alphabetPosition(text) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  let numbersWord = ''
  for (let iterator of text.toLowerCase()) {
    if (Object.keys(alphabet).includes(iterator)) {
      let variable = (iterator = alphabet[iterator])
      numbersWord += ` ${variable}`
    }
  }
  return numbersWord.trimStart()
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

function arrayDiff(a, b) {
  return a.filter((item) => item !== b[0] && item !== b[1])
}

console.log(arrayDiff([1, 2, 3], [1, 2]))

function count(string) {
  let obj = {}
  if (string) {
    for (let index = 0; index < string.length; index++) {
      let count = 0
      for (const iterator of string) {
        if (string[index] == iterator) {
          count += 1
        }
      }
      obj[string[index]] = count
    }
  } else {
    return {}
  }
  return obj
}

console.log(count('aca'))

function toCamelCase(str) {
  if (str.includes('_')) {
    const [firstWord, ...arg] = str.split('_')

    let newArr = arg
      .map((item) => {
        return item.slice(0, 1).toUpperCase() + item.slice(1)
      })
      .join('')

    return firstWord + newArr
  } else if (str.includes('-')) {
    const [firstWord, ...arg] = str.split('-')

    let newArr = arg
      .map((item) => {
        return item.slice(0, 1).toUpperCase() + item.slice(1)
      })
      .join('')

    return firstWord + newArr
  } else {
    return ''
  }
}

console.log(toCamelCase('A-B-C'))

function likes(names) {
  if (names.length == 1) {
    return `${names[0]} likes this`
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length == 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  } else {
    return 'no one likes this'
  }
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

function scramble(str1, str2) {
  let variables = [...str1]
  let count = 0

  for (let iterator of str2) {
    if (variables.includes(iterator)) {
      count += 1
    }
  }
  if (count !== str2.length) {
    return false
  } else {
    return true
  }
}

console.log(scramble('katas', 'steak'))

function goodVsEvil(good, evil) {
  let objGood = {}
  let objEvil = {}
  let goodSum = 0
  let evilSum = 0

  let arrGood = ['Hobbits', 'Men', 'Elves', 'Dwarves', 'Eagles', 'Wizards']
  let arrEvil = ['Orcs', 'Men', 'Wargs', 'Goblins', 'Uruk Hai', 'Trolls', 'Wizards']

  for (let index = 0; index < arrGood.length; index++) {
    const property = arrGood[index]
    const value = good[index]

    objGood[property] = value
  }

  for (const key in objGood) {
    goodSum += objGood[key]
  }

  for (let index = 0; index < arrEvil.length; index++) {
    const property = arrEvil[index]
    const value = evil[index]

    objEvil[property] = value
  }

  for (const key in objEvil) {
    evilSum += objEvil[key]
  }

  if (goodSum > evilSum) {
    return 'Battle Result: Good triumphs over Evil'
  } else if (goodSum < evilSum) {
    ('Battle Result: Evil eradicates all trace of Good')
  } else {
    return 'Battle Result: No victor on this battle field'
  }
}

console.log(goodVsEvil([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]))
