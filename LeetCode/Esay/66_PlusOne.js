/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    for(let i=digits.length-1;i>=0;i--){
        if(digits[i] !== 9){
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if(i===0){
            digits.unshift(1);
            return digits
        }
    }
    console.log(digits)
    return digits;
};

plusOne([1,2,3]);