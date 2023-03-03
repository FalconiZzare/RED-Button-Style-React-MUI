import React from 'react';
//MUI
import {Stack} from "@mui/material";
//Custom
import SideBar from "../../pages/SideBar/SideBar";

const AddCar = () => {
    return (
        <Stack
            width={'100vw'}
            direction={'row'}
            minHeight={"calc(100vh - 110px)"}
            spacing={3}
            mt={1}
        >
            <SideBar />
            Hello
        </Stack>
    );
};

export default AddCar;