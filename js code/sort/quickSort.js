//快速排序，每轮以序列起始值key为参考值，将序列分为左右两边，左边都比key小，右边都比key大，然后递归排序
//chrome的Array.prototype.sort采用快速排序实现
function quickSort(arr){
	console.time("快速排序消耗时间");
	function sort(start,end){
		if(start >= end ) return; 
		var key = arr[start];
		var i = start+1;
		var j = end;
		while(true){
			while(arr[i] <=key){
				i++;
				if(i>=end)break;
			}
			while(arr[j] >= key){
				j--;
				if(j<=start)break;
			}
			if(i<j){
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}else{
				break;
			}
		}
		if(j > start){
			var t = arr[start];
			arr[start] = arr[j];
			arr[j] = t;
			sort(start,j-1);
			sort(j+1,end);
		}
	}
	sort(0,arr.length-1);
	console.timeEnd("快速排序消耗时间");
	return arr;
}

var a = [12,12,13,5,2,8,3,0,12,9,10];
console.log(quickSort(a));
