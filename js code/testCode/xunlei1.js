String.prototype.getSuffixList = function(suffix){
	var str = this;
    var arr = str.split(" ");
    var res = {};
    var len = suffix.length;
    for(var i = 0 ; i < arr.length ; i++){
    	var temp = arr[i];
    	if(temp.length > len){
    		if(temp.slice(-len) === suffix){
    			if(!res[temp]){
    				res[temp] = 1;
    			}else{
    				res[temp]++;
    			}
    		}
    	}
    }
    var resArr = [];
    var indexArr = [];
    for(key in res){
    	resArr.push(key);
    	indexArr.push(res[key]);
    }
    function bubbleSort(indexArr,arr){
    	var result = "";
		var len = indexArr.length;
		for(var i=0;i<len;i++){
			for(var j=0;j<len-1-i;j++){ 
				if(indexArr[j] < indexArr[j+1]){
					var temp = indexArr[j];
					indexArr[j] = indexArr[j+1];
					indexArr[j+1] = temp;
					var temp2 = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp2;
					/*[arr[j],arr[j+1]] = [arr[j+1],arr[j]];*/
				}
			}
		}
		for(var i=0;i<arr.length;i++){
			result +=arr[i]+"="+indexArr[i]+",";
		}
		return result.slice(0,-1);
	}
    return bubbleSort(indexArr,resArr);
};
var a = "be careful sdfful asdful sa sad careful";
console.log(a.getSuffixList("ful"));