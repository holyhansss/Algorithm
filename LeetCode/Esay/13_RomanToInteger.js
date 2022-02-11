/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num=0;
    let nextValue;
    const RomanNum = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for(let i=0; i<s.length; i++){
        if(i < s.length-1 && RomanNum[s[i]] < RomanNum[s[i+1]]){
            num-=RomanNum[s[i]]
        }else{
            num+=RomanNum[s[i]]
        }
    }
    return num;
};

romanToInt('MCMXCIV')