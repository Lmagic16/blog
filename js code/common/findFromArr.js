function findFromArr(arr,num){
	var xlen = arr.length;
	var ylen = y = arr[0].length-1;
	var x = 0;
	while(x<xlen && y>=0){
		if(arr[x][y] > num){
			y--;
		}else if(arr[x][y] < num){
			x++;
		}else if(arr[x][y] === num){
			return true;
		}
	}
	return false;
}
var arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
console.log(findFromArr(arr,19));

function Find(target, array)
{
    if(array.length === 0 && array[0].length === 0){
    	return false;
    }
    var xlen = array.length;
	var ylen = y = array[0].length-1;
	var x = 0;
	while(x<xlen && y>=0){
		if(array[x][y] > target){
			y--;
		}else if(array[x][y] < target){
			x++;
		}else if(array[x][y] === target){
			return true;
		}
	}
	return false;
}