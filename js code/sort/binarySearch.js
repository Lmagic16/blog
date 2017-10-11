//二分查找，即将排好序的数组一半一半进行查找
function binarySearch(arr,value){
	var arr = quickSort(arr);
	var len = arr.length;
	var temp = Math.floor(len/2);
	var division = temp;
	console.log(arr);
	while((temp >= 0) && (temp < len)){
		if(value < arr[temp]){
			division = Math.floor(division/2);
			temp = temp - division;
			if(division === 0){
				temp--;
			}
		}else if(value > arr[temp]){
			division = Math.floor(division/2);
			temp = temp + division;
			if(division === 0){
				temp++;
			}
		}else if(value === arr[temp]){
			return true;
		}
	}
	return false;
}
function quickSort(arr){
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
	return arr;
}

var a = [12,12,13,5,2,8,3,0,12,9,10];
console.time("二分查找消耗时间");
console.log(binarySearch(a,14)); //这里时间还包括了快速排序的时间
console.timeEnd("二分查找消耗时间");
console.time("indexOf查找消耗时间");
console.log(a.indexOf(0));
console.timeEnd("indexOf查找消耗时间");
