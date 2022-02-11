/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let prefix = "";
    let shortest = strs[0];
    let a = false;

    for(let i=0; i<strs.length; i++){
        if(strs[i].length < shortest.length)
        shortest = strs[i]; 

        if(strs.length === 1){
            return strs[0];
        }

    }


    for(let i=0; i< shortest.length; i++){
        for(let j=0;j<strs.length-1; j++){
            if(strs[j][i] === strs[j+1][i]){
                a = true;
            }else{
                a = false;
                return prefix;
            }
        }
        if(a){
            prefix+=shortest[i];
        }else{
            continue;
        }
    }
    
    return prefix;

};

longestCommonPrefix(["flower","flow","flight"]);