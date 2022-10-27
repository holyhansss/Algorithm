
function solution(arrLength, K, arr){
    let answer=0;
    let temp = new Set();

    // arr = arr.sort((a, b) => (b-a));

    for(let i=0; i<arrLength; i++){
        for(let j=i+1;j<arrLength; j++){
            for(let l=j+1; l<arrLength; l++){
                temp.add(arr[i]+arr[j]+arr[l]);
            }
        }
    }
    temp = Array.from(temp);
    temp = temp.sort((a, b) => (b-a));

    answer = temp[K-1];
    return answer;
}

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
const arrLength = arr.length
const K = 3;
console.log(solution(arrLength, K, arr));
