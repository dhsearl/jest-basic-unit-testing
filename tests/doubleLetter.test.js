const doubleLetter = require('../modules/doubleLetter')
test(`Input of "afgg" should return 3`, ()=>{
    expect(doubleLetter("afgg")).toBe(3)
})
test(`Input of "Okay Boomer" should return 7`, ()=>{
    expect(doubleLetter("Okay Boomer")).toBe(7)
})
test(`Input of "Quarterback Aaron Rogers" should return 14`, ()=>{
    expect(doubleLetter("Quarterback Aaron Rogers")).toBe(13)
})
test(`Input of "The quick brown fox jumped over the lazy dog" should return -1`, ()=>{
    expect(doubleLetter("The quick brown fox jumped over the lazy dog")).toBe(-1)
})