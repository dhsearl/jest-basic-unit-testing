const sumPositive = require('../modules/sumPositive')
test('array [0,5,6,-4] should return 11', ()=>{
    // assertions
    expect(sumPositive([0,5,6,-4])).toBe(11);
})
test('array [0,5,"a",-4] should return 5', ()=>{
    // assertions
    expect(sumPositive([0,5,"a",-4])).toBe(5);
})
test('empty array [] should return 0', ()=>{
    // assertions
    expect(sumPositive([])).toBe(0);
})