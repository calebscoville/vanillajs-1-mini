let count = 0
const element = document.getElementById('counter')

function increase(){
  count++
  element.innerText = count 
}

function decrease(){
    count--
    element.innerText = count 
}

function reset(){
    count = 0
    element.innerHTML = `<mark>${count}</mark>`
}

function slectTheme(theme){
    document.getElementsByTagName('body')[0].classname = theme
    document.getElementsByTagName('main')[0].classname = theme
    const buttons = document.getElementsByTagName('button')

    for(let i; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}