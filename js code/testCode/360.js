//360第一题，粉笔和白色粉笔最大收益
function getMaxBenefit(n,m,a,b,c,d,x,y,z){
	var maxBenefit = 0;
	var begin = Math.floor(n/a < m/b ? n/a : m/b);
	for(var i=0;i<=begin;i++){
		var k1 = i;
		var k2 = Math.floor((m-b*i)/c);
		var k3 = Math.floor((n-a*i)/d);
		var tempBenefit = k1*x+k2*y+k3*z;
		maxBenefit = tempBenefit > maxBenefit ? tempBenefit : maxBenefit;
	}
	return maxBenefit;
}
console.log(getMaxBenefit(5,5,1,2,3,3,2,1,3));
console.log(getMaxBenefit(5,15,1,2,3,6,2,1,3));


//360第二题，跳水运动员预测
function getNumberBetterThanMe(arr){
	var max = arr[0];
	var tempArr = [];
	var resArr = [];
	for(var i=0;i<arr.length;i++){
		var val = arr[i];
		if((val >= max) || i === 0){
			resArr.push(0);
		}else{
			var temp = 0;
			for(var j=val+1;j<=max;j++){
				if(tempArr[j]){
					temp += tempArr[j];
				}
			}
			resArr.push(temp);
		}
		if(!tempArr[val]){
			tempArr[val] = 1;
		}else{
			tempArr[val] += tempArr[val];
		}
		max = val>max?val:max;
	}
	return resArr;
}
var a = [4,5,1,3,2];
console.log(getNumberBetterThanMe(a));


//360第三题，简单数列
var n = parseInt(read_line());
var a = parseInt(read_line().split(" "));
var m = parseInt(read_line());
var b = parseInt(read_line().split(" "));
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