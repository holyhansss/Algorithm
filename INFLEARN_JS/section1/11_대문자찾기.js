
function solution(word){
    let answer=0;
    
    for(let x of word){
        if(x === x.toUpperCase()) answer++;
    }
    
    return answer;
    // x.charCodeAt() => Ascci 코드   
}


let word = 'COMPUTERPROGRAMMING';
console.log(solution(word));