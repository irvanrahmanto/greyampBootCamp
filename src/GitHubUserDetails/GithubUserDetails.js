import React, { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import '../GitHubUserDetails/GithubUserDetails.css'


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
            {/* <h1>Halo Irvan! This is your user detail page!</h1> */}
                <div className="flex-container2">
                        <div>
                            <h1 className="tittle1">Welcome to your Profil</h1>
                            <img className="yourImg" src={location.state.infoData.avatar_url} alt="" />
                            <h2 className="tittle">{location.state.infoData.login}</h2>
                            <form action={location.state.html_url}>
                                <button className = "profilBtn"> Reach me out </button>
                            </form>
                            
                            {/* <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p> */}
                        </div>
                </div>

                
                {/* <div className="card">
                    <img src="{location.state.infoData.avatar_url}" alt="" />
                    <h1>{location.state.infoData.login}</h1>
                    <p className="title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div className="logo">
                        <a href="#"><i className="fa fa-dribbble"></i></a> 
                        <a href="#"><i className="fa fa-twitter"></i></a>  
                        <a href="#"><i className="fa fa-linkedin"></i></a>  
                        <a href="#"><i className="fa fa-facebook"></i></a> 
                    </div>
                    <p><button>Contact</button></p>
                </div> */}

        </div>
    );
}

export default GithubUserDetails;