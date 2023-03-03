import React, {useContext} from "react";
import {UserContext} from "../App";
import PermissionDenied from "../pages/PermissionDenied/PermissionDenied";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {user} = useContext(UserContext)
    if(user) {
        return user["accessLevel"] >= rest.requiredAccessLevel ?
            Component : <PermissionDenied levelInfo={rest.requiredAccessLevel}/>
    }
}

export default PrivateRoute