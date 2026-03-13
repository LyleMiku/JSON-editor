function createEmpty(){

editor.setValue("{\n\n}");

}

document.getElementById("upload").addEventListener("change",function(e){

const file = e.target.files[0];

const reader = new FileReader();

reader.onload = function(){

editor.setValue(reader.result);

};

reader.readAsText(file);

});

function downloadJSON(){

const blob = new Blob(
[editor.getValue()],
{type:"application/json"}
);

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="data.json";

a.click();

}

async function saveFile(){

const handle=await window.showSaveFilePicker({

suggestedName:"data.json"

});

const writable=await handle.createWritable();

await writable.write(editor.getValue());

await writable.close();

}
