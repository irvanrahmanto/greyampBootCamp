import React from "react";

class Forms extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: ""
        }
    }

    // handleChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         fname: event.target.value
    //     })
    // }

    handleFirstNameChange = (event) => {
        console.log(event.target.value)
        this.setState({
            fname: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        console.log(event.target.value)
        this.setState({
            lname: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("First name ", this.state.fname, "Last name: ", this.state.lname)
    }

    render() {
        return(
            // <form action="">
            //     <label htmlFor="">Enter your name:
            //         <input type="text" value={this.state.form} onChange={this.handleChange}/>
            //     </label>
            // </form>

            <form onSubmit={this.handleSubmit}>
                <label>Enter your first name:
                    <input type="text" value={this.state.fname} onChange={this.handleFirstNameChange}/>
                </label>

                <label>Enter your last name:
                    <input type="text" value={this.state.lname} onChange={this.handleLastNameChange}/>
                </label>
                <button>Submit</button>
                <h2> Your First name is : {this.state.fname} </h2>
                <h2> Your Last name is {this.state.lname}</h2>
            </form>

            

    
        )
    }
}

export default Forms;