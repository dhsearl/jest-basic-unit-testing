const leapYear = require('../modules/leapYear')

test('Year 2000 should return true', ()=>{
    // assertions
    expect(leapYear(2000)).toBe(true);
})
test('Year 1999 should return false', ()=>{
    // assertions
    expect(leapYear(1999)).toBe(false);
})
test('Year 1980 should return true', ()=>{
    // assertions
    expect(leapYear(1980)).toBe(true);
})
test('Year 1900 should return false', ()=>{
    // assertions
    expect(leapYear(1900)).toBe(false);
})