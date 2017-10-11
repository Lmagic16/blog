//全排列

//输入为数组形式
function permutation(arr){
	if(arr.length === 1){
		return [arr];
	}else{
		var result = [];
		for(var i=0;i<arr.length;i++){
			var arrClone = arr.concat();
			var tempLetter = [arrClone[i]];
			arrClone.splice(i,1);
			var tempRes = permutation(arrClone);
			for(var j=0;j<tempRes.length;j++){
				var tempArr = tempLetter.concat(tempRes[j]);
				result.push(tempArr);
			}
		}
		return result;
	}
}


//输入为字符串形式
function Permutation(str){
    var arr = str.split("");
    var temp = permutation(arr);
    var res = [];
    for(var i=0;i<temp.length;i++){
    	res.push(temp[i].join(""));
    }
	function permutation(arr){
        if(arr.length === 1){
            return [arr];
        }else{
            var result = [];
            var set = {};
            for(var i=0;i<arr.length;i++){
                var arrClone = arr.concat();
                var tempLetter = [arrClone[i]];
                arrClone.splice(i,1);
                var tempRes = permutation(arrClone);
                for(var j=0;j<tempRes.length;j++){
                    var tempArr = tempLetter.concat(tempRes[j]);
                    if(set[tempArr.join()] !== true){
                    	result.push(tempArr);
                    	set[tempArr.join()] = true;
                    }
                }
            }
            return result;
        }
    }
    return res;
}

var a = "aa";
console.log(Permutation(a));