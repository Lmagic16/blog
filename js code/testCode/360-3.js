/*var n = parseInt(read_line());
var a = parseInt(read_line().split(" "));
var m = parseInt(read_line());
var b = parseInt(read_line().split(" "));
*/
var n = 4;
var a = [1,3,7,9];
var m = 3;
var b = [2,10,12];
console.log(simpleSequence(a, b, n, m))
function simpleSequence(a, b, n, m) {
    if(m === 0 && n === 0) return 0;
    if(n === 0) {
        return b.reduce((prev, next) => prev + next);
    } else if (m === 0) {
        return a.reduce((prev, next) => prev + next);
    }
    let sumA = a.reduce((prev, next) => prev + next);
    let sumB = b.reduce((prev, next) => prev + next);

    let ret = Math.abs(sumA - sumB)
    if(ret === 0) {
        return 0;
         } else {
        for(let k = 0; k < 2; k++) {
            if(exchange(a, b, ret)) {
                ret = Math.abs(a.reduce((prev, next) => prev + next) - b.reduce((prev, next) => prev + next));
                break;
            }
        }
    }
    return ret;
}
function exchange(arr1, arr2, ret) {
    let bool = false;
    let tmp = ret / 2;
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(a[i] - b[j] === tmp) {
                [a[i], b[j]] = [b[j], a[i]];
                bool = true;
            }
        }
    }
    return bool;
}