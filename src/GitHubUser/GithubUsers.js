import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import '../GitHubUser/GithubUsers.css';

function GithubUsers(props){

    return(
        <div className="row">
            {
                props.usrData.map((mydata) =>
                    <div div className = "column" key={mydata.id}>
                        <div className="card">
                            <h3><b>{mydata.login}</b></h3>
                            <Link to="/githubuserdetails" state={{infoData: mydata}}>
                                <img src={mydata.avatar_url} id={mydata.id} alt="" className="yourimage"/>
                            </Link>
                            <h4>Github Url</h4>
                            <p>{mydata.url}</p>
                            <Link to="/githubuserdetails" state={{infoData: mydata}}>
                                <button class="button-1" role="button">Details</button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default GithubUsers;