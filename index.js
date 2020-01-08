function sum (a, b){
    return a + b;
};

function mult(a, b){
    return a*b;
};

function isAdult(x) {
    if (x > 21 || x === 21) return true;
    if (x < 0 || x === 0) return "You entered the wrong number"
    else return false;
};

function isOddNumber(num){
    if( num === null) return false;
    if(typeof num !== 'number') return undefined;
    if(num % 2 !== 0) {
        return true;
    } else {
        return false;
    };
};

function isEvenNumber(num){
    if( num === null) return false;
    if(typeof num !== 'number') return undefined;
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

function  sortArrayUp(arr){
    arr.sort(function  (a, b){
        return (a - b);
    });
    return arr
};

function isPalindrome(string){
    let newStr = '';
    for(let i = string.length - 1; i >= 0; i--){
        newStr = newStr + string[i];
    }
    if (typeof string !== 'string') return "It is not a string!";
    if(newStr === string) return true;
    else return false;
};

module.exports = {sum, mult, isAdult, isOddNumber, isEvenNumber, sortArrayUp, isPalindrome};
