function takeANumber (array, Name) {
  array.push(Name)
  return `Welcome, ${Name}. You are number ${array.length} in line.`;
}


let i = 0

function haveANumber (array) {
  array.push(++i)
  return i
}

function resetCounter(){
  i = 0
}


function nowServing (array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`;
    
  } else {
    return "There is nobody waiting to be served!"
  }
  }
  function currentLine (array) {
    let x = []
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
      x.push(`${i+1}. ${array[i]}`)
      } return `The line is currently: ${x.join(', ')}`
    } else {
      return "The line is currently empty."
    }
  }