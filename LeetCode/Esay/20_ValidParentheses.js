/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const temp = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    const stack = [];
    const keys = Object.keys(temp);
    for (let i = 0; i< s.length; i++) {
        if(keys.includes(s[i])) {
            stack.push(s[i]);
        }
        else {
            if (temp[stack[stack.length-1]] === s[i]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    };
    return !stack.length;
}

isValid("{(([])([]))}")