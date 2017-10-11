function arraySet(arr){
	var resArr = [];
	var obj = {};
	for(var i=0;i<arr.length;i++){
		if(!obj[arr[i]]){
			obj[arr[i]] = 1;
			resArr.push(arr[i]);
		}else if(resArr.indexOf(arr[i]) === -1){//为了解决在对象属性中1会被转换为"1"
			resArr.push(arr[i]);
		}
	}
	return resArr;
}
var a = [1,2,3,5,4,5,3,"lala","lala","1"];
console.log(arraySet(a));
