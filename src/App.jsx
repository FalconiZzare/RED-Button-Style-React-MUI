import React, {createContext, useMemo, useState} from "react";
import {BrowserRouter} from "react-router-dom";
//MUI
import {ThemeProvider, createTheme} from "@mui/material/styles";
//Custom
import ScrollToTop from "./utils/utils";
import EchelonRoutes from "./routes/EchelonRoutes"
import Header from "./pages/Header/Header";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Mulish'
        }
    }
})

export const UserContext = createContext(null)

function App() {
    const [user, setUser] = useState(undefined)

    const userValue = useMemo(() => ({
        user,
        setUser
    }), [user, setUser])

    return (
        <>
            <ThemeProvider theme={theme}>
                <UserContext.Provider value={userValue}>
                    <BrowserRouter>
                        <ScrollToTop/>
                        <Header/>
                        <EchelonRoutes />
                    </BrowserRouter>
                </UserContext.Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
