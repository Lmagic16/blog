//第三题
var str = readline();
var num = readline();

function integerStringSort(str,n){
	var arr = str.split(' ');
	var arrThree = [];
	var len = arr.length;
	for(var i=0;i<len;i++){
		if(arr[i].length > 3){
			var temp = parseInt(arr[i].slice(-3));
			arrThree.push(temp);
		}else{
			arrThree.push(parseInt(arr[i]));
		}
	}
	var pos = len; 
	for(var i=0;i<len;i++){
		var tempos;
		for(var j=0;j<pos;j++){ 
			if(arrThree[j] > arrThree[j+1]){
				[arrThree[j],arrThree[j+1]] = [arrThree[j+1],arrThree[j]];
				[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
				tempos = j;
			}
		}
		pos = tempos;
	}
	return arr[n-1];
}

print(integerStringSort(str,num));
var a = "1223 22 3232 2016";
console.log(integerStringSort(a,3));


/*var str = readline();
var num = readline();

function integerStringSort(str,num){
	var arr = str.split(' ');
	var lastThree = [];
	for(var i = 0; i < arr.length; i++) {
	    if(arr[i].length < 3) {
	        lastThree.push(arr[i]);
	    } else {
	        lastThree.push(arr[i].slice(-3));
	    }
	}
	for(var n = lastThree.length; n > 0; n--) {
	    for(var i = 0; i < n - 1; i++) {
	        if(parseInt(lastThree[i]) > parseInt(lastThree[i + 1])) {
	            [lastThree[i], lastThree[i + 1]] = [lastThree[i + 1], lastThree[i]];
	            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
	        }
	    }
	}
	return arr[num - 1];
}
print(integerStringSort(str,num));*/