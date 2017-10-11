/*var line1 = readline().split(" ");
var n = parseInt(line1[0]);
var m = parseInt(line1[1]);
var arr = readline().split(" ");*/

function kolakoski(arr,n){
	var len = arr.length;
	if(len === 0){
		return;
	}
	var resArr = [parseInt(arr[0])];
	var inputTimes = 0;
	var flag = true;
	for(var i=0;resArr.length < n;i++){
		var num = resArr[i];
		var tempNumber = parseInt(arr[inputTimes%len]);
		if(flag === true){
			if(num > 1){
				num = num-1;
				flag = false;
			}else if(num === 1){
				resArr.push(parseInt(arr[1]));
				inputTimes++;
				flag = true;
				continue;
			}
		}
		if(num >= 1){
			for(var j=0;j<num;j++){
				resArr.push(tempNumber);
			}
			flag = false;
			inputTimes++;
		}
	}
	return resArr;
}
var a = [1,2,3,4];
var res = kolakoski(a,30);
console.log(res);
/*for(var i=0;i<res.length;i++){
	console.log(res[i]);
}*/


//第二题
/*function leastPackage(arr) {
    var one = parseInt(arr[0]),
        two = parseInt(arr[1]),
        three = parseInt(arr[2]),
        four = parseInt(arr[3]),
        five = parseInt(arr[4]),
        six = parseInt(arr[5]),
        u = [0, 5, 3, 1],
        x,
        y;

    if(one === 0 && two === 0 && three === 0 && four === 0 && five === 0 && six === 0) return 0;
    var count = 0;

    count += six + five + four + parseInt((three + 3) / 4);
    y = 5 * four + u[three % 4];
    if(two > y) count += parseInt((two - y + 8) / 9);
    x = 36 * count - 36 * six - 25 * five - 16 * four - 9 * three - 4 * two;
    if(one > x) count += parseInt((one - x + 35) / 36);
    return count;
}

while(readline() !== '0 0 0 0 0 0') {
    var arr = readline().split(' ');
    print(leastPackage(arr))
}*/


/*var line1 = readline().split(" ");
var n = parseInt(line1[0]);
var m = parseInt(line1[1]);
var arr = readline().split(" ");

function kolakoski(arr,n){
	var len = arr.length;
	if(len === 0){
		return;
	}
	var resArr = [parseInt(arr[0])];
	var inputTimes = 0;
	for(var i=0;resArr.length < n;i++){
		var num = resArr[i];
		var tempNumber = parseInt(arr[inputTimes%len]);
		if(i === 0){
			num = num-1;
		}
		for(var j=0;j<num;j++){
			resArr.push(tempNumber);
		}
		inputTimes++;
	}
	return resArr;
}
var res = kolakoski(arr,n);
for(var i=0;i<n;i++){
	print(res[i]);
}*/