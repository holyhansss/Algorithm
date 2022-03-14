
function solution(a, b){
    let answer = '';
    
    for(let i=0; i<a.length; i++){
        if(a[i]-b[i] === -1){
            answer += 'B';
        }else if(a[i]-b[i] === 1){
            answer += 'A';
        }else if(a[i]-b[i] === -2) answer += 'A';
        else if(a[i]-b[i] === 2) answer += 'B';
        else answer+='D';
        answer+=' ';
    }
    

    return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a,b));
