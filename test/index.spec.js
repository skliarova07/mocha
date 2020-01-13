
const {expect} = require('chai');

const {sum, mult, isAdult, isOddNumber, isEvenNumber, sortArrayUp, isPalindrome} = require('../index.js');

describe('function sum', () => {

  it('should function sum equals 10', () => {
    //assert.equal(sum(2,4), 6);
    expect(sum(2, 4)).to.equal(6);
  });

  it('shoult function not equals 0', () => {
    //assert.notEqual(sum(2,4), 0);
    expect(sum(2, 4)).to.not.equal(0);
  });
});

//describe('function mult',() => {
//}
it('should function mult works correct', () => {
  //assert.equal(mult(2,4), 8);
  expect(mult(2, 4)).to.equal(8);

});

describe('function isAdult', () => {
  it('should return true if age is 21 and older', () => {
    //assert.deepEqual(isAdult(21), true)
    expect(isAdult(21)).true;
  });
  it('shhould return false if age is under 21', () => {
    //assert.notEqual(isAdult(12), true);
    expect(isAdult(12)).to.not.equal(true);
  });
  it('should return wrong input message if age is equal to 0', () => {
    //assert.equal(isAdult(0), 'You entered the wrong number')
    expect(isAdult(0)).to.equal('You entered the wrong number');
  });
  it('should return wrong input message if age is below 0', () => {
    //assert.equal(isAdult(-5), 'You entered the wrong number')
    expect(isAdult(-5)).to.equal('You entered the wrong number');

  });
});

describe('function isOddNumber', () => {
  it('should return true if number is odd', () => {
    //assert.equal(isOddNumber(9), true);
    expect(isOddNumber(9)).true;
  });
  it('should return false if the number is not odd', () => {
    //assert.notEqual(isOddNumber(4), true)
    expect(isOddNumber(4)).to.not.equal(true);
  });
  it('should return null if x equals 0', () => {
    //assert.equal(isOddNumber(null), false)
    expect(isOddNumber(null)).false;
  });
  it('should return undefined if not a number', () => {
    //assert.equal(isOddNumber('str'), undefined)
    expect(isOddNumber('str')).undefined;
  });
  it('should return undefined if empty', () => {
    //assert.equal(isOddNumber(), undefined)
    expect(isOddNumber()).undefined;
  });
});

describe('function isEvenNumber', () => {
  it('should return true if number is even', () => {
    //assert.equal(isEvenNumber(6), true)
    expect(isEvenNumber(6)).true;
  });
  it('should return false if the number is not even', () => {
    //assert.notEqual(isEvenNumber(7), true)
    expect(isEvenNumber(7)).to.not.equal(true);
  });
  it('should return null if x equals 0', () => {
    //assert.equal(isEvenNumber(null), false)
    expect(isEvenNumber(null)).false;
  });
  it('should return undefined if not a number', () => {
    //assert.equal(isEvenNumber('str'), undefined)
    expect(isEvenNumber('str')).undefined;
  });
  it('should return undefined if empty', () => {
    //assert.equal(isEvenNumber(), undefined)
    expect(isEvenNumber()).undefined;
  });
});

describe('function sortArrayUp', () => {

  it('should  function correctly sort the array', () => {
    //assert.deepStrictEqual(sortArrayUp([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4])
    expect(sortArrayUp([0, 1, 2, 3, 4])).to.deep.equal([0, 1, 2, 3, 4]);
  });

  it('should  function return empty the array', () => {
    //assert.deepStrictEqual(sortArrayUp([]), [])
    expect(sortArrayUp([])).to.deep.equal([]);
  });

  it('should  function  sort ascending the array', () => {
    //assert.deepStrictEqual(sortArrayUp([1, 3, 0, 4, 2]), [0, 1, 2, 3, 4])
    expect(sortArrayUp([1, 3, 0, 4, 2])).to.deep.equal([0, 1, 2, 3, 4]);
  });

});

describe('function isPalindrome', () => {
  it('should return true if a string is a palindrome', () => {
    //assert.equal(isPalindrome('madam'), true)
    expect(isPalindrome('madam')).true;
  });
  it('should return false if a string is not a palindrome', () => {
    //assert.notEqual(isPalindrome('madam'), false)
    expect(isPalindrome('madam')).to.not.equal(false);
  });
  it('should return the message "It is not a string!" if type of input is a number', () => {
    //assert.equal(isPalindrome(123), "It is not a string!")
    expect(isPalindrome(123)).to.equal('It is not a string!');
  });
  it('should return true for an empty string', () => {
    //assert.equal(isPalindrome(''), true)
    expect(isPalindrome('')).true;
  });
});