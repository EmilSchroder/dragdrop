
let count = 0;

function startdrag(e){
    e.dataTransfer.setData("text", e.target.id)
    e.target.parentElement.style.background = 'white'
    
}

function allowDrop(e){
    e.preventDefault()
}

function doTheDrop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(data))
    count++;
    showColor(e)
    
}

function showColor(e){
    if (e.target.id != 'noshow'){
        e.target.style.background= valueSelector(count)
    }
}

function valueSelector(x){
    if(x<5){
        return 'green'
    } else if (x<10){
        return 'yellow'
    } else if (x< 15){
        return 'blue'
    } else {
        return 'red'
    }
}