import React from "react";
import '../homework-component/UserTable.css'

class UserTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userData: [],
            isData: false
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
            .then((data) => {
                this.setState({
                    userData: data
                });
            })
    }

    render(){
        return(
            <div className="App">
                <h3>This is your user table irvan!</h3>
                
                <table className="BookAssignment">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address - Street</th>
                            <th>Address - Suite</th>
                            <th>Address - City</th>
                            <th>Address - Zipcode</th>
                            <th>Geo - Lat</th>
                            <th>Geo - lng</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company - Name</th>
                            <th>Company - catchphrase</th>
                            <th>Company - bs</th>
                        </tr>
                    </thead>

                    
                    {
                        this.state.userData.map((theData) => 
                                <tbody>
                                    <tr>
                                        <td>{theData.id}</td>
                                        <td>{theData.name}</td>
                                        <td>{theData.username}</td>
                                        <td>{theData.email}</td>
                                        <td>{theData.address.street}</td>
                                        <td>{theData.address.suite}</td>
                                        <td>{theData.address.city}</td>
                                        <td>{theData.address.zipcode}</td>
                                        <td>{theData.address.geo.lat}</td>
                                        <td>{theData.address.geo.lng}</td>
                                        <td>{theData.phone}</td>
                                        <td>{theData.website}</td>
                                        <td>{theData.company.name}</td>
                                        <td>{theData.company.catchPhrase}</td>
                                        <td>{theData.company.bs}</td>
                                    </tr>
                                </tbody>
                        )
                    }
                    
                </table>
            </div>
            
        )
    }
}

export default UserTable;