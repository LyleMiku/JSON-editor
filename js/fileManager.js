function createEmpty(){

editor.setValue("{\n\n}");

setStatus("新建JSON");

}

document.getElementById("upload")
.addEventListener("change",function(e){

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(){

editor.setValue(reader.result);

setStatus("已加载: "+file.name);

};

reader.readAsText(file);

});

function downloadJSON(){

const blob = new Blob(
[editor.getValue()],
{type:"application/json"}
);

const a = document.createElement("a");

a.href = URL.createObjectURL(blob);

a.download = "data.json";

a.click();

setStatus("已下载JSON");

}

async function saveFile(){

try{

const handle = await window.showSaveFilePicker({

suggestedName:"data.json"

});

const writable = await handle.createWritable();

await writable.write(editor.getValue());

await writable.close();

setStatus("文件已保存");

}catch(e){

setStatus("保存取消");

}

}
