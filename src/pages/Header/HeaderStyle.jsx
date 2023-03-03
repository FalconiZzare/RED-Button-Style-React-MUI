import React from "react";
import {Stack} from "@mui/material";
import {COLORS, SHADOWS} from "../../colors/globalColors";

export const HeaderContainer = (props) => {
    return (
        <Stack
            {...props}
            direction={'row'}
            sx={{
                maxWidth: '100vw',
                height: '100px',
                background: COLORS.LightSilver,
                justifyContent: 'space-between',
                alignItems: 'center',
                px: '2rem'
            }}
        />
    )
}

export const UserInfoContainer = (props) => {
    return (
        <Stack
            {...props}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            spacing={3}
            sx={{
                px: 2,
                py: 1,
                background: COLORS.White,
                borderRadius: '10px',
                boxShadow: SHADOWS.FadedShadow
            }}
        />
    )
}
