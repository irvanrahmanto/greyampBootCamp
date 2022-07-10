import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import '../GitHubUser/GithubUsers.css';

function GithubUsers(props){

    return(
        <div>
            <div className="container">
                {
                    props.usrData.map((mydata) =>
                        <div key={mydata.id}>
                            <Link className="item" to="/githubuserdetails" state={{infoData: mydata}}>
                                <img src={mydata.avatar_url} id={mydata.id} />
                            </Link>
                            <div>
                                <h4><b>{mydata.login}</b></h4> 
                                <p>{mydata.url}</p> 
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default GithubUsers;