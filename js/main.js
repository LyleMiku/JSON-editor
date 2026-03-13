function setMode(mode){

if(mode==="readonly"){

editor.updateOptions({readOnly:true});

return;

}

editor.updateOptions({readOnly:false});

}
