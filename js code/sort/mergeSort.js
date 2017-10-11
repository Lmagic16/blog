//归并排序，firefox使用归并排序作为Array.prototype.sort的实现;
function mergeSort(arr){
	var len = arr.length;
	if(len <= 1){
		return arr;
	}
	var half = Math.floor(len/2);
	var arrLeft = arr.slice(0,half);
	var arrRight = arr.slice(half);
	res = merge(mergeSort(arrLeft),mergeSort(arrRight));
	return res;
}

function merge(arrLeft,arrRight){
	var res = [],
		iL = 0,
		iR = 0;
	while((iL<arrLeft.length) && (iR<arrRight.length)){ 
		if(arrLeft[iL] < arrRight[iR]){
			res.push(arrLeft[iL]);
			iL++;
		}else{
			res.push(arrRight[iR]);
			iR++;
		}
	}
	while(iL<arrLeft.length){
		res.push(arrLeft[iL]);
		iL++;
	}
	while(iR<arrRight.length){
		res.push(arrRight[iR]);
		iR++;
	}
	return res;
}

var a = [12,12,13,5,2,8,3,0,12,9,10];
console.time("归并排序消耗时间");
console.log(mergeSort(a));
console.timeEnd("归并排序消耗时间");
