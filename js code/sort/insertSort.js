//插入排序，从最开始逐步构建有序序列，将下一个值插入到当前有序序列中。
function insertSort(arr){
	console.time('插入排序耗时');
	var res = [arr[0]];
	for(var i=1;i<arr.length;i++){
		var temp = arr[i];   // 取出当前要插入的值
		for(var j=0;j<res.length;j++){
			if(temp<res[j]){  //若该值小于这个序列，则将该值插入
				res.splice(j,0,temp);
				break;   //这里必须跳出
			}else if(j === res.length-1){ //若该值走到了序列末尾，则直接插入
				res.push(temp);
				break;
			}else if((temp>=res[j]) && (temp<=res[j+1]) ){
				res.splice(j+1,0,temp);
				break;
			}
		}
	}
	console.timeEnd('插入排序耗时');
	return res;
}
//改进版本插入排序,不采用额外数组空间
function insertSortImprove(arr){
	console.time('改进版本插入排序耗时');
	var len = arr.length;
	for(var i=1;i<len;i++){
		j = i;
		temp = arr[i];
		while((j>0) && (arr[j-1] > temp)){
			arr[j] = arr[j-1];
			j--;
		}
		arr[j] = temp;
	}
	console.timeEnd('改进版本插入排序耗时');
	return arr;
}
var a = [12,12,13,5,2,8,3,0,12,9];
console.log(insertSort(a));
console.log(insertSortImprove(a));
