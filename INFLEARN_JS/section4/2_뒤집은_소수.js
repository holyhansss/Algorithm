
function solution(arr){

    let answer = [];
    let cnt=0;
    for(let i=0; i<arr.length; i++){
        let inStr = arr[i].toString()
        let reverse = inStr.split("").reverse().join("");
        reverse = parseInt(reverse);

        for(let j=1; j<reverse; j++){
            if(reverse%j === 0){
                cnt++;
            }
        }
        if(cnt === 1){
            answer.push(reverse);
        }
        cnt=0;
    }

    return answer;
}

const arr = [9, 32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
