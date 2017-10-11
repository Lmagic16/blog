//添加最少括号使得传入的非合法括号序列成为合法的
function completeBracketsMatch(str){
	var left = 0;
	var right = 0;
	for(var i=0;i<str.length;i++){
		if(str[i] === "["){
			left++;
		}else if(str[i] === "]"){
			if(left > 0){
				left--;
			}else{
				right++;
			}
		}
	}
	for(var i=0;i<left;i++){
		str = str + "]";
	}
	for(var i=0;i<right;i++){
		str = "[" + str;
	}
	return str;
}
console.log(completeBracketsMatch("]["));
/*var line = readline();
var arr = [];
var res = 0;
bracketSequence(line);
print(res);*/
