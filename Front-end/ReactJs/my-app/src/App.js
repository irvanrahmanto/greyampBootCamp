// import logo from './mufc2.png';
import './App.css';
import React from "react";


import BookAssignment from './components/class-component/BookAssignment';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return ( 
      <div className="App">
        <header className="App-header">
        <BookAssignment></BookAssignment>
      </header>
      </div>
    );
  }
}

export default App;
