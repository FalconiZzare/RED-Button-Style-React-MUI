import React, {useContext, useEffect} from 'react';
import {Route, Routes, useNavigate, useLocation} from "react-router-dom"
import {getLocalStorageItem, getUser} from "../utils/utils";
import {UserContext} from "../App";
//Pages
import Login from "../pages/Login/Login";
import AddCar from "../components/AddCar/AddCar";
import Admin from "../components/Admin/Admin";
import PrivateRoute from "./PrivateRoute";

const EchelonRoutes = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {user, setUser} = useContext(UserContext)
    const token = getLocalStorageItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/login', {replace: true, state: {from: location}})
        } else if (!user) {
            const fetchData = async () => {
                const res = await getUser()
                const userCheck = res?.data?.data
                if (userCheck) {
                    setUser(userCheck)
                }
            }
            fetchData()
                .catch(err => {
                    console.log(err?.response?.data)
                    navigate('/login', {replace: true, state: {from: location}})
                })
        }
    }, [])

    const PERMISSIONS = {
        Admin: 3,
        Contributor: 2,
        Viewer: 1
    }

    return (
        <>
            <Routes>
                <Route path={"/"} element={<AddCar/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/admin"} element={
                    <PrivateRoute
                        requiredAccessLevel={PERMISSIONS.Admin}
                        component={<Admin/>}
                    />
                }/>
            </Routes>
        </>
    );
};

export default EchelonRoutes;