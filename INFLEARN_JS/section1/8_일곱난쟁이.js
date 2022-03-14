
function solution(arr){
    let answer = arr;
    let total = arr.reduce((a, b)=> a+b, 0);

    //for(let x of arr) total += x;

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i !== j && total-arr[i]-arr[j] === 100){
                answer.splice(j, 1)
                answer.splice(i, 1)
                // arr.map((x)=> {
                //     if(x !== arr[i] && x !== arr[j]){
                //         answer.push(x);
                //     }
                // })
                return answer;
            }
        }
    }
}


let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]
console.log(solution(arr));