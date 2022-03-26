
function solution(word){

    word = word.toLowerCase();
    for(let i=0;i<word.length/2; i++){
        if(word[i] === word[word.length-1-i])
        continue;
        else return 'NO';
    }
    // method 사용법
    // if(word.split('').reverse().join('') !== word) return 'NO'
    // 

    return 'YES';
}

word = 'goloG'
console.log(solution(word));
