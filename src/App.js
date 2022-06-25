import React from "react";
import {Stack} from "@mui/material";
import Background from "./assets/Dark-down.svg"
import Header from "./components/Header"
import News from "./components/News";

const App = () => {

    const navbarElements = [
        {id: 1, item: 'Torrents'},
        {id: 2, item: 'Collages'},
        {id: 3, item: 'Requests'},
        {id: 4, item: 'Forums'},
        {id: 5, item: 'Top 10'},
        {id: 6, item: 'Rules'},
        {id: 7, item: 'Wiki'},
        {id: 8, item: 'Staff'},
    ];

    return (
        <div
            style={{
                height: '100vh',
                backgroundImage: `url(${Background})`,
                backgroundSize: '137px 159px',
                backgroundColor: '#202224',
                fontFamily: 'apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
            }}
        >
            <Stack alignItems={'center'} spacing={4}>
                <Header navbarItems={navbarElements}/>
                <News/>
            </Stack>
        </div>
    );
}

export default App;
