
function solution(word){
    
    word = word.toLowerCase();
    let wordWw =''
    for(let i=0;i<word.length; i++){
        if(word[i] >= 'a' && 'z' >= word[i]){
            wordWw = wordWw + word[i];

        }
    }
    for(let i=0; i<(wordWw.length/2); i++){
        if(wordWw[i] == wordWw[wordWw.length-1-i]) continue;
        else return false
    }

    // word = word.toLowercase().replace(/[^a-z]/g, ''); 정규식 사용
    // https://ninearies.tistory.com/177 -> [JavaScript] replace(치환) 및 정규식
    return true;
}

word = 'found7, time: study; Yduts; emit, 7Dnuof'
console.log(solution(word));
