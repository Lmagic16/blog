//惰性单例——单次执行函数
var inertiaSingleton = function(){
	var obj;
	return function(){
		if(!obj){
			obj = bindClick();
			return obj;
		}
		return obj;
	}
}
function bindClick(){
	console.log("开始渲染列表");
	document.getElementById("div1").onclick = function(){
		alert("click");
	}
	return true;
}
var bindSingleton = inertiaSingleton();
var a = bindSingleton();