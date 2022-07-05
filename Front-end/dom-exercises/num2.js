function changeColor() {
    const changeBold = document.getElementsByTagName("b")
    for(let i=0; i < changeBold.length; i++){
        changeBold[i].style.color = "red"
    }
}