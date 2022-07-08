import React from "react";

class LifeCycleMethods extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        console.log('This is mount component')
        // this.setState({
        //     counter: 1000
        // })
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props.newObject, state.obj) // This will give you different values
        // if (props.newObject !== state.obj) {
        //     //Change in props
        //     return {
        //         obj: props.newObject,
        //         // counter: props.updateMyCounter
        //     };
        // }
        // return null; // No change to state

        if (props.updateMyCounter !== state.counter) {
            // change in props
            return {
                counter: props.updateMyCounter
            }
        }
        // No change to state
        return null;
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log(props.newObject, state.obj) // This will give you different values
    //     if (props.newObject !== state.obj) {
    //         //Change in props
    //         return {
    //             obj: props.newObject
    //         };
    //     }
    //     return null; // No change to state
    // }

    // // componentDidUpdate(prevProps, prevState) {
    // //     console.log(<prevProps></prevProps>.newObject, this.state.obj) // This will give me same object as App.js
    // //     console.log("My component is updated")
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.newObject, this.state.obj) // This will give me same object as App.js
        console.log("My component is updated")
    }


    componentWillUnmount(){
        console.log("My component is unmounted : ")
    }


    render(){
        let {counter, obj} = this.state;
        console.log('My counter is :', this.state.counter)
        // console.log('My Object is :', this.state.obj)
        // console.log(prevProps.newObject, this.state.obj)
        return(
            <div>
                <h1> This is your lifecycle component: {this.state.counter} </h1> <p> {this.state.obj.fname} </p>
            </div>
        )
    }
}

export default LifeCycleMethods;