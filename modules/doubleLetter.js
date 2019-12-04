const doubleLetter = function(inputString){
    let lastLetter = inputString[0].toLowerCase()

    for (let i = 1; i < inputString.length; i++){
        let thisLetter = inputString[i].toLowerCase()
        if (thisLetter === lastLetter) return i
        lastLetter = thisLetter
    }
    return -1
}
module.exports = doubleLetter;