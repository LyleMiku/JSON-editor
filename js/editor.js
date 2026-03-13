let editor;

require.config({
paths:{
vs:'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs'
}
});

require(['vs/editor/editor.main'],function(){

editor = monaco.editor.create(
document.getElementById("editor"),
{

value:"{\n\n}",

language:"json",

theme:"vs-dark",

automaticLayout:true,

autoClosingBrackets:"always",

autoClosingQuotes:"always",

folding:true

});

});
