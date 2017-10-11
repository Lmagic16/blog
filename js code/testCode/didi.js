a = [-23,17,-7,11,-2,1,-34]
console.log(getKthNumber(a,2));

/*滴滴第二题
var line1 = readline().split(" ");
var k = parseInt(readline());
var res = getKthNumber(line1,k);
print(res);
function getKthNumber(arr,k){
	arr.sort(function(a,b){
		return parseInt(b)-parseInt(a);
	})
	return arr[k-1];
}*/


/*滴滴第一题
while(line=readline()){
    var lines = line.split(" ");
    var res = continuousSubstrMaxSum(lines);
    print(res);
}

function continuousSubstrMaxSum(arr){
    if(arr.length === 0){
		return -1;
	}
	var tempSum = parseInt(arr[0]);
	var resSum = parseInt(arr[0]);
	for(var i=1;i<arr.length;i++){
		var tempNumber = parseInt(arr[i]);
		if(tempNumber < 0){
			resSum = tempSum > resSum ? tempSum : resSum;
			if(tempSum < 0){
				tempSum = tempNumber;
			}else{
				tempSum += tempNumber;
			}
		}else {
			if(tempSum > 0){
				tempSum += tempNumber;
			}else{
				tempSum = tempNumber;
			}
		}
	}
	return resSum > tempSum ? resSum : tempSum;
}*/