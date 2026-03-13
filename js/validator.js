function validateJSON(){

try{

JSON.parse(editor.getValue());

setStatus("JSON合法");

}catch(e){

setStatus("JSON错误: "+e.message);

}

}
