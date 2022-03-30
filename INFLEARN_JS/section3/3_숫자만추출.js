
function solution(word){
    let num = '';

    for(let i=0; i<word.length; i++) {
        if(Number.isInteger(Number(word[i]))){
            num += word[i];
        }
    }
    num = Number(num);
    return num;
}

word = 'g0en2T0s8eSoft';
console.log(solution(word));
