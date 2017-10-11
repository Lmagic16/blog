/*function longSameSeqLength(a,b){
	if((typeof a != "number") || (typeof b != "number")){
		return -1;
	}
	var arr_a = a.toString().split("");
	var arr_b = b.toString().split("");
	if(arr_a.length === arr_b.length){
		var max = 0;
		for(var i=0;i<arr_a.length;i++){
			var count = 0;
			for(var j=i;j<arr_a.length;j++){
				if(arr_a[j] === arr_b[j]){
					count++;
				}else{
					break;
				}
			}
			if(count > max){
				max = count;
			}
			i = i + count;
		}
		return max;
	}else{
		return -1;
	}
}*/

/*function longSameSeqLength(a,b){
	if((typeof a != "number") || (typeof b != "number")){
		return -1;
	}
	var arr_a = a.toString().split("");
	var arr_b = b.toString().split("");
	if(arr_a.length === arr_b.length){
		var max = 0;
		var count = 0;
		for(var i=0;i<arr_a.length;i++){
			if(arr_a[i] === arr_b[i]){
				count++;
			}else{
				i = i + count;
				count = 0;
			}
			if(count > max){
				max = count;
			}
		}
		return max;
	}else{
		return -1;
	}
}*/

/*function anony(str) {
    let re = /(.+?)(?=@)@([a-zA-Z0-9\-]+)(?=\.)(.*)(?!@)/;
    let match = re.exec(str);
    console.log(RegExp.$1,RegExp.$2,RegExp.$3);
    if(RegExp.$1.length < 3) return;
    if(RegExp.$2.length > 119) return;
    if(RegExp.$1.length === 3) return '***@' + RegExp.$2 + '.' + RegExp.$3;
    let prefix = RegExp.$1;
    return prefix.slice(0, prefix.length - 3) + '***@' + RegExp.$2 + '.' + RegExp.$3;
}*/


console.log(anony("123@hu.123@we.i.com"));