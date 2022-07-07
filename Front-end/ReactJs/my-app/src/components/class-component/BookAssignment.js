import React from "react";
import "./ClassComponent.css";
import { library } from "./data.js";

class BookAssignment extends React.Component {
  constructor() {
    super();
    this.state = {
      yourdata: false,
    };
  }

  onHanldeClick = () => {
    // if(this.state.yourdata){
    //     this.setState({
    //         data: false,
    //     })
    // }else{
    //     this.setState({
    //         // data: true,
    //         yourdata: !this.state.yourdata
    //     })
    // }
    this.setState({
      yourdata: !this.state.yourdata,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onHanldeClick}>Clik me please</button>
        {this.state.yourdata ? (
          <div>
            <table table className="BookAssignment">
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
                <th>Categories</th>
                <th>Description</th>
              </tr>
              {library.map((myData) => (
                <tr>
                  <td>{myData.id}</td>
                  <td>{myData.title}</td>
                  <td>{myData.author}</td>
                  <td>{myData.categories}</td>
                  <td>{myData.description}</td>
                </tr>
              ))}
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default BookAssignment;
