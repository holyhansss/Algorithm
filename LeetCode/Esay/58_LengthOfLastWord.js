/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {

    let length = 0;
    s = s.trim();

    for(let i=s.length;i>0;i--){
        if(s[i-1] === ' '){
            break;
        }
        length++;
    }
    console.log(length);
    return length;
};

lengthOfLastWord('a')