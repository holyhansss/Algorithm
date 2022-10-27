
function solution(stundentNum, budget, arr){

    let answer=0;
    let count=0;
    let temp;

    let sortedArr = arr.sort((a,b) => (a[0]+a[1])-(b[0]+b[1]));

    for(let i=0; i<stundentNum; i++){
        let money = budget-(arr[i][0]/2)+arr[i][1];
        let cnt = 1;
        for(let j=0; j<stundentNum; j++){
            if(i === j) continue;
            money = money - sortedArr[j][0] - sortedArr[j][1];
            if(money <= 0) break;
            cnt++;
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}

const arr = [[6,6], [2,2], [4,3], [4,5], [10, 3]];
console.log(solution(5, 28, arr));
