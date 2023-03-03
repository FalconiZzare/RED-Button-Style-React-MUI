import React from 'react';
import SideBar from "../../pages/SideBar/SideBar";
import {Stack} from "@mui/material";

const Admin = () => {
    return (
        <Stack
            width={'100vw'}
            direction={'row'}
            minHeight={"calc(100vh - 110px)"}
            spacing={3}
            mt={1}
        >
            <SideBar />
            This is Admin
        </Stack>
    );
};

export default Admin;