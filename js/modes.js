let editMode = "all"

let keyRanges = []

function setEditMode(mode){

editMode = mode

if(mode === "readonly"){

editor.updateOptions({
readOnly:true
})

setStatus("只读模式")

return

}

editor.updateOptions({
readOnly:false
})

buildKeyIndex()

setStatus("编辑模式: "+mode)

}

editor.onDidChangeModelContent(function(event){

if(editMode !== "value") return

let position = editor.getPosition()

for(let r of keyRanges){

if(
position.lineNumber >= r.start.lineNumber &&
position.lineNumber <= r.end.lineNumber
){

editor.trigger("","undo",null)

setStatus("键名不可修改")

return

}

}

})
