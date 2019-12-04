const binaryCheck = require('../modules/binaryCheck')
test(`Input of [1,0,1,1,1,0,0] should return 3`, ()=>{
    expect(binaryCheck([1,0,1,1,1,0,0])).toBe(3)
})
test(`Input of ["1",0,"0",0,0] should return 4`, ()=>{
    expect(binaryCheck(["1",0,"0",0,0])).toBe(4)
})
test(`Input of ["1",0,"3",0,0] should return -1`, ()=>{
    expect(binaryCheck(["1",0,"3",0,0])).toBe(-1)
})