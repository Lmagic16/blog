/*function stringFragmentation(str) {
    var len = str.length;
    if(len === 0) return 0;
    if(len === 1) return 1;
    var temp = 0,local = 1,count = 0,current = str[0];
    for(var i = 1; i <= len; i++) {
        if(str[i] === current) {
            local++;
        }else{
            temp += local;
            current = str[i];
            local = 1;
            count++;
        }
    }
    var res = (temp/count).toFixed(2);
    return res;
}
var input = readline();
print(stringFragmentation(input));*/

var input = readline();
var array = [];
var count = 0;
function legalBracket(str) {
    var arr = str.split('');
    if(arr.length === 0) {
        count++;
        return;
    }
    if(!isValid(arr.join(''))) return;
    arr.shift();
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === ')') {
            arr.splice(i, 1);
            legalBracket(arr.join(''));
            arr.splice(i, 0, ')');
        }
    }
    arr.splice(0, 0, '(');
}
function isValid(str) {
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            array.push(str[i]);
        }else {
            if(array.length === 0) {
                return false;
            }else {
                array.pop();
            }
        }
    }
    if(array.length !== 0) {
        while(array.length !== 0) array.pop();
        return false;
    }
    return true;
}
legalBracket(input);
print(count)
