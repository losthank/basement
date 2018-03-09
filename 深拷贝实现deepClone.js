//递归
//实际是因为值复制不存在引用类型指针问题，故为深拷贝，故复制基本类型值
var a = {m:[1,2],n:{k:5}},b={};
function deepClone(obj,newObj){
for(var i in obj){
	if(typeof obj[i] === 'object'){
		newObj[i] = (obj[i].constructor===Array)?[]:{};
		arguments.callee(obj[i],newObj[i]);
	}else{
		newObj[i] = obj[i];
	}
}
console.log(newObj);//输出两次a的属性值后才输出a对象
return newObj;
}
deepClone(a,b);
//JSON实现
//转换完后constructor指向Object，原来的构造函数自动被忽略。
//b = JSON.parse(JSON.stringify(a));