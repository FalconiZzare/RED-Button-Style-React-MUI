import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
//Custom
import Logo from "../../assets/ep_logo_stacked_white_300px.png"
import BlobButton from "../../ui/BlobButton/BlobButton";
import Loader from "../../ui/Loader/Loader";
import {UserContext} from "../../App";
import {
    login,
    resetPass,
    setLocalStorageItem,
    verifyPin
} from "../../utils/utils";
import {
    ButtonContainer,
    Credential,
    FormContainer,
    LoginContainer,
    LoginForm,
    LoginNavigationText,
    StatusText
} from "./LoginStyle";
//MUI
import {
    useMediaQuery,
    useTheme,
} from '@mui/material';
const Login = () => {
    const {user, setUser} = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [errorData, setErrorData] = useState(null)
    const [isResetPass, setIsResetPass] = useState(false)
    const [isVerifyPass, setIsVerifyPass] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    })

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleResetPassNavigation = () => {
        setEmail('')
        setPassword('')
        setIsLogin(false)
        setIsVerifyPass(false)
        setIsResetPass(true)
        setErrorData(null)
    }

    const handleLoginNavigation = () => {
        setEmail('')
        setPassword('')
        setIsLogin(true)
        setIsVerifyPass(false)
        setIsResetPass(false)
        setErrorData(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        setErrorData(null)

        const loginFormData = new FormData()
        loginFormData.append('email', email)
        loginFormData.append('password', password)

        try {
            const res = await login(loginFormData)
            if (res.data.success) {
                console.log(res.data.message)
                setUser(res.data.data.user)
                setLocalStorageItem('token', res.data.data.token)

                setTimeout(() => {
                    setIsLoading(false)
                    if (location.state?.from)
                        navigate(location.state.from)
                    else
                        navigate('/')
                }, 1500)
            }
        } catch (error) {
            setTimeout(() => {
                setErrorData(error.response?.data)
                setIsLoading(false)
            }, 1500)
        }
    };
    const handleResetPass = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        setErrorData(null)

        const resetFormData = new FormData()
        resetFormData.append('email', email)

        try {
            const res = await resetPass(resetFormData)
            if (res.data.success) {
                console.log(res.data.message)

                const delayDebounce = setTimeout(() => {
                    setIsResetPass(false)
                    setIsLoading(false)
                    setIsVerifyPass(true)
                }, 1500)

                return () => clearTimeout(delayDebounce)
            }
        } catch (error) {
            setTimeout(() => {
                setErrorData(error.response?.data)
                setIsLoading(false)
            }, 1500)
        }
    }

    const handleVerifyPass = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        setErrorData(null)

        const verifyFormData = new FormData()
        verifyFormData.append('pin', otp)
        verifyFormData.append('newPassword', password)

        try {
            const res = await verifyPin(verifyFormData)
            if (res.data.success) {
                console.log(res.data.message)

                const delayDebounce = setTimeout(() => {
                    setIsLoading(false)
                    setIsVerifyPass(false)
                    setIsLogin(true)
                    setOtp('')
                    setPassword('')
                    setEmail('')
                }, 1500)

                return () => clearTimeout(delayDebounce)
            }
        } catch (error) {
            setTimeout(() => {
                setErrorData(error.response?.data)
                setIsLoading(false)
            }, 1500)
        }
    }

    return (
        <LoginContainer>
            <FormContainer isMobile={isMobile}>
                <img alt={'logo'} src={Logo}/>
                { isLogin &&
                    <LoginForm onSubmit={handleSubmit}>
                        <Credential
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Credential
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <StatusText>
                            {errorData?.message}
                        </StatusText>
                        <ButtonContainer>
                            {
                                isLoading ?
                                    <Loader/> : <BlobButton name={'Log In'} type={'submit'}/>
                            }
                        </ButtonContainer>
                        <LoginNavigationText
                            onClick={handleResetPassNavigation}
                            isNavigating={true}
                        >
                            Forgot Password?
                        </LoginNavigationText>
                    </LoginForm>
                }
                { isResetPass &&
                    <LoginForm onSubmit={handleResetPass}>
                        <LoginNavigationText isNavigating={false}>
                            Enter the email associated with your account below:
                        </LoginNavigationText>
                        <Credential
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <StatusText>
                            {errorData?.message}
                        </StatusText>
                        <ButtonContainer>
                            {
                                isLoading ?
                                    <Loader/> : <BlobButton name={'Get Code'} type={'submit'}/>
                            }
                        </ButtonContainer>
                        <LoginNavigationText
                            onClick={handleLoginNavigation}
                            isNavigating={true}
                        >
                            Back To Login
                        </LoginNavigationText>
                    </LoginForm>
                }
                { isVerifyPass &&
                    <LoginForm onSubmit={handleVerifyPass}>
                        <Credential
                            label="OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <Credential
                            label="New Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <StatusText>
                            {errorData?.message}
                        </StatusText>
                        <ButtonContainer>
                            {
                                isLoading ?
                                    <Loader/> : <BlobButton name={'Submit'} type={'submit'}/>
                            }
                        </ButtonContainer>
                    </LoginForm>
                }
            </FormContainer>
        </LoginContainer>
    );
};

export default Login;