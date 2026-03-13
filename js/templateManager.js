async function loadTemplate(name){

if(!name) return

const res = await fetch("templates/"+name+".json")

const text = await res.text()

editor.setValue(text)

setStatus("模板加载: "+name)

buildKeyIndex()

}
