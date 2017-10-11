var a = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];
console.log(printArrInCircle(a));

function printArrInCircle(arr){
	var rows = arr.length;
	var cols = arr[0].length;
	var flagArr = [],
		resArr = [];
	var directionTimes = 0,
		outputNum = 0,
		tempX = 0,
		tempY = 0;
	for(var i=0;i<rows;i++){
		flagArr.push([]);
	}
	while(outputNum < rows*cols){
		var direct = directionTimes % 4;
		if(direct === 0){ //往东
			var i = tempX;
			for(var j=tempY;j<cols;j++){
				if(flagArr[i][j] !== true){
					resArr.push(arr[i][j]);
					outputNum++;
					flagArr[i][j] = true;
				}else{
					break;
				}
			}
			tempX++;
			tempY = j - 1;
		}else if(direct === 1){ //往南
			var j = tempY;
			for(var i=tempX;i<rows;i++){
				if(flagArr[i][j] !== true){
					resArr.push(arr[i][j]);
					outputNum++;
					flagArr[i][j] = true;
				}else{
					break;
				}
			}
			tempX = i - 1;
			tempY--;
		}else if(direct === 2){ //往西
			var i = tempX;
			for(var j=tempY;j>=0;j--){
				if(flagArr[i][j] !== true){
					resArr.push(arr[i][j]);
					outputNum++;
					flagArr[i][j] = true;
				}else{
					break;
				}
			}
			tempX--;
			tempY = j + 1;
		}else if(direct === 3){ //往北
			var j = tempY;
			for(var i=tempX;i>=0;i--){
				if(flagArr[i][j] !== true){
					resArr.push(arr[i][j]);
					outputNum++;
					flagArr[i][j] = true;
				}else{
					break;
				}
			}
			tempX = i + 1;
			tempY++;
		}
		directionTimes++;
	}
	return resArr;
}