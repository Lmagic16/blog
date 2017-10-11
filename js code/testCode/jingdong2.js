//括号匹配方案
//当需要对输入进行分情况讨论时，如果以某种情况进行搜索，会有多个分岔的情况，造成复杂性，不妨换种角度去讨论，让情况的分类减少。
//例如在 横竖都数值增长的矩阵 中查找是否有某个数值，可以从矩阵右上角进行查找比较
//所以该题可以等比转换为 从第一个右括号开始查找，每个右括号只能匹配其之前的任意左括号
/*function bracketSequence(str){
	var res = 1;
	var temp = 0;
	for(var i=0;i<str.length;i++){
		if(str[i] === "("){
			temp++;
		}else if(str[i] === ")"){
			res = res*temp;
			temp--;
		}
	}
	return res;
}*/
/*var line = readline();
var arr = [];
var res = 0;
bracketSequence(line);
print(res);*/
function isValid(str) {
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            arr.push(str[i]);
        }else {
            if(arr.length === 0) {
                return false;
            }else {
                arr.pop();
            }
        }
    }
    if(arr.length !== 0) {
        while(arr.length !== 0) arr.pop();
        return false;
    }
    return true;
}
console.log(bracketSequence("()((()))(())(())"));

