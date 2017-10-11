//调用栈溢出，溢出时的最大调用次数
var count = 0;
function recursion(){
	count++;
	recursion();
}
try{
	recursion();
}catch(ex){
	console.log("count="+count,"error:"+ex);
}
