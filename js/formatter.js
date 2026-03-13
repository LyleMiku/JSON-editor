function formatJSON(){

try{

const obj = JSON.parse(editor.getValue());

editor.setValue(

JSON.stringify(obj,null,4)

);

setStatus("已格式化");

}catch(e){

setStatus("格式化失败");

}

}
