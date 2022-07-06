// There's a 2 ways how to create new component
// Class components or Funtional Components

import React from "react";
import '../class-component/ClassComponent.css';

// Class component
class ClassComponent extends React.Component{
    constructor() {
        super()
    }

    // Every method component, we should have render! in every render must have return
    render() {
        return(
            <div div style = {
                {
                    backgroundColor: "red"
                }
            } >
                <h1 className="heading"> This is my class component </h1>
                <h1></h1>
            </div>
        )
    }
}

export default ClassComponent;