/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    revertedNumber = 0;

    if(x<0 || (x % 10 === 0 && x !== 0)) return false;

    while(x > revertedNumber){
        revertedNumber = parseInt(revertedNumber * 10 + x % 10);
        x = parseInt(x/10); 
    }

    return x === revertedNumber || x === parseInt(revertedNumber/10);
};


isPalindrome(11);
isPalindrome(121);