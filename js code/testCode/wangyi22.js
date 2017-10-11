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
function isValid(str) {
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            tempArr.push(str[i]);
        }else {
            if(tempArr.length === 0) {
                return false;
            }else {
                tempArr.pop();
            }
        }
    }
    if(tempArr.length !== 0) {
        while(tempArr.length !== 0) tempArr.pop();
        return false;
    }
    return true;
}
function lcs(s1, s2) {  
    var m = s1.length, n = s2.length;  
    var dp = new Array(m + 1);  
    for (var i = 0; i < dp.length; i++) {  
        dp[i] = new Array(n + 1);  
        dp[i][0] = 0;  
    }  
    for (var j = 1; j < dp[0].length; j++) {  
        dp[0][j] = 0;  
    }  
    for (i = 1; i < dp.length; i++) {  
        var c1 = s1.charAt(i - 1);  
        for (j = 1; j < dp[0].length; j++) {  
            var c2 = s2.charAt(j - 1);  
            if (c1 === c2) {  
                dp[i][j] = dp[i - 1][j - 1] + 1;  
            } else {  
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);  
            }  
        }  
    }  
    return dp[m][n];  
} 
function getLongestBracketSequence(arr){
	var arrLen = arr.length;
	var inputStr = arr.join("");
	var permutationArr = permutation(arr);
	var res = [];
	var resStr = [];
	var maxIndex = 0;
	for(var i=0;i<permutationArr.length;i++){
		var str = permutationArr[i].join("");
		if(resStr.indexOf(str) === -1){
			if(isValid(str)){
				var longest = lcs(inputStr,str);
				if(maxIndex <= longest && longest !== arrLen){
					if(res[longest] === undefined){
						res[longest] = 1;
					}else{
						res[longest]++;
					}
					maxIndex = longest;
				}
			}
			resStr.push(str);
		}
	}
	var len = res.length;
	return res[len-1];
}

var a = ("(())()").split("");
var tempArr = [];
console.log(getLongestBracketSequence(a));