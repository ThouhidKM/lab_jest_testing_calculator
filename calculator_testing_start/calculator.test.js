const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('We can add numbers', () => {
    expected = 13;
    actual = sum(6, 7);
    expect(actual).toBe(expected);
  });


  test('We can add negative numbers', () => {
    expected = -40;
    actual = sum(-30, -10);
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {

  test('We can subtract positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  })

  test('We can subtract negative numbers', () => {
    expected = 20;
    actual = subtract(-30, -50);
    expect(actual).toBe(expected);
  })
});

describe('multiply', () => {

  test('We can multiply positive numbers', () => {
    expected = 20;
    actual = multiply(10, 2);
    expect(actual).toBe(expected);
  })

  test('We can multiply negative numbers', () => {
    expected = 35;
    actual = multiply(-5, -7);
    expect(actual).toBe(expected);
  })
});

describe('divide', () => {
  

  test('We can divide positive numbers', () => {
    expected = 41;
    actual = divide(123, 3);
    expect(actual).toBe(expected);
  })

  test('We can divide negative numbers', () => {
    expected = 50;
    actual = divide(-200, -4);
    expect(actual).toBe(expected);
  })

});

describe('modulus', () => {

test('We can find the modulus of two numbers', () => {
    expected = 0;
    actual = modulus(10,2);
    expect(actual).toBe(expected);
  })

  test('We can find the modulus of two numbers', () => {
    expected = 15;
    actual = multiply(75, 30);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {

  test('We can check whether a number is even', () => {
    expected = true;
    actual = even(14);
    expect(actual).toBe(expected);
  })
  test('We can check whether a number is even', () => {
    expected = true;
    actual = even(2);
    expect(actual).toBe(expected);
  })

});


describe('odd', () => {

  test('We can check whether a number is odd', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  })
  test('We can check whether a number is odd', () => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(expected);
  })

});