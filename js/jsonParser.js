function buildKeyIndex(){

let text = editor.getValue()

let regex = /\"(.*?)\"\s*:/g

keyRanges = []

let match

while((match = regex.exec(text)) !== null){

let start = match.index
let end = start + match[0].length

let startPos = editor.getModel().getPositionAt(start)
let endPos = editor.getModel().getPositionAt(end)

keyRanges.push({
start:startPos,
end:endPos
})

}

}
