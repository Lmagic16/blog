//选择排序，每轮选择序列中最小的值将其和序列头的值交换。
function selectionSort(arr){
	console.time('选择排序耗时');
	var len = arr.length;
	for(var i=0;i<len;i++){
		var min = arr[i];
		var pos = i;
		for(var j=i;j<len;j++){ 
			if(arr[j] < min){ // 找出当前序列最小值所在位置
				min = arr[j];
				pos = j;
			}
		}
		var temp = arr[i];//将本轮最小值序列起始值交换
		arr[i] = arr[pos];
		arr[pos] = temp;
	}
	console.timeEnd('选择排序耗时');
	return arr;
}
var a = [12,12,13,5,2,8,3,0,12,9,10];
console.log(selectionSort(a));
