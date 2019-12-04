const dnaSequence = function(sequence){
    let returnSequence = ''
    for (let base of sequence){
        if ('CTAG'.includes(base)) returnSequence += base
    }
    return returnSequence;
}


module.exports = dnaSequence;