import React from "react";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

export const base_url = "http://localhost:5000/api";

export default function ScrollToTop() {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
}

export const currency = new Intl.NumberFormat("en-us")

export const getLocalStorageItem = (item) => {
    if (typeof localStorage !== "undefined") {
        return localStorage.getItem(item)
    }
    return null
}

export const setLocalStorageItem = (item, value) => {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem(item, value)
    }
}

export const removeLocalStorageItem = (item) => {
    if (typeof localStorage !== "undefined") {
        localStorage.removeItem(item)
    }
}

export const noAuthHeader = () => {
    return {
        'Content-Type': 'multipart/form-data'
    }
}

export const authHeader = () => {
    const token = getLocalStorageItem('token')

    if (token) {
        return {
            Authorization: "Bearer " + token
        }
    }
    return null
}

export const multiPartAuthHeader = () => {
    const token = getLocalStorageItem('token')

    if (token) {
        return {
            Authorization: "Bearer " + token,
            'Content-Type': 'multipart/form-data'
        }
    }
    return null
}

export const login = async (data) => {
    return await axios.post(`${base_url}/auth/login`, data, {
        headers: noAuthHeader()
    })
}

export const resetPass = async (data) => {
    return await axios.post(`${base_url}/auth/reset-password`, data, {
        headers: noAuthHeader()
    })
}

export const verifyPin = async (data) => {
    return await axios.post(`${base_url}/auth/verify-pin`, data, {
        headers: noAuthHeader()
    })
}

export const getUser = async () => {
    return await axios.get(`${base_url}/auth/user`, {
        headers: authHeader()
    })
}