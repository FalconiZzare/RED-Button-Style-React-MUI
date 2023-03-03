import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
//MUI
import {Box, Stack, Tooltip, Typography, Fade} from "@mui/material";
//Custom
import {UserContext} from "../../App";
import {COLORS} from "../../colors/globalColors";
import Logo from "../../assets/ep_logo_stacked_400px.png"
import {CircleUser, Logout} from "../../ui/Icons";
import {removeLocalStorageItem} from "../../utils/utils";
import {HeaderContainer, UserInfoContainer} from "./HeaderStyle";

const Header = () => {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)

    const handleLogout = () => {
        removeLocalStorageItem('token')
        setUser(undefined)
        navigate('/login')
    }

    return (
        <HeaderContainer>
            <Box>
                <img alt={'logo'} src={Logo} width={'250px'}/>
            </Box>
            <UserInfoContainer>
                <CircleUser size={'42'} color={COLORS.Black}/>
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <Typography
                        sx={{
                            fontSize: '22px',
                            fontWeight: 700,
                            color: COLORS.DeepOrange
                        }}
                    >
                        {user?.firstName} {user?.lastName}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: 400
                        }}
                    >
                        Access Level {user?.accessLevel}
                    </Typography>
                </Stack>
                <Tooltip
                    title={"Logout"}
                    arrow
                    disableInteractive
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 300}}
                    componentsProps={{
                        tooltip: {
                            sx: {
                                p: 1,
                                fontFamily: 'Mulish',
                                fontSize: '12px',
                                bgcolor: COLORS.FadedOrange,
                                color: COLORS.DeepOrange,
                                '& .MuiTooltip-arrow': {
                                    color: COLORS.FadedOrange,
                                },
                            },
                        },
                    }}
                >
                    <Box
                        onClick={handleLogout}
                        sx={{
                            pt: .5,
                            cursor: 'pointer'
                        }}
                    >
                        <Logout size={'24'} color={COLORS.LightGrey}/>
                    </Box>
                </Tooltip>
            </UserInfoContainer>
        </HeaderContainer>
    );
};

export default Header;