import React from "react";
import App from "../App";
import userService from "../components/services/userService";
import userService from "../components/services/userService";

//const userServices = new userService()

const pretectedRoutes = ({children}) => {
    const authenticatedUser = userService.authenticatedUser()
    return authenticatedUser ? children : <App/>
}

export default pretectedRoutes