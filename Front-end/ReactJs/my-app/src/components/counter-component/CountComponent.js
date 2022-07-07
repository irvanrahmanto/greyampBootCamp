import React from "react";

class CountComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0
        };
    }

    // Decrease number function
    decButton = () =>{
        this.setState({
            num: this.state.num-1
        })
    }

    // Increase number function
    countButton = () => {

        this.setState({
            num: this.state.num + 1
        })
    }

    render(){
        return(
            <div>
                <h3>Its Your Number count is :
                 {/* logic condition  */}
                    {
                        (this.state.num % 15 === 0) ? "FizzBuzz" :
                        (this.state.num % 3 === 0) ? "Fizz" :
                        (this.state.num % 5 === 0) ? "Buzz" :
                        this.state.num
                    }
                </h3>

                    <button onClick={this.decButton} >Click me to decrease number</button>
                    <button onClick={this.countButton} >Click me to add number</button>
            </div>
        )
    }
}

export default CountComponent;