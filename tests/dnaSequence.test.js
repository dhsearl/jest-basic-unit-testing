const dnaSequence = require('../modules/dnaSequence')

test('String "GTHCT" returns "GTCT"', ()=>{
    expect(dnaSequence("GTHCT")).toBe("GTCT")
})
test('String "GTcCT." returns "GTCT"', ()=>{
    expect(dnaSequence("GTcCT.")).toBe("GTCT")
})
test('Empty String "" returns "" ', ()=>{
    expect(dnaSequence("")).toBe("")
})