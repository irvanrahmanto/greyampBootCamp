import React, {useEffect, useRef, useState} from "react";
import ClassComponent from "../class-component/ClassComponent";

function FunctionalComponent() {

    const [counter, setCounter] = useState(0); // First state
    const [fname, setFname] = useState("") // Second State

    const [arr, setArrayEle] = useState(["Apple", "Mango", "Durian"])

    const inputReference = useRef();
    // const handleIncrement = () =>{
    //     setCounter(
    //         counter => counter +1
    //     )
    // }
    // const [click] = useState("")

    // This block will run only one time
    // useEffect(()=>{
    //     console.log("This will run only first time!")
    //     setFname("Irvan")
    // }, [])

    // This will run on every re render
    // useEffect(() => {
    //     console.log("I am rendered! is code Block 1", props.showComponent, fname)
    // }, [props.showComponent])

    // useEffect(() =>{
    //     console.log("My depedency is updated! is code Block 2", fname)
    // }, [fname])

    const handleButton = (event) => {
        setCounter(
            event.target.value
        )
    }
    
    const handleFocus = () => {
        inputReference.current.focus();
    }

    return(
        <div>
            <h1>This is my functional component!</h1>
            {/* <h1>This is my counter {counter}</h1> */}
            {/* <button onClick={handleIncrement} >Increment +</button> */}

            <br />
            <br />
            <br />

            
            {/* <h2> Product A: {counter}</h2> */}
            <h2>My name is : {counter}</h2>
            <form>
                <label>Quantity:
                    <input type="text" value={counter} onChange={handleButton}/>
                </label><br />
                <br/>
                <button disabled={counter<=0}>Add to cart</button>
            </form>

            <br />
            <br />
            <br />

            <h2>This is your Focus component exercises</h2>
            <input ref={inputReference} type="text"/>
            <button onClick={handleFocus} >Change Focus to Input</button>
            <br />
            <br />

            <ul>
                {
                    arr.map((fruit, index) => <li key={index}>{fruit}</li>)
                }
            </ul>
        </div>
    )
}

export function consoleSomething(){
    console.log("Your console print Irvan!!")
}

export default FunctionalComponent;