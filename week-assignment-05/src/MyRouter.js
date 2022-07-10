import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import GithubUsers from "./GitHubUser/GithubUsers";
import GithubUserDetails from "./GitHubUserDetails/GithubUserDetails";

function MyRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/GithubUsers" element={<GithubUsers />} />
                <Route path="/githubuserdetails" element={<GithubUserDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter;