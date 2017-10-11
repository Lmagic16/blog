/*var line = readline().split("");
function dataReverseProcess(arr){
	var n = arr.length;
	var arrReverseStr;
	var number = "0123456789";
	if(number.indexOf(arr[0]) === -1){
		n = n-1;
		arr.shift();
		var arrCopy = arr.slice();
		arr[0] = "-" + arr[0];
		arrReverse = arrCopy.reverse();
		arrReverseStr = "-" + arrReverse.join("");
	}else{
		var arrCopy = arr.slice();
		arrReverseStr = arrCopy.reverse().join("");
	}
	print(n);
	print(arr.join(" "));
	print(arrReverseStr);
}
dataReverseProcess(line);*/



/*var str = readline();
function integerStringSort(str){
	var n = readline();
	var arr = str.split(' ');
	var map = {};
    if(str.length === 0)return -1;
	arr.forEach( val => {
	    var newVal = '';
	    if (val.length <= 3) {
	        newVal = parseInt(val);
	    } else {
	        newVal = parseInt(val.slice(-3));
	    }
	    map[newVal] = val;
	})

	var compArr = [];
	var keys = Object.keys(map);
	for(var i = 0, key; key = keys[i++];) {
	    compArr.push(parseInt(key));
	}
	compArr.sort((a, b) => a - b);
	var ret = [];
	for(var i = 0; i < compArr.length; i++) {
	    var key = compArr[i];
	    ret.push(parseInt(map[key]));
	}
	return ret[n - 1];
}
print(integerStringSort(str));*/

function isOverlapIP(ipAstart,ipAend,ipBstart,ipBend){
	var res = "No Overlap IP";
	if(compareIP(ipBstart,ipAstart) && compareIP(ipAstart,ipBend)){
		res = "Overlap IP";
	}
	if(compareIP(ipAstart,ipBstart) && compareIP(ipBstart,ipAend)){
		res = "Overlap IP";
	}
	return res;
}
function compareIP(a,b){
	var ipA = a.split(".");
	var ipB = b.split(".");
	var flag = true;
	for(var i=0;i<ipA.length;i++){
		if(parseInt(ipA[i]) > parseInt(ipB[i])){
			flag = false;
			break;
		}else if(parseInt(ipA[i]) < parseInt(ipB[i])){
			flag = true;
			break;
		}
	}
	return flag;
}
console.log(isOverlapIP("1.1.1.1","255.255.255.255","2.2.2.2","3.3.3.3"));
console.log(compareIP("192.168.1.1","255.1.1.1"));

/*var line1 = readline();
var line2 = readline();
var line3 = readline();
var line4 = readline();

function isOverlapIP(ipAstart,ipAend,ipBstart,ipBend){
	var res = "No Overlap IP";
	if(compareIP(ipBstart,ipAstart) && compareIP(ipAstart,ipBend)){
		res = "Overlap IP";
	}
	if(compareIP(ipAstart,ipBstart) && compareIP(ipBstart,ipAend)){
		res = "Overlap IP";
	}
	return res;
}
function compareIP(a,b){
	var ipA = a.split(".");
	var ipB = b.split(".");
	var flag = true;
	for(var i=0;i<ipA.length;i++){
		if(parseInt(ipA[i]) > parseInt(ipB[i])){
			flag = false;
			break;
		}else if(parseInt(ipA[i]) < parseInt(ipB[i])){
			flag = true;
			break;
		}
	}
	return flag;
}

print(isOverlapIP(line1,line2,line3,line4));*/

