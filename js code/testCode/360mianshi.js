/*var reg = /^1\d{3,19}$/i;
var a = 12345678901;
var reg1 = /a+/i;
var b = "cb";*/
var reg =/^[a-zA-Z0-9]+[\w-*\.*]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
var reg1 = /^\w+(\.\w+)*@(\w)+((\.\w+)+)$/;
var a = "101@qq.com"
console.log(reg1.test(a));

var re = /^1\d{10}$/g;
var phone = "13882266804";
console.log(phone.match(re));