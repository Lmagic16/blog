function getKthArr(k){
	var arr = [1];
	while(k--){
		var res = [];
		for(var i=0;i<arr.length;i++){
			var temp = arr[i];
			var tempNum = 0;
			for(var j=i;j<arr.length;j++){
				if(arr[j] === temp){
					tempNum++;
				}else{
					break;
				}
			}
			res.push(tempNum);
			res.push(temp);
		}
		arr = res.slice(0);
	}
	return arr;
}
console.log(getKthArr(1));