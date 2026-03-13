function highlightKey(name){

const text=editor.getValue();

const matches=[];

const regex=new RegExp('"'+name+'"',"g");

let m;

while((m=regex.exec(text))!==null){

matches.push({

range:new monaco.Range(
editor.getModel().getPositionAt(m.index).lineNumber,
1,
editor.getModel().getPositionAt(m.index).lineNumber,
10
),

options:{
inlineClassName:"highlight"
}

});

}

editor.deltaDecorations([],matches);

}
