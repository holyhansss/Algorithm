
function solution(answers){
    let score = 0;
    let scoreStack = 0;
    
    for(let x of answers){
        if(x == 1) scoreStack++;
        else scoreStack = 0;

        console.log(scoreStack)
        score += scoreStack;
    }

    return score;
}

let answers = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
console.log(solution(answers));
