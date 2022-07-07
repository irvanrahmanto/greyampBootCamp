// Get element by id
const myElm = document.getElementById("haha")
console.log(myElm)

myElm.style.color = "red";
myElm.style.fontWeight = "normal"

// Get element by class name
const myClassElement = document.getElementsByClassName("ir")
// console.log(myClassElement)
myClassElement[0].style.color = "yellow"
myClassElement[1].style.color = "red"
myClassElement[2].style.color = "blue"

// get element by tag name
const myTagElm = document.getElementsByTagName("p")
console.log(myTagElm)

// Query selector
const myQueryElm = document.querySelector("ul li"); // select ele through query
console.log(myQueryElm);
myQueryElm.style.color = "orange"

// const myQueryElm = document.querySelector("span");
// console.log(myQueryElm);
// myQueryElm.style.color = "Apple"

const invClassNameElm = document.getElementsByClassName("Shafira")
console.log(invClassNameElm)


const body = document.body
const newElm = document.createElement("h1")
newElm.innerHTML = "Hai Irvan"
// newElm.innerText = "Hai Text"
body.append(newElm)

function removeEle() {

    const getEle = document.getElementById("irvan")
    // getEle.style.color = "purple"
    getEle.remove()

    // alert("clicked")

}

function newClickFunc() {
    const myEle = document.getElementById("irvan")
    myEle.style.fontWeight = "bolder"
    // alert("Hey Irvan")
}

const myButton2 = document.getElementById("irvanButton");
console.log(myButton2)
myButton2.addEventListener("click", newClickFunc) // event name is click, function is - new click function

// myButton2.addEventListener