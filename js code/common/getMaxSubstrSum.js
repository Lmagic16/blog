//求子序列的最大和
function getMaxSubstrSum(arr){
	if(arr.length === 0){
		return;
	}
	var tempSum = arr[0];
	var maxSum = arr[0];
	for(var i=1;i<arr.length;i++){
		var tempNumber = arr[i];
		if(tempNumber < 0){
            maxSum = tempSum > maxSum ? tempSum : maxSum; //在还没加上负数之前，保住当前的最大值
			if(tempSum < 0){
				tempSum = tempNumber;
			}else{
				tempSum += tempNumber;
			}
		}else{
			if(tempSum < 0){
				tempSum = tempNumber;
			}else{
				tempSum +=tempNumber;
			}
		}
	}
	return maxSum = tempSum > maxSum ? tempSum : maxSum;
}
var a = [-23,17,-7,11,-2,1,89,-34];
console.log(getMaxSubstrSum(a));