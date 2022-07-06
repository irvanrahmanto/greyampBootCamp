import React from "react";
import { library } from './data.js';

class BookAssignment extends React.Component {
    constructor(){
        super();
        this.state = {
            data: false,
        }
    }

    onHanldeClick = () => {
        if(this.state.data){
            this.setState({
                data: false,
            })
        }else{
            this.setState({
                data: true,
            })
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.onHanldeClick}>Clik me please</button>

                <div>
                        <table style={{border:"5px black solid"}}>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Categories</th>
                            <th>Description</th>
                        </tr>
                        {library.map((myData =>
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
            
                {/* {library.map(myData => (
                    <p>{myData.author}</p>
                ))} */}

                {/* {
                   this.state.myData ?
                    <div>
                        <table style={{border:"5px black solid"}}>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Categories</th>
                            <th>Description</th>
                        </tr>
                        {library.map((myData =>
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
                     :  <div 
                     style={{border:"5px black solid"}}>
                        <h1>No Data.</h1>
                     </div> 
                 
                } */}

            </div>
        )
    }
}

export default BookAssignment;