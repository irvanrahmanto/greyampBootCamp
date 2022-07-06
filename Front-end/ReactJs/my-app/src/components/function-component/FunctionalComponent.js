import React from "react";
import ClassComponent from "../class-component/ClassComponent";

function FunctionalComponent() {
    return(
        <React.Fragment>
            <h1>Hai this is your functional component</h1>
            <ClassComponent></ClassComponent>
            <div></div>
        </React.Fragment>
    )
}

export function consoleSomething(){
    console.log("Your console print Irvan!!")
}

export default FunctionalComponent;