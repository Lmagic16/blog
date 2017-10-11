function link() {
    var text = "这里会给出一段随机文本，可能包含一些链接，比如https://www.baidu.com，或者 www.baidu.com?from=onlineExam，如果出现链接文本，请给该链接文本加上链接标签，用户点击后能直接在新窗口中打开该链接。"
    var reg = /((?:http:\/\/|https:\/\/|www\.)(?:[a-zA-Z0-9.\-]+(?:\?[a-zA-Z0-9&=]*)?))/g;
    var newText = text.replace(reg,function(word){
    	if(word.slice(0,3) === "www"){
    		return '<a href="http://' + word + '" target="_blank">' + word + '</a>';
    	}else{
    		return '<a href="' + word + '" target="_blank">' + word + '</a>';
    	}
    });
    console.log(newText);
}
/*link();*/
/*var text = "可能包含一些链接，比如https://www.baidu.com，或者 www.baidu.com?from=onlineExam，如果"
var reg = /(?:http:\/\/|https:\/\/|www\.)[a-zA-Z0-9.\-]+(?:\?[a-zA-Z0-9&=]*)?/g;
console.log(text.match(reg));
console.log(text.replace(reg, '$&' + "haha"));*/


var re = /(?:http:\/\/|https:\/\/|www\.)[0-9a-zA-Z.-]+(?:\?[a-zA-Z0-9&=]*)?/g;
var str = "可能包含一些链接，比如https://www.baidu.com，或者 www.baidu.com?from=onlineExam，如果baidu.com和www.baidu.com?from=onlineExam&sdjkf=9是的";
console.log(str.replace(re, "haha"+'$&'));
console.log(str.search(re));
console.log(re.test(str));