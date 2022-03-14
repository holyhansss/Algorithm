
function solution(answers){
    let rank = [] ; 
    
    for(let i=0;i<answers.length; i++) rank.push(1);

    for(let i=0;i<answers.length; i++){
        for(let j=0;j<answers.length; j++){
            if(answers[i]<=answers[j] && j !== i) rank[i]++;
        }
    }

    return rank;
}

let answers = [87, 87, 92, 100, 76]
console.log(solution(answers));
