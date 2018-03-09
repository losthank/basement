function EventTarget(){
    this.handlers = {};
}
/*handlers的结构类似于：{
    type1:
     ["func1","func2"],
    type2:
    ["func1","func2"]}*/
EventTarget.prototype = {
    constructor:EventTarget,
    addHandler:function(type,handler){
      if(typeof this.handlers[type]==='undefined'){
       this.handlers[type] = [];//handlers = {type:[]}
      } 
      this.handlers[type].push(handler);//把对应的事件处理函数扔进去 
    },
    fireHandler:function(event){
        if(!event.target){event.target = this;}//
        if(this.handlers[event.type] instanceof Array){
            var handlers= this.handlers[event.type];//此时handlers指代事件名的各个处理函数
            //event.target表示对象本身
            for(var i=0;i<handlers.length;i++){
                handlers[i](event);
            }
        }
    },
    removeHandler:function(type,handler){
    if(this.handlers[type] instanceof Array){
        var handlers = this.handlers[type];
        for(var i=0;i<handlers.length;i++){
            if(handlers[i]===handler){
                break;
            }
        }
        handlers.splice(i,1);
    }
    }
}
//调用
var eventObj = new EventTarget();
var handler = function(){
    console.log('xx');
}
eventObj.addHandler('xx',handler);
eventObj.fireHandler({type:'xx'});
eventObj.removeHandler('xx',handler);