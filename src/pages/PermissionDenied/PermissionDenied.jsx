import React from 'react';
import {Stack, Typography} from "@mui/material";
//Custom
import SideBar from "../SideBar/SideBar";
import {COLORS} from "../../colors/globalColors";

const PERMISSION_NAMES = {
    3: 'Admin',
    2: 'Contributor',
    1: 'Viewer'
}

const PermissionDenied = ({levelInfo}) => {

    return (
        <Stack
            width={"calc(100vw - .5rem)"}
            direction={'row'}
            minHeight={"calc(100vh - 110px)"}
            spacing={1}
            mt={1}
        >
            <SideBar />
            <Stack
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                    background: COLORS.LightSilver,
                    borderRadius: '10px'
                }}
            >
                <Typography
                    sx={{
                        mb: '8rem',
                        fontSize: '18px',
                        background: COLORS.FadedOrange,
                        p: '2rem 4rem',
                        borderRadius: '10px'
                    }}
                >
                    {`Only users with Access Level ${levelInfo} (${PERMISSION_NAMES[levelInfo]}) or higher can view this page!`}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default PermissionDenied;