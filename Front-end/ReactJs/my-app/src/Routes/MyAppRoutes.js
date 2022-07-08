import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '../App';
import ClassComponent from '../components/class-component/ClassComponent';
import Forms from '../components/class-component/Forms';
import LifeCycleMethods from '../components/LifeCycleMethod';
import LoginForm from '../components/login-form/LoginForm';

function MyAppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                {/* This is for app js */}
                <Route path="/" element={<App />} />

                {/* This is for lifecycle method.js */}
                <Route path="/lifecycle" elements={<LifeCycleMethods />}></Route>
                <Route path="/forms" element={Forms} />

                <Route path="/classComponent" element={<ClassComponent />}/>

                <Route path="/LoginForm" element={<LoginForm />}/>

            </Routes>
        </BrowserRouter>
    )
}

export default MyAppRoutes;