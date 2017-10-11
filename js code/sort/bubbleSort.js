//基础版冒泡排序，每轮从序列头开始，两两比较，将较大的值放到最后。
function bubbleSort(arr){
	var len = arr.length;
	for(var i=0;i<len;i++){
		for(var j=0;j<len-1-i;j++){ 
			if(arr[j] > arr[j+1]){ // 两两比较，将最大的冒泡到最后去
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}
//改进版冒泡排序
function bubbleSort1(arr){
	console.time('冒泡排序耗时');
	var len = arr.length;
	var pos = len;  //设置pos标志量记录每轮最后交换的位置
	for(var i=0;i<len;i++){
		var tempos;
		for(var j=0;j<pos;j++){ // 每轮只需比较到pos位置即可
			if(arr[j] > arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				tempos = j; 
			}
		}
		pos = tempos;
	}
	console.timeEnd('冒泡排序耗时');
	return arr;
}
var a = [12,12,13,5,2,8,3,0,12,9,10];
console.log(bubbleSort1(a));
