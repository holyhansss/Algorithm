
function solution(word, letter){
    let answer=0;
    
    for(let x of word){
        if(x === letter) answer++;
    }
    return answer;   
}


let word = 'COMPUTERPROGRAMMING';
let letter = 'R';
console.log(solution(word, letter));