function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length > 0){
    name = deliLine[0]
    deliLine.shift()
    return `Currently serving ${name}.`

} else {
  return "There is nobody waiting to be served!"
}
  }


function currentLine(deliLine){
let k = deliLine.length
  for(let i = 0; k > 0; i--) {
    let newLine = []
    newLine.push(`${(i+1)}. ${deliLine[i]}`)
    k--
      
  }
   return `The line is currently: ` + newLine
}
