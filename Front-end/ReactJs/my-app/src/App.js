// import logo from './mufc2.png';
import './App.css';
import React from "react";
import CountComponent from './components/counter-component/CountComponent';
import ClassComponent from './components/class-component/ClassComponent';

import UserTable from './components/homework-component/UserTable';

// import ClassComponent
import BookAssignment from './components/class-component/BookAssignment';

// import Forms from '/components/class-component/Forms'
import Forms from './components/class-component/Forms';
import LifeCycleMethods from './components/LifeCycleMethod';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      objectForChild: {
        fname: "irvan",
        lname: "Rahmanto"
      },
      showComponent: true
      // userData: []
    }
  }

  componentDidMount(){
    console.log("App.js is mounted")
  }

  

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleToggle = () => {
    this.setState({
      toggleState: !this.state.toggleState
    })
  }

  childComponentIsClicked = () => {
    alert('Hey child is clicked!')
    // toggleState: !this.state.toggleState
  }

  hideMyComponent = () => {
    this.setState({
      showComponent: false
    })
  }

  render(){
    return ( 
      <div className="App">
        <header className="App-header">
          <UserTable></UserTable>
        {/* {
          this.state.post.map(post => {
            return <UserTable></UserTable>
          })
        } */}
        

        {/* 1 st way to call component */}
        {/* <LifeCycleMethods></LifeCycleMethods> */}

        {/* 2nd way to call component */}

        {/* {
          this.state.showComponent ?
          <LifeCycleMethods updateMyCounter = {11}
          newObject = {this.state.objectForChild} /> : null
        }

       

        <button onClick={this.hideMyComponent}>Hide Component</button>


         <h1> This is my form </h1> 
         <Forms></Forms> */}

        {/* <BookAssignment></BookAssignment>

        <CountComponent></CountComponent>

        <button onClick={this.handleClick} className="btn">Click me</button>
        <button onClick={this.handleToggle} className="btn">Click me 2</button>

        <ClassComponent toggleStateValue={this.state.toggleState} childFunction={this.childComponentIsClicked} counterValue={this.state.counter}></ClassComponent> */}

      </header>
      </div>
    );
  }
}

export default App;
