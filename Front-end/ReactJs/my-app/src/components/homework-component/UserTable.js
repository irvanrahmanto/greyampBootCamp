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
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    userData: JSON.stringify(data)
                }, () => {
                    alert(this.state.hugeText);
                });
            })
    }

    render(){
        /* if (!this.state.isData) return <div>
            <h1> Pleses wait ! </h1> </div> ; */

        return(
            <div className="App">
                <h3>This is your user table irvan!</h3>

                <table className="BookAssignment">
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

                    {
                        this.state.userData.map((theData) => (
                            `<tr>
                                <td>${theData.id}</td>
                                <td>$${theData.name}</td>
                                <td>${theData.username}</td>
                                <td>${theData.email}</td>
                                <td>${theData.address.street}</td>
                                <td>${theData.address.suite}</td>
                                <td>${theData.address.city}</td>
                                <td>${theData.address.zipcode}</td>
                                <td>${theData.address.geo.lat}</td>
                                <td>${theData.address.geo.lng}</td>
                                <td>${theData.phone}</td>
                                <td>${theData.website}</td>
                                <td>${theData.company.name}</td>
                                <td>${theData.company.catchPhrase}</td>
                                <td>${theData.company.bs}</td>
                            </tr>`
                        ))
                    }

                    <tr>
                        <td></td>
                    </tr>
                </table>

                {/* <table className="BookAssignment">
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

                    {
                        userData.map((theData) => (
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
                        ))
                    }   
                </table> */}

            </div>
            
        )
    }
}

export default UserTable;