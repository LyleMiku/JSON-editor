function formatJSON(){

try{

const obj = JSON.parse(editor.getValue());

const formatted = JSON.stringify(obj,null,4);

editor.setValue(formatted);

setStatus("JSON已格式化");

}
catch(e){

setStatus("格式化失败");

}

}
