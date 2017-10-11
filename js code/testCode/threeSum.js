var threeSum = function(arr){
	var len = arr.length;
	var res = [];
	arr.sort(function(a,b){
		return a-b;
	})
	var set = {};//存放已加入数组，防止重复
	for(var i=0;i<len;i++){
		var a = arr[i];
		if(a > 0)break;
		for(var j=i+1;j<len;j++){
			var b = arr[j];
			if(a+b > 0)break;
			for(var k=j+1;k<len;k++){
				var c = arr[k];
				if(a+b+c > 0)break;
				if(a+b+c === 0){
					var temparr = [a,b,c];
					if(!set[a+','+b+','+c]){
						res.push(temparr);
						set[a+','+b+','+c] = 1;
						break;
					}
				}
			}
		}
	}
	return res;
}
var a = [-1,0,1,2,-1,-4];
console.log(threeSum(a));
/*function threeSumProve(arr){
	var len = arr.length;
	var hash = {};
	var res = [];
	arr.sort(function(a,b){
		return a-b;
	})
	for(var i=0;i<len;i++){
		var item = arr[i];
		if(!hash[item]){
			hash[item] = 1;
		}else{
			hash[item]++;
		}
	}
	var hashSet = {};//存放已加入的数组
	for(var i=0;i<len;i++){
		var a = arr[i];
		if(a > 0)break;
		for(var j=i+1;j<len;j++){
			var b = arr[j];
			var c = 0 - a - b;
			if(c < b)break;
			var tempArr = [a,b,c];
			if(hash[c] >= 1){
				if(!hashSet[a+','+b+','+c]){
					res.push(tempArr);
					hashSet[a+','+b+','+c] = 1;
				}
			}
		}
	}
	return res;
}*/