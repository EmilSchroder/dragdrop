function startdrag(e){
    e.dataTransfer.setData("text", e.target.id)
}

function allowDrop(e){
    e.preventDefault()
}

function doTheDrop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(data))
}