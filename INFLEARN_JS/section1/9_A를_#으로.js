
function solution(word){
    let answer = word.replace(/A/g, '#');
    return answer;   
}


let word = 'BANANA'
console.log(solution(word));