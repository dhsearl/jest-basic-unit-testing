const fizzBuzz = require('../modules/fizzBuzz')

test('giving it a number divisible by 3 returns "Fizz"', () =>{
    // assertion is
    expect(fizzBuzz(6)).toBe("Fizz")
})
test('giving it a number divisible by 5 returns "Buzz"', () =>{
    // assertion is
    expect(fizzBuzz(10)).toBe("Buzz")
})
test('giving it a number divisible by 3 & 5 returns "FizzBuzz"', () =>{
    // assertion is
    expect(fizzBuzz(60)).toBe("FizzBuzz")
})
test('giving it a number not divisible by 3 or 5 returns the number', () =>{
    // assertion is
    expect(fizzBuzz(4)).toBe(4)
})
test('giving it a string returns the string', () =>{
    // assertion is
    expect(fizzBuzz('garbage')).toBe('garbage')
})