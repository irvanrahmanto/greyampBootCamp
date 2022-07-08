// There's a 2 ways how to create new component
// Class components or Funtional Components

import React from "react";
import '../class-component/ClassComponent.css';

// Class component
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    // This is life-cycle method!
    componentDidMount() {
        this.setState({
            counter: 1000
        })
        // alert('Child component is mounted!')
    }

    handleChildButton = () => {
        this.props.childFunction();
    }

    


    // Every method component, we should have render! in every render must have return
    render() {
        let { counter } = this.state;
        let { toggleStateValue } = this.props

        console.log(this.props.toggleStateValue)
        console.log("My counter value is : ",this.state.counter)
        return ( 
            <div> 
            {
                this.props.toggleStateValue ?
                <div className = "div-container" >
                Halo Irvan!
                </div> : null
            } 
                <button onClick = {this.handleChildButton} > Child Component </button> 
            </div>
        )
    }
}

export default ClassComponent;