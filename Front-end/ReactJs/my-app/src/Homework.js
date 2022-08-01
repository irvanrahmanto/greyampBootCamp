import React from "react";

import UserTable from "./components/homework-component/UserTable";

class Homework extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            objectForChild: {
                fname: "irvan",
                lname: "Rahmanto"
            },
            showComponent: true
        }
    }

    render(){
        return(
            <div className = "Homework">
                <header className = "Homework-header" >
                    <h1> Halo Irvan! this is your Homework file! </h1>
                    <UserTable></UserTable>
                </header>
            </div>
        )
    }
}

export default Homework;