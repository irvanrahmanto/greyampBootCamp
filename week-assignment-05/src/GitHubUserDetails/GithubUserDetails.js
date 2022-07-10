import React, { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';


function GithubUserDetails(props){
    const [usrDetails, setUsrDetails] = useState([]);

    const location = useLocation();

    const fetchUserDetails = (() => {
        fetch(`${location.state.infoData.url}`)
            .then((response) => response.json())
            .then((results) => setUsrDetails(results))
            .catch(error => console.log('Error is ', error))
    })

    useEffect (() => {
        fetchUserDetails();
    }, []);

    return(
        <div>
            <h1>Halo Irvan! This is your user detail page!</h1>
                <div className="container">
                        <div>
                            <h1>Profil</h1>
                            <img src={location.state.infoData.avatar_url} alt="" />
                            <h2>{location.state.infoData.login}</h2>
                        </div>
                </div>
        </div>
    );
}

export default GithubUserDetails;